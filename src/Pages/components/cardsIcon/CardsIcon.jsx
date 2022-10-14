import React from "react";
import * as S from "./StyleCardsIcon.js"
import Trabalhadores from "../../../Assets/Icones/trabalhadores.png"
import Saude from "../../../Assets/Icones/saude.png"
import Educacao from "../../../Assets/Icones/educacao.png"
import Urbanizacao from "../../../Assets/Icones/urbanizacao.png"
import Paz from "../../../Assets/Icones/paz.png"
export const Icons =
  [
    {
      id: 1,
      img: Trabalhadores,
      alt: 'Icone Trabalho',
      color: '#f45572',
      text: 'Trabalho Decente e Crescimento Econômico',
      link: "/Trabalho"
    },
    {
      id: 2,
      img: Saude,
      alt: 'Icone Saúde e Bem-Estar',
      color: '#acf7c3',
      text: 'Saúde e Bem-Estar',
      link: "/Saude"
    },
    {
      id: 3,
      img: Educacao,
      alt: 'Icone Educação',
      color: '#FFEB99',
      text: 'Educação de Qualidade',
      link: "/Educacao"
    },
    {
      id: 4,
      img: Urbanizacao,
      alt: 'Icone Urbanização',
      color: '#ff6961',
      text: 'Cidades e comunidades sustentáveis',
      link: "/Urbanizacao"
    },
    {
      id: 5,
      img: Paz,
      alt: 'Icone paz',
      color: '#84b6f4',
      text: 'Paz, Justiça e Instituições Eficazes',
      link: "/Paz"
    },
  ]

export function CardsIcon() {

  return (
    <>
      <S.Box>
        {Icons.map((i) => (
          <S.NavLink to={i.link} href="#S.CardBox">
            <S.CardsIcon color={i.color} key={i.id}>
              <h2>{i.text}</h2>
              <img src={i.img} alt={i.alt} />
            </S.CardsIcon>
          </S.NavLink>
        ))}
      </S.Box>
    </>
  )
}