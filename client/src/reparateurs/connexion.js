import React from "react";
import { useHistory} from "react-router-dom";
import '../App.css';
import Field from "../components/field"
import po from '../public/person-outline.svg';
import loo from '../public/lock-open-outline.svg';
import Axios from 'axios'

function Rpc() {



  const history = useHistory();
 const login = async (event) =>{
  event.preventDefault()

  const repa =event.currentTarget.elements.repa;
  const code= event.currentTarget.elements.code;
  console.log(repa.value);
  console.log(code.value);

   await Axios.post("https://leloux.herokuapp.com/login", {
      repa: repa.value,
      code: code.value,
  }).then((response) =>{
    if(!response){
        console.log("pas de reponse")
    }else{
      localStorage.setItem('reauth', JSON.stringify(response.data));
          history.push('/reparateurs/interventions');
    }
  });

 }
  return (
    <>
    
    <div className='container'>
    <head>
            <title>Leloux employ&eacute;</title>
            <link rel="icon" href="/favicon.ico" />
          </head>
      <main className='box'>
     <div className='aff'>
     <h1 className='title'>
<span className='ll'>Leloux</span> R&eacute;parateurs
</h1>
<h3 className='sub'>
G&eacute;rez facilement vos interventions en ligne
</h3>
     </div>
     <div className='form'>
       <div className='spc'></div>
       <h2>Connectez-vous à <span className='ll'>Leloux</span></h2>
       <div>
         <form onSubmit={login}>
         <Field
    name="repa"
    type="text"
    autoComplete="pseudo"
    required
    label="Nom"
    src={po}
    alt="person"
    placeholder="Ella Roger"
    />
    <Field
    name="code"
    type="password"
    autoComplete="password"
    required
    label="Code d'acc&egrave;s"
    src={loo}
    alt="lock"
    placeholder="8+ caract&egrave;res"
    />
           
           <input type="submit" className='ib' value="Connexion"/>
         </form>
       </div>
     </div>
      </main>
    </div>
        </>
  );
}

export default Rpc;

