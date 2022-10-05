import React from "react";
import { Link } from "react-router-dom"
import * as S from "./StyleCardsIcon.js"

export default function CardsIcon() {
  const Icons =
    [
      {
        id: 1,
        img: 'Imagem',
        text: 'Texto Resumo',
        link: "/Pag01"
      },
      {
        id: 2,
        img: 'Imagem',
        text: 'Texto Resumo',
        link: "/Pag02"
      },
      {
        id: 3,
        img: 'Imagem',
        text: 'Texto Resumo',
        link: "/Pag03"
      },
      {
        id: 4,
        img: 'Imagem',
        text: 'Texto Resumo',
        link: "/Pag04"
      },
      {
        id: 5,
        img: 'Imagem',
        text: 'Texto Resumo',
        link: "/Pag05"
      },
    ]
  return (
    <>
      <S.Box>
        {Icons.map((i) => (
          <Link to={i.link}>
            <S.CardsIcon key={i.id}>
              <p>{i.id}</p>
              <h2>{i.text}</h2>
              <img src="" alt={i.img} />
            </S.CardsIcon>
          </Link>
        ))}
      </S.Box>
    </>
  )
}