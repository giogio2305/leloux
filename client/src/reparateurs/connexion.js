import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useState} from 'react';
import '../App.css';
import Field from "../components/field"
import po from '../public/person-outline.svg';
import loo from '../public/lock-open-outline.svg';
import Axios from 'axios'

function Rpc() {



  const history = useHistory();
  const [msg, setMsg] = useState("");
 const login = async (event) =>{
  event.preventDefault()

  const repa =event.currentTarget.elements.repa;
  const code= event.currentTarget.elements.code;
  console.log(repa.value);
  console.log(code.value);

   await Axios.post("http://localhost:3001/login", {
      repa: repa.value,
      code: code.value,
  }).then((response) =>{
    if(!response){
        console.log("pas de reponse")
    }else{
      console.log(response.data.result);
      localStorage.setItem('reauth', JSON.stringify(response.data));
       setMsg("Vous etes connecte clicquez" + <Link exact to='/reparateurs/interventions'>ici</Link>);
       history.push('/reparateurs/interventions');
      if(localStorage.getItem("reauth")){
      
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
<span className='ll'>Leloux</span> R&eacute;parateurs
</h1>
<h3 className='sub'>
G&eacute;rez facilement vos interventions en ligne
</h3>
     </div>
     <div className='form'>
       <div className='spc'></div>
       <h2>Connectez-vous à <span className='ll'>Leloux</span></h2>
       <span>{msg}</span>
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

