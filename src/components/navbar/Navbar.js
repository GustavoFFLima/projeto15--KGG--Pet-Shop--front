import React, { useState } from "react";
import styled from "styled-components"
import { IoMdContact } from "react-icons/io"
import { IoMdCart } from "react-icons/io"
import icon from "../../assets/images/KGG.png"
export default function Navbar() {
    return (
        <NavContainer>
            <Content>
                <Icon src={icon} alt="icon" />
                <Options>
                    <Products><h1>Produtos</h1></Products>
                    <Services><h1>Serviços</h1></Services>
                    <Contact><h1>Contato</h1></Contact>
                </Options>
                <RightBox>
                    <SignUpIn>
                        <IoMdContact size="30" />
                        <h1>Login/Cadastro</h1>
                    </SignUpIn>
                    <Cart>
                        <IoMdCart size="30" />
                    </Cart>
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
const Products = styled.div`
cursor: pointer;
:hover{ 
    background-color: #AB8262;
} 
`
const Services = styled.div`
cursor: pointer;
:hover{ 
    background-color: #AB8262;
} 
`
const Contact = styled.div`
cursor: pointer;
:hover{ 
    background-color: #AB8262;
} 
`
const RightBox = styled.div`
width: auto;
display: flex;
align-items: center;
justify-content: space-around;
`
const Cart = styled.div`
cursor: pointer;
margin-left: 50px;
`
const SignUpIn = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`