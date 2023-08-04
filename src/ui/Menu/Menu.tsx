"use client"

import { ChartLineUp, Binoculars, SignIn, BookBookmark } from "phosphor-react"
import * as S from "./Menu.styles"


export function Menu() {
    return (
    <S.Container>
      <S.ContainerNav>
      <span><BookBookmark size={32} /><p>BookWise</p></span>
      <nav>
        <ul>
          <li><ChartLineUp size={24} /><a href="#">Inicio</a></li>
          <li><Binoculars size={24} /><a href="#">Explorar</a></li>
        </ul>
      </nav>
      </S.ContainerNav>
      <S.ContainerLogin>
        <button>Fazer login <SignIn size={24} /></button>
      </S.ContainerLogin>
        
    </S.Container>
    )
}