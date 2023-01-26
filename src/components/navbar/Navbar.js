import React, { useState } from "react";
import styled from "styled-components"
import { IoMdContact } from "react-icons/io"
import { IoMdCart } from "react-icons/io"
import icon from "../../assets/images/KGG.png"
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
    return (
        <NavContainer>
            <Content>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Icon src={icon} alt="icon" />
                </Link>
                <Options>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <Home><h1>Início</h1></Home>
                    </Link>
                    <Link to="/produtos" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <Products><h1>Produtos</h1></Products>
                    </Link>
                    <Link to="/servicos" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <Services><h1>Serviços</h1></Services>
                    </Link>
                </Options>
                <RightBox>
                    <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <SignUpIn>
                            <IoMdContact size="30" />
                            <h1>Login/Cadastro</h1>
                        </SignUpIn>
                    </Link>
                    <Link to="/carrinho" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <Cart>
                            <IoMdCart size="30" />
                        </Cart>
                    </Link>
                </RightBox>
            </Content>
        </NavContainer>
    )
}

const NavContainer = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
`
const Content = styled.div`
margin: 0 auto;
width: 90%;
display: flex;
align-items: center;
justify-content: space-around;
`
const Icon = styled.img`
width: 190px;
height: 190px;
`
const Options = styled.div`
width: 500px;
display: flex;
justify-content: space-between;
align-items: center;

`
const Home = styled.div`
padding: 25px;
border-radius: 10px;
cursor: pointer;
:hover{ 
    background: rgba(171, 130, 98, 0.2);
} 
`
const Products = styled.div`
padding: 25px;
border-radius: 10px;
cursor: pointer;
:hover{ 
    background: rgba(171, 130, 98, 0.2);
} 
`
const Services = styled.div`
padding: 25px;
border-radius: 10px;
cursor: pointer;
:hover{ 
    background: rgba(171, 130, 98, 0.2);
} 
`
const RightBox = styled.div`
width: auto;
display: flex;
align-items: center;
justify-content: space-around;
`
const Cart = styled.div`
padding: 10px;
border-radius: 10px;
cursor: pointer;
:hover{ 
    background: rgba(171, 130, 98, 0.2);
} 
margin-left: 50px;
`
const SignUpIn = styled.div`
display: flex;
align-items: center;
padding: 15px;
border-radius: 10px;
cursor: pointer;
:hover{ 
    background: rgba(171, 130, 98, 0.2);
} 
`
