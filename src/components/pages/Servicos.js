import Navbar from "../navbar/Navbar"
import styled from "styled-components"
import {MdAddCircle} from 'react-icons/md'
import React, { useState, useContext, useEffect } from 'react';
import ProdutosContext from "../../contexts/ProdutosContext.js"

import { 
    cor_primaria,
    cor_terciaria,
    cor_quartenaria,
    cor_quintenaria
} from "../../styles/Tema.js" 

const MOCKSERVICOS= [
    {
        imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
        nome: 'Consulta',
        descrição: 'Agende pelo nosso whatsapp',
        preço: 200,
    },
    {
        imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
        nome: 'Corte de unha',
        descrição: 'Das 8am às 18pm',
        preço: 25,
    },
    {
        imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
        nome: 'Corte de asa',
        descrição: 'Destinado à controle de voo de pássaros',
        preço: 35,
    },
    {
        imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
        nome: 'Dogwalker',
        descrição: 'Valor por hora, agende com antecedência',
        preço: 50,
    },
    {
        imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
        nome: 'Adestramento',
        descrição: 'Valor por aula, agende com antecedência',
        preço: 150,
    },
    
   
    
]

export default function Servicos() {
    let { itensSelecionados, setItensSelecionados } = useContext(ProdutosContext);

    // const [servicos, setServicos] = useState([]);  


    // useEffect(() => {
        

    //     const promise = axios.get(`http://localhost:5000/servicos`);
        

    //     promise.then(obj => {
    //         setServicos(obj.data);
    //     })
    //     promise.catch((err) => console.log(err.response.data.message))

    // }, [])


    return(
        <>
        <Navbar />
        <Container>
            <Titulo>Serviços para seu pet</Titulo>
            <ListaProdutos>
                {MOCKSERVICOS.map(item =>
                    <Produtinho>
                <Imagem src={item.imagem}/>
                <Nome>{item.nome}</Nome>
                <Descricao>{item.descrição}</Descricao>
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
color: ${cor_terciaria};
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
    color: ${cor_quintenaria};
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
font-size: 24px;
color: ${cor_primaria};
`

const Descricao = styled.div `
    font-weight: 400;
    font-size: 14px;
    color: ${cor_primaria};
    opacity: 60%;
    
`

const Preço = styled.div `
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    color: ${cor_quartenaria};
    `

const Adc = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    p{
        font-size: 15px;
        color: ${cor_primaria};
        font-weight: 800;

    }
`