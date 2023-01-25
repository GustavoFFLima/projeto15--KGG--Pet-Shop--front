import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components"
import Home from "./Home"
import Cadastro from "./Cadastro"
import Login from "./Login"
import AuthContext from "../contexts/AuthContext"

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
                    <Route path="/home" element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </ContainerStyled>
        </BrowserRouter>
    </AuthContext.Provider>
 )
}

const ContainerStyled = styled.div``