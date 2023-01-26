import Navbar from "../navbar/Navbar"
import catdog from "../../assets/images/catdog.png"
import styled from "styled-components"

export default function Home() {

    return (
        <>
            <Navbar />
            <Container>
                <Content>
                    <LeftBox>
                        <h1>Carrossel de produtos?</h1>
                      
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
position: absolute;
`
const Content = styled.div`
width: auto;
margin: 0 auto;
display: flex;
`
const LeftBox = styled.div`
width: 700px;

`
const RightBox = styled.div`
width: 700px;
`
const CatDog = styled.img`
position: relative;
top: 96px;
left: 360px;
width: 600px;
height: 600px;
`