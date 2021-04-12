import  '../App.css'
import { useHistory, Redirect } from "react-router-dom";
export default function Nav({ children, pro, nm, item }) {
  let history = useHistory();
    return (
      <nav className='nav'>
          <div>
          <span className='llo'>Leloux</span>
        <ul className='nl'>
          {children}
        </ul>
          </div>
        <div>
            <div className='cre'>
            <div className='avatar'>{nm}</div>
            <span className='pro'>{pro}</span>
          <button className='sob' onClick={()=>{window.localStorage.clear(); history.push("./")}}> D&eacute;connexion</button>
            </div>

        </div>
      </nav>
    )
  }
  