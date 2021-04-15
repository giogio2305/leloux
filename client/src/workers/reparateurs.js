import Nav from '../components/nav'
import Navitem from '../components/Navitem'
import RepaList from '../components/RepaList'



const Reparateurs = () => {
  
    return (
      <div>
        <Nav pro='Dasilva Gueye' nm={'Dasilva Gueye'.substring(0,2)}>
        <Navitem href="./vehicules" navi="V&eacute;hicules" ></Navitem>
        <Navitem href="./reparateurs" navi="R&eacute;parateurs" isActive></Navitem>
        <Navitem href="./interventions" navi="Interventions"></Navitem>
        </Nav>
     <RepaList
     />
      </div>
    )
 

}

export default Reparateurs
