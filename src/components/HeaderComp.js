import React from 'react'
import { BarraNav, HeaderSt } from '../style/styles'

const HeaderComp = () => {
  return (
    <HeaderSt>
        <img src='https://res.cloudinary.com/dbzo53yx4/image/upload/v1645560306/Fylo/logo_efevwx.svg' alt="logo"/>
        <BarraNav>
            <a href='#features'>Features</a>
            <a href='#team'>Team</a>
            <a href='#signin'>Sign in</a>
        </BarraNav>
    </HeaderSt>
  )
}

export default HeaderComp