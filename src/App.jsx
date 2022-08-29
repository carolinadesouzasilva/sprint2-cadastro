import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import { ContextClienteProvider } from './context/ContextCliente';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Clientes from './pages/Clientes';

function App() {
 

  return (

    <div className="App">
      <ContextClienteProvider>
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </BrowserRouter>
      </ContextClienteProvider>
    </div>
  )
}

export default App
