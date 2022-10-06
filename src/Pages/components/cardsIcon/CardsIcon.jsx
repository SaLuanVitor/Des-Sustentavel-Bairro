import React from "react";
import { Link } from "react-router-dom"
import * as S from "./StyleCardsIcon.js"
export const Icons =
  [
    {
      id: 1,
      img: 'Imagem',
      alt: 'Descrição',
      color: '#f45572',
      text: 'Texto Resumo',
      link: "/Pag01"
    },
    {
      id: 2,
      img: 'Imagem',
      alt: 'Descrição',
      color: '#acf7c3',
      text: 'Texto Resumo',
      link: "/Pag02"
    },
    {
      id: 3,
      img: 'Imagem',
      alt: 'Descrição',
      color: '#FFEB99',
      text: 'Texto Resumo',
      link: "/Pag03"
    },
    {
      id: 4,
      img: 'Imagem',
      alt: 'Descrição',
      color: '#ff6961',
      text: 'Texto Resumo',
      link: "/Pag04"
    },
    {
      id: 5,
      img: 'Imagem',
      alt: 'Descrição',
      color: '#84b6f4',
      text: 'Texto Resumo',
      link: "/Pag05"
    },
  ]

export function CardsIcon() {

  return (
    <>
      <S.Box>
        {Icons.map((i) => (
          <Link to={i.link}>
            <S.CardsIcon color={i.color} key={i.id}>
              <p>{i.id}</p>
              <h2>{i.text}</h2>
              <img src={i.img} alt={i.alt} />
            </S.CardsIcon>
          </Link>
        ))}
      </S.Box>
    </>
  )
}