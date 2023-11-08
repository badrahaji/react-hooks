 import { Anime, Series } from './Links';
import './style.css'
 import{Route,Routes,Link} from 'react-router-dom'
 import Home from './Home';
 const NavBar = ()=>{
    return(
        <div className='navbar'>
         
             <ul>
                <li>Home</li>
                <li>Series</li>   
                <li> Anime </li>   
            </ul>
    
        </div>
    )
}
export default NavBar;