import Nav from '../components/nav'
import Navitem from '../components/Navitem'
import AintList from '../components/AintList'



const int = () => {
 

  
    return (
      <div>
        <Nav pro="Dasilva Gueye" nm={"Dasilva Gueye".substring(0,2)}>
        <Navitem href="./vehicules" navi="V&eacute;hicules" ></Navitem>
        <Navitem href="./reparateurs" navi="R&eacute;parateurs"></Navitem>
        <Navitem href="./interventions" navi="Interventions"isActive></Navitem>
        </Nav>
        <AintList
     />

      </div>
    )
 
}

export default int
