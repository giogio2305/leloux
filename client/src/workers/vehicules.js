import Nav from '../components/nav'
import Navitem from '../components/Navitem'
import CustomerList from '../components/CustomerList'



const Vehicules = () => {
 

  
    return (
      <div>
        <Nav pro="Dasilva Gueye" nm={"Dasilva Gueye".substring(0,2)}>
        <Navitem href="./vehicules" navi="V&eacute;hicules" isActive></Navitem>
        <Navitem href="./reparateurs" navi="R&eacute;parateurs"></Navitem>
        <Navitem href="./interventions" navi="Interventions"></Navitem>
        </Nav>
        <CustomerList
     />

      </div>
    )
 
}

export default Vehicules
