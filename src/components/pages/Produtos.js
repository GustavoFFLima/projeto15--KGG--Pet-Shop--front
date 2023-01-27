import Navbar from "../navbar/Navbar"
import styled from "styled-components"
import {MdAddCircle} from 'react-icons/md'
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import ProdutosContext from "../../contexts/ProdutosContext.js"

import { 
    cor_primaria,
    cor_terciaria,
    cor_quartenaria,
    cor_quintenaria
} from "../../styles/Tema.js" 
 

// const MOCKPRODUTOS= [
//     {
//         imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
//         nome: 'Ração',
//         alvo: 'cães',
//         preço: 104,
//         estoque: 25,
//     },
//     {
//         imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
//         nome: 'Roupa',
//         alvo: 'cães',
//         preço: 54.90,
//         estoque: 25,
//     },
//     {
//         imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
//         nome: 'Coleira',
//         alvo: 'cães',
//         preço: 45,
//         estoque: 25,
//     },
//     {
//         imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
//         nome: 'Brinquedo',
//         alvo: 'cães',
//         preço: 23.50,
//         estoque: 25,
//     },
//     {
//         imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
//         nome: 'Mordedor',
//         alvo: 'cães',
//         preço: 15,
//         estoque: 25,
//     },
//     {
//         imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/50142829/a206ed90116148029ca96330f6ecfcaf.jpg?v=637873631273800000',
//         nome: 'Osso Natural',
//         alvo: 'cães',
//         preço: 7.50,
//         estoque: 25,
//     },
    
    
   
// ]


export default function Produtos() {
    let { itensSelecionados, setItensSelecionados } = useContext(ProdutosContext);
    const [produtos, setProdutos] = useState([]);  


    useEffect(() => {
        

        const promise = axios.get(`http://localhost:5000/produtos`);
        

        promise.then(obj => {
            setProdutos(obj.data);
        })
        promise.catch((err) => console.log(err.response.data.message))

    }, [])

    function selecionados (item) {
        setItensSelecionados(item)
    }

    
    return(
        <>
        <Navbar />
        <Container>
            <Titulo>Produtos para seu pet</Titulo>
            <ListaProdutos>
                {produtos.map(item => item.estoque >0 ?
                (
                    <Produtinho key={item._id}>
                <Imagem src={item.imagem}/>
                <Nome>{item.nome}</Nome>
                <Alvo>{item.alvo}</Alvo>
                <Preço>{item.preço.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Preço>
                <Adc onClick={() => selecionados(item) }>
                    <MdAddCircle/>
                    <p>Adicionar ao carrinho</p>
                </Adc>
                </Produtinho>
                ) : (
                    <Produtinho key={item._id}>
                <Imagem src={item.imagem}/>
                <Nome>{item.nome}</Nome>
                <Alvo>{item.alvo}</Alvo>
                <Preço>ESGOTADO</Preço>
                <Adc>
                </Adc>
                </Produtinho>


                )
                )}
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
text-align: center;

`

const Alvo = styled.div `
    font-weight: 400;
    font-size: 14px;
    color: ${cor_primaria};
    opacity: 60%;
    text-align: center;
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