// server/index.js

const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

var bodyParser = require('body-parser');
 
global.__basedir = __dirname;
 
const db = require('./db.js');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');

app.use(express.json());

//app.use(bodyParser.json());
const Vehicules = db.Vehicules;
const Reparateurs = db.Reparateurs;
const Interventions = db.Interventions;
const Workers = db.Workers;

let router = require('./router.js');

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
const cors = require('cors')
const corsOptions = {
  origin: 'https://leloux.herokuapp.com',
  optionsSuccessStatus: 200,
  credentials: true,
}
app.use(cors(corsOptions));

app.use(session({
  key: "id",
  secret: "leloux",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  },
})
);

app.use(express.static('resources'));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
app.use('/', router);


/*app.post('/register', (req, res)=>{
 const {username, password} = req.body;
 bcrypt.hash(password, 10).then((hash)=>{
  Reparateurs.create({
    username: username,
    password: hash,
  })
    .then(() => {
      return res.json("USER REGISTERED");
      
    })
    .catch((err) => {
      if (err) {
       return res.status(400).json({ error: err });
        
      }
    });
 })
});*/


// ---Login reparateurs--->
app.post('/login', async (req, res)=>{
  const repa = req.body.repa; 
   const code= req.body.code;
  const reparteur = await Reparateurs.findOne({ where: { repa: repa } });
  if (!reparteur) {console.log("wrong user"); return res.status(400).json({ error: "Reparateurs non existant!"});}

  const dbcode = reparteur.code;
  bcrypt.compare(code, dbcode).then((match)=>{
      if(!match){
      console.log("wrong pass");
        return res
        .status(400)
        .json({error: "Code invalide!"});

      }else{
        session.repa = reparteur;
        const id = session.repa.id;
        const token = jwt.sign({id}, "fixas", {
          expiresIn: 300,
        });
        return res.send({auth: true, token: token, result: reparteur, role: 'REPA'});
      }
  });
  
});
//----end login rep---->
// ---Login employes--->
app.post('/logine', async (req, res)=>{
  const emp = req.body.emp;
  const mail = req.body.mail 
   const code= req.body.code;
  const workers = await Workers.findOne({ where: { pseudo: emp } });
  if (!workers) {console.log("wrong user"); return res.status(400).json({ error: "Employes non existant!"});}

  const dbcode = workers.code;
  console.log(code);
  console.log(dbcode);
  bcrypt.compare(code, dbcode).then((match)=>{
      if(!match){
      console.log("wrong pass");
        return res
        .status(400)
        .json({error: "Code invalide!"});

      }else{
        session.emp = workers;
        const id = session.emp.id;
        const token = jwt.sign({id}, "workers", {
          expiresIn: 300,
        });
        return res.send({auth: true, token: token, result: workers, role: 'EMP'});
      }
  });
  
});
//----end login emp---->

  
db.sequelize.sync().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    //bcrypt.hash("123456789", 10).then((hash)=>{console.log(hash)});
  })
});
