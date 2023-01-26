import Navbar from "../navbar/Navbar"
import styled from "styled-components"
import {MdAddCircle} from 'react-icons/md'
 

const MOCKPRODUTOS= [
    {
        imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
        nome: 'ração',
        alvo: 'cães',
        preço: 55,
        estoque: 25,
    },
    {
        imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
        nome: 'ração',
        alvo: 'cães',
        preço: 55,
        estoque: 25,
    },
    {
        imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
        nome: 'ração',
        alvo: 'cães',
        preço: 55,
        estoque: 25,
    },
    {
        imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
        nome: 'ração',
        alvo: 'cães',
        preço: 55,
        estoque: 25,
    },
    {
        imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
        nome: 'ração',
        alvo: 'cães',
        preço: 55,
        estoque: 25,
    },
    {
        imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
        nome: 'ração',
        alvo: 'cães',
        preço: 55,
        estoque: 25,
    },
    
    
   
]


export default function Produtos() {
    return(
        <>
        <Navbar />
        <Container>
            <Titulo>Produtos para seu pet</Titulo>
            <ListaProdutos>
                {MOCKPRODUTOS.map(item =>
                    <Produtinho>
                <Imagem src={item.imagem}/>
                <Nome>{item.nome}</Nome>
                <Alvo>{item.alvo}</Alvo>
                <Preço>{item.preço.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Preço>
                <Adc>
                    <MdAddCircle/>
                    <p>Adicionar ao carrinho</p>
                </Adc>
                </Produtinho>)}
            </ListaProdutos>
        </Container>
        </>
    )
}

const Container = styled.div `
width: 100%;
height: auto;
display:flex;
align-items: center;
flex-direction: column;


`
const Titulo = styled.div `
color: #94794d;
font-size: 40px;
margin-bottom: 30px;
`

const ListaProdutos = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`

const Produtinho = styled.div `
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #ab8262;
    width: 215px;
    height: 260px;
`

const Imagem = styled.img `
    width: 70%;
    aspect-ratio: 1;
    object-fit: contain;
`

const Nome = styled.div `
font-weight: 400;
font-size: 22px;
color: #ab8262;
`

const Alvo = styled.div `
    font-weight: 400;
    font-size: 14px;
    color: #ab8262;
    opacity: 60%;
`

const Preço = styled.div `
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    color: #b8625f;

    `

const Adc = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    p{
        font-size: 15px;
        color: #ab8262;
        font-weight: 800;

    }
`