import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return ( 
      <div className="menuContent">
        <ul>
          <Link to="/"><li>Home</li></Link>
           <Link to="/cadastro"><li>+Cadastrar</li></Link>
            <Link to="/clientes"><li>Clientes</li></Link>
        </ul>
      </div>  
     );
}
 
export default Menu;