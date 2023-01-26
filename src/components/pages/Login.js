import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import styled from "styled-components"
import AuthContext from "../../contexts/AuthContext.js"
import Navbar from "../navbar/Navbar"
import catdog from "../../assets/images/catdog.png"
import { cor_quintenaria } from "../../styles/Tema.js"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userData, setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    function home(){
        navigate("/")
    }

    function loginConta(event){
        event.preventDefault()
        axios
            .post(`http://localhost:5000/login`, {
                email: email,
                password: password
            } )
            .then((request) => {
                setUserData({...userData, token: request.data});
                home()
            } )
            .catch((erro) => console.log(erro))
    }

    return(
        <>
            <Navbar />
            <Container>
                <Content>
                    <LeftBox>
                        <Text>
                            <>Clínica veterinária e PetShop.</>
                            
                            <form onSubmit={loginConta}>    
                                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required></input>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required></input>
                                <button type="submit" >Entrar</button>
                            </form>
                            <Link to={"/cadastro"}><p>Primeira vez? Cadastre-se!</p></Link>
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
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
    input{
        width: 303px;
        height: 45px;
        margin: 6px 36px;
        
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
            text-align: center;
            text-decoration: none;
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