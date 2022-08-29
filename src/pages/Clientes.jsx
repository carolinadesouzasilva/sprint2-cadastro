import { useContext } from "react";
import { ContextCliente } from "../context/ContextCliente";
import './Clientes.css';
const Clientes = () => {
    const { clientes } = useContext(ContextCliente);
    return (  
      <div className="clienteContext">
        <h1>Lista de clientes</h1>
        {clientes.map((cliente) => {
           return (<div><p>{cliente.Nome} {cliente.Sobrenome}</p>
            <p>{cliente.Email}</p>
            <p>{cliente.Telefone}</p>
            </div>)
        } 
            
        )}
        

        </div>
    );
}
 
export default Clientes;
