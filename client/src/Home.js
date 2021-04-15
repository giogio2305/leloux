import client from './public/client.png';
import rep from './public/rep.png';
import emp from './public/emp.png';
import {Link} from "react-router-dom";
import './App.css';

function Home() {
  document.title = "Leloux by Archris";
    return (

        <div>

        <div className='container'>
        <main className='main'>
          <h1 className='title'>
            Bienvenu sur <Link className='ll'>Leloux</Link>
          </h1>
          <h3 className='sub'>
            Votre r&eacute;parateur automobile en ligne
          </h3>
          <div className='spcr'></div>
          <div className='lico'>

            <Link exact to='/clients/' className='al'><div className='cardi'><span>Clients</span><img src={client} alt="Client leloux" /></div></Link>
            <Link exact to='/reparateurs/' className='al'><div className='cardi'><span>R&eacute;parateurs</span><img src={rep} alt="R&eacute;parateur leloux"/></div></Link>
            
            <Link exact  to='/workers/'  className='al'><div className='cardi'><span>Employ&eacute;s</span><img src={emp} alt="Employ&eacute; leloux" /></div></Link>

            

          </div>
        
        </main>
        </div>
        </div>
    );
  }
  
  export default Home;

