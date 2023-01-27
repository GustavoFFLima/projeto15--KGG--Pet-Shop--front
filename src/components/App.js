import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components"

import AuthContext from "../contexts/AuthContext.js"
import ProdutosContext from "../contexts/ProdutosContext.js"

import Home from "../components/pages/Home"
import Login from "../components/pages/Login"
import Cadastro from "../components/pages/Cadastro"
import Produtos from "../components/pages/Produtos"
import Servicos from "../components/pages/Servicos"
import Carrinho from "../components/pages/Carrinho";

export default function App() {
    const [ userData, setUserData ] = useState(
        {
            email: "",
            name: "",
            Password: "",
            token: "",
            _id:""
        }
    )

        let [ itensSelecionados, setItensSelecionados ] = useState(
        {
            imagem: "",
            nome: "",
            preço: "",
            estoque: "",
        }
    )


 return (
    <AuthContext.Provider value={{ userData, setUserData }}>
        <ProdutosContext.Provider value ={{itensSelecionados, setItensSelecionados}}>
        <BrowserRouter>
            <ContainerStyled>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/servicos" element={<Servicos />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/carrinho" element={<Carrinho />} />
                </Routes>
            </ContainerStyled>
        </BrowserRouter>
        </ProdutosContext.Provider>
    </AuthContext.Provider>
 )
}

const ContainerStyled = styled.div`
    max-width: 100%;
    min-height: 100vh;
    background-color: #FEF9EA;
`