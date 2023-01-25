import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components"
import Home from "./Home"
import Cadastro from "./Cadastro"
import Login from "./Login"
import AuthContext from "../contexts/AuthContext.js"
import Produtos from "./Produtos"
import Servicos from "./Servicos"

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

 return (
    <AuthContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
            <ContainerStyled>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/servicos" element={<Servicos />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </ContainerStyled>
        </BrowserRouter>
    </AuthContext.Provider>
 )
}

const ContainerStyled = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #FEF9EA;
`