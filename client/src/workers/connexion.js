import React from "react";
import '../App.css';
import Field from "../components/field"
import po from '../public/person-outline.svg';
import loo from '../public/lock-open-outline.svg';
import at from '../public/at.svg';
import { useHistory, Link } from "react-router-dom";
import { useState} from 'react';
import '../App.css';
import Axios from 'axios'

function Ec() {

  let history = useHistory();
  const [msg, setMsg] = useState("");
  const login = async (event) =>{
   event.preventDefault()
 
   const emp =event.currentTarget.elements.emp;
   const mail =event.currentTarget.elements.mail;
   const code= event.currentTarget.elements.code;
   console.log(emp.value);
   console.log(code.value);
 
    await Axios.post("https://leloux.herokuapp.com/logine", {
       emp: emp.value,
       mail: mail.value,
       code: code.value,
   }).then((response) =>{
     if(!response){
         console.log("pas de reponse")
     }else{
       console.log(response.data.result);
       localStorage.setItem('empauth', JSON.stringify(response.data));
       setMsg("Vous etes connecte clicquez" + <Link exact to='/workers/vehicules'>ici</Link>);
       history.push('/workers/vehicules');
       if(localStorage.getItem("empauth")){
       
       }
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
<span className='ll'>Leloux</span> Employ&eacute;s
</h1>
<h3 className='sub'>
Les experts en gestion de donn&eacute;es en ligne
</h3>
     </div>
     <div className='form'>
       <div className='spc'></div>
       <h2>Connectez-vous à <span className='ll'>Leloux</span></h2>
       <span>{msg}</span>
       <div>
         <form onSubmit={login}>
         <Field
    name="emp"
    type="text"
    autoComplete="pseudo"
    required
    label="Nom"
    src={po}
    alt="person"
    placeholder="Ella Roger"
    />
           <Field
              name="mail"
              type="email"
              autoComplete="email"
              required
              label="Email"
              src={at}
              alt="person"
            placeholder="nom@mail.com"
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
           
           <input type="submit" className='ib' value="Connexion"></input>
         </form>
       </div>
     </div>
      </main>
    </div>
        </>
  );
}

export default Ec;

