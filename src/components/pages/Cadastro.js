

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import styled from "styled-components"
import Navbar from "../navbar/Navbar"
import catdog from "../../assets/images/catdog.png"
import { cor_quintenaria } from "../../styles/Tema.js"

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function dadosConta(event){
        event.preventDefault();
        axios
            .post(`http://127.0.0.1:5000/cadastro`, {
                email: email,
                name: name,
                confirmPassword: confirmPassword,
                password: password
            } )
            .then(pagina)
            .catch((erro) => console.log(erro))
    }

    function pagina(){
        navigate("/")
    }

    return(
        <>
            <Navbar />
            <Container>
                <Content>
                    <LeftBox>
                        <Text>
                            <>Clínica veterinária e PetShop.</>
                            <CadastroStyled>
                                <form onSubmit={dadosConta}>  
                                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="nome" required></input>  
                                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required></input>
                                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required></input>
                                    <input type="text" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)} placeholder="Confirme a senha" required></input>
                                    <button type="submit" >Cadastrar</button>
                                </form>
                                <Link to={"/login"}><p>Já tem uma conta? Faça login!</p></Link>
                            </CadastroStyled>
                        </Text>
                    </LeftBox>
                    <RightBox>
                        <CatDog src={catdog} alt="dog" />
                    </RightBox>
                </Content>
            </Container>
        </>
    )
}
const Container = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    align-items: center;
`
const Content = styled.div`
    width: auto;
    margin: 0 auto;
    display: flex;
`
const LeftBox = styled.div`
    width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Text = styled.div`
    padding: 10%;
`

const CadastroStyled = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
        text-align: center;
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        background: #8C11BE;
        color: #ffffff;
    }
    input{
        width: 303px;
        height: 45px;
        margin: 6px 36px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder{
            padding-left: 15px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;

            color: #000000;
        }
    }
    button{
        width: 309px;
        height: 45px;
        margin: 0px 36px;

        background: ${cor_quintenaria};
        border-radius: 4.63636px;
        border: none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #FFFFFF;
    }
    a{
        
        p{
            margin-top: 25px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            text-decoration-line: none;
        }
    }
`

const RightBox = styled.div`
    width: 700px;
    height: 650px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40%;
    background-color: #C27A65;
    overflow: hidden;
    -webkit-box-shadow: -8px 5px 63px -22px rgba(0,0,0,0.75);
    -moz-box-shadow: -8px 5px 63px -22px rgba(0,0,0,0.75);
    box-shadow: -8px 5px 63px -22px rgba(0,0,0,0.75);
`
const CatDog = styled.img`
    width: 650px;
    height: 650px; 
    object-fit: cover;
`