import React from 'react'
import { FooterSt } from '../style/styles'

const FooterComp = () => {
  return (
    <FooterSt>
        <img src='https://res.cloudinary.com/dbzo53yx4/image/upload/v1645560306/Fylo/logo_efevwx.svg' alt='logo Fylo'/>
        <div>
            <div>
                <img src='https://res.cloudinary.com/dbzo53yx4/image/upload/v1645560309/Fylo/icon-location_p4rrzv.svg' alt='location icon' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
        </div>
        <div>
            <div>
                <img src='https://res.cloudinary.com/dbzo53yx4/image/upload/v1645560310/Fylo/icon-phone_vb1jdx.svg' alt='phone icon'/>
                <p>+1-543-123-4567</p>
            </div>
            <div>
                <img src='https://res.cloudinary.com/dbzo53yx4/image/upload/v1645560309/Fylo/icon-email_gbub5b.svg' alt='icon email'/>
                <p>example@fylo.com</p>
            </div>
        </div>
        <div>
            <a href='#root'>About us</a>
            <a href='#root'>Jobs</a>
            <a href='#root'>Press</a>
            <a href='#root'>Blog</a>
        </div>
        <div>
            <a href='#root'>Contact us</a>
            <a href='#root'>Terms</a>
            <a href='#root'>Privacy</a>
        </div>
        <div>
            <div>
                <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href='https://www.twitter.com/' target="_blank" rel="noreferrer"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href='https://www.instagram.com/' target="_blank" rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon></a>
            </div>
        </div>
    </FooterSt>
  )
}

export default FooterComp