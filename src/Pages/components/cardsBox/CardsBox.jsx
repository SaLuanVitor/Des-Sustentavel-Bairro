import React from "react";
import * as S from "./StyleCardsBox.js"
export const Cards =
  [
    {
      id: 1,
      img: 'Imagem',
      alt: 'Descrição',
      title: 'Titulo',
      text: 'Texto Resumo',
      link: "/Pag01",
      color: '#f45572'
    },
    {
      id: 2,
      img: 'Imagem',
      alt: 'Descrição',
      title: 'Titulo',
      text: 'Texto Resumo',
      link: "/Pag02",
      color: '#acf7c3'
    },
    {
      id: 3,
      img: 'Imagem',
      alt: 'Descrição',
      title: 'Titulo',
      text: 'Texto Resumo',
      link: "/Pag03",
      color: '#FFEB99'
    },
    {
      id: 4,
      img: 'Imagem',
      alt: 'Descrição',
      title: 'Titulo',
      text: 'Texto Resumo',
      link: "/Pag04",
      color: '#ff6961'
    },
    {
      id: 5,
      img: 'Imagem',
      alt: 'Descrição',
      title: 'Titulo',
      text: 'Texto Resumo',
      link: "/Pag05",
      color: '#84b6f4'
    },
  ]
export function CardsBox() {

  return (
    <>
      <S.CardBox>
        {Cards.map((i) => (
          <S.CardsBox key={i.id}>
            <p>{i.id}</p>
            <img src={i.img} alt={i.alt} />
            <h2>{i.title}</h2>
            <p>{i.text}</p>
          </S.CardsBox>
        ))}
      </S.CardBox>
    </>
  )
}