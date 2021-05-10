import React, { Component } from 'react';
import '../App.css' 
import { withRouter } from 'react-router-dom';


class Int extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            item: {}
          };
      }
    
      async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
          const customer = await(await fetch(`https://leloux.herokuapp.com/crud/uintervention/${this.props.match.params.id}`)).json();
          const data = customer;
          this.setState({item: data});
          
        }
      }



 
      render(){
        const {item} = this.state;

  return  <div class='container'>
        <div class='en'><h1>Facture d'intervention</h1></div>
        <div class='spc'></div>

    <form  class='fi'>

    <div className='fg'>
      <label htmlFor="contact">Douala, le {item.crat}</label>
            </div>
    <div className='fg'>
      <label htmlFor="owner">Client(e) : {item.owner}</label>
          
      </div>

    <div className='fg'>
      <label htmlFor="contact">Contact : {item.contact}</label>
            </div>

            <div class='spc'></div>
            
            <div className='fg'>
      <label htmlFor="contact">Marque</label>
      {item.marque}
            </div>

            <div className='fg'>
      <label htmlFor="contact">Modele</label>
      {item.modele}
            </div>

            <div className='fg'>
      <label htmlFor="contact">Année</label>
      {item.year}
            </div>

            <div className='fg'>
      <label htmlFor="contact">Immatriculation</label>
      {item.immat}
            </div>

            <div className='fg'>
      <label htmlFor="contact">Kilométrage</label>
      {item.kil} KM
            </div>

            <div class='spc'></div>

            <div className='fg'>
      <label htmlFor="contact">Action</label>
      {item.action}
            </div> 

                        <div className='fg'>
      <label htmlFor="contact">Systeme</label>
      {item.syst}
            </div>   

                        <div className='fg'>
      <label htmlFor="contact">Sous-systeme</label>
      {item.ssyst}
            </div> 

                        <div className='fg'>
      <label htmlFor="contact">Organe</label>
      {item.org}
            </div>  

                        <div className='fg'>
      <label htmlFor="contact">Prix</label>
      {item.pv} FCFA
            </div> 

            <div className='fg'>
      <label htmlFor="contact">Main d'oeuvre</label>
      {item.mo} FCFA
            </div>

            <div className='fg'>
      <label htmlFor="contact">Total</label>
      {item.mo + item.pv} FCFA
            </div>

            <div class='spc'></div>

            <div className='fg'>
      <label htmlFor="contact">Montant Total</label>
      {item.mo + item.pv} FCFA
            </div>

            <div class='spc'></div>

            <div class='spc'></div>

      
    </form>
    </div>
  
            }
        }

export default withRouter(Int);
