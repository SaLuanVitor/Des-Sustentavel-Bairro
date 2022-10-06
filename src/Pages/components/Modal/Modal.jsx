import React, { useState } from "react"
import Home from "../../../Assets/casa.png"
import Menu from "../../../Assets/menu-aberto.png"
import X from "../../../Assets/x.png"
import { Link } from "react-router-dom"
import { Icons } from "../cardsIcon/CardsIcon.jsx"
import * as S from "./StyleModal.js"

export function Modal() {
  const [status, setStatus] = useState(false)
  const Lista = () => {
    return (
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
    )
  }

  return (
    <>
      <S.Figure>
        <S.ImgLink to="/"><img src={Home} alt="Home" /></S.ImgLink>
        <button onClick={() => { setStatus(!status) }}>{status ? <img src={X} alt="Close" /> : <img src={Menu} alt="Menu" />}</button>
      </S.Figure>
      {status && Lista()}
    </>
  )
}