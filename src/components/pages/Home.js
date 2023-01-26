import Navbar from "../navbar/Navbar"
import catdog from "../../assets/images/catdog.png"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";

export default function Home() {

    return (
        <>
            <Navbar />
            <Container>
                <Content>
                    <LeftBox>
                        <Text>
                        <h2>Clínica veterinária e PetShop.</h2>
                        <h2>Produtos e serviços para cães e gatos.</h2>
                        <button></button>
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