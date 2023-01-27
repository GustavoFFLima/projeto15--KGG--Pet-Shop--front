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
} from "../../styles/Tema.js";

// const MOCKSERVICOS= [
    // {
    //     imagem: 'https://www.vetquality.com.br/wp-content/uploads/2018/02/dog-insurance.jpg',
    //     nome: 'Consulta',
    //     descrição: 'Agende pelo nosso whatsapp',
    //     preço: 200,
    // },
    // {
    //     imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2021/09/como-cortar-unhas-de-cachorro-3.jpg',
    //     nome:'Corte de unha (Cães)',
    //     descrição: 'Das 8am às 18pm',
    //     preço: 25,
    // },
    // {
    //     imagem: 'https://s2.glbimg.com/3XGkUQG1LUt2t-fabGGoFMSoHx0=/0x320:590x819/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/G/Y/RVTI6wQGy0ugeEH2mXTw/whatsapp-image-2021-03-17-at-11.00.18.jpeg',
    //     nome: 'Corte de asa',
    //     descrição: 'Destinado à controle de voo',
    //     preço: 35,
    // },
    // {
    //     imagem: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/10/Dog-Walker-e1571683007586.jpg',
    //     nome: 'Dogwalker',
    //     descrição: 'Valor por hora, agende com antecedência',
    //     preço: 50,
    // },
    // {
    //     imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2018/08/adestramento3-1280x720.jpg',
    //     nome: 'Adestramento',
    //     descrição: 'Valor por aula, agende com antecedência',
    //     preço: 150,
    // },
    // {
    //     imagem: 'https://s2.glbimg.com/7tJyb7SIYU2Fx-5moy2aJfc0r_0=/620x520/smart/e.glbimg.com/og/ed/f/original/2020/04/15/como-dar-banho-no-pet-em-casa-cachorro-gato-quarentena.jpg',
    //     nome: 'Banho',
    //     descrição: 'Agende pelo nosso whatsapp',
    //     preço: 80,
    // },
    // {
    //     imagem: 'https://image.cachorrogato.com.br/textimages/tempo-tosa',
    //     nome: 'Tosa',
    //     descrição: 'Agende pelo nosso whatsapp',
    //     preço: 65,
    // },
    // {
    //     imagem: 'https://i0.statig.com.br/bancodeimagens/cv/mw/lf/cvmwlfl809ttid4klceze7bgj.jpg',
    //     nome: 'Tosa higiênica',
    //     descrição: 'Agende pelo nosso whatsapp',
    //     preço: 45,
    // },
    // {
    //     imagem: 'https://hotelpetvillagesr.com.br/wp-content/uploads/2020/10/day-care.jpg',
    //     nome: 'DayCare',
    //     descrição: 'Aceitamos todas as raças e espécies',
    //     preço: 169.90,
    // },
    // {
    //     imagem: 'https://wpets.com.br/wp-content/uploads/2021/11/5767-petsitter-image.jpg',
    //     nome: 'PetSitter',
    //     descrição: 'Nossos cuidadores vão até você!',
    //     preço: 140,
    // },
    // {
    //     imagem: 'https://www.jornalestadodegoias.com.br/wp-content/uploads/2019/08/caoegato1-20190812-124242.jpg',
    //     nome: 'Vacinação completa anual',
    //     descrição: 'Agende pelo nosso whatsapp',
    //     preço: 400,
    // },
    // {
    //     imagem: 'https://www.bichosaudavel.com/wp-content/uploads/2016/11/filhotes-cao-e-gato.jpg',
    //     nome: 'Protocolo de primeira vacinação',
    //     descrição: 'Primeiras vacinas de seu filhote',
    //     preço: 45,
    // },

// ]

export default function Servicos() {
    let { itensSelecionados, setItensSelecionados } = useContext(ProdutosContext);

    const [servicos, setServicos] = useState([]);  


    useEffect(() => {
        

        const promise = axios.get(`http://localhost:5000/servicos`);
        

        promise.then(obj => {
            setServicos(obj.data);
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
            <Titulo>Serviços para seu pet</Titulo>
            <ListaProdutos>
                {servicos.map(item =>
                    <Produtinho>
                <Imagem src={item.imagem}/>
                <Nome>{item.nome}</Nome>
                <Descricao>{item.descrição}</Descricao>
                <Preço>{item.preço.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Preço>
                <Adc onClick={() => selecionados(item) }>
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
    width: 80%;
    aspect-ratio: 1;
    object-fit: contain;
`

const Nome = styled.div `
font-weight: 400;
font-size: 24px;
color: ${cor_primaria};
text-align: center;
`

const Descricao = styled.div `
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