import React from "react";
import '../App.css';
import Nav from '../components/nav'
import Navitem from '../components/Navitem'
import IntList from '../components/IntList'


function Interventions() {
  
  const user = JSON.parse(localStorage.getItem('reauth'));
  const o = user.result.respo; 
  console.log(o);
  document.title = "Interventions";
  return (
    <>
        <Nav pro={o} nm={o.substring(0,2)} item={"reauth"}>
        <Navitem href="./interventions" navi="Interventions" isActive></Navitem>
        <Navitem href="/recent" navi="Statistiques"></Navitem>
        </Nav>
    <div className=''>
    <IntList/>
    </div>
        </>
  );
}

export default Interventions;

