import styled from 'styled-components'

//Estilos header
export const HeaderSt = styled.header`
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img{
        width: 120px;
    }
    @media screen and (max-width: 500px){
        padding: 20px 15px;
        img{
            width: 90px;
        }
    }
`

export const BarraNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    a{
        color: white;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none;
        margin-left: 35px;
        @media screen and (max-width: 500px){
            margin-left: 20px;
        }
        &:hover{
            font-weight: bold;
            text-decoration: underline;
        }
    }
`

//Estilos sección inicial
export const InicioSt = styled.section`
    width: 100%;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-image: url(https://res.cloudinary.com/dbzo53yx4/image/upload/v1645560308/Fylo/bg-curvy-mobile_zeowpi.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0 100%;
    img{
        width: 500px;
        @media screen and (max-width:499px){
            width: 95%;
        }
    }
    h2{
        font-size: 30px;
        font-weight: 700;
        font-family: 'Raleway', sans-serif;
        text-align: center;
        padding: 20px 0;
        width: 500px;
        @media screen and (max-width:499px){
            width: 95%;
        }
    }
    p{
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        padding: 10px 0;
        width: 450px;
        @media screen and (max-width:499px){
            width: 85%;
        }
    }
    button{
        width: 250px;
        margin: 10px 0;
        padding: 13px 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        text-transform: capitalize;
        border: none;
        border-radius: 25px;
        background-color: hsl(198, 60%, 50%);
        color:white;
        &:hover{            
            background-color: hsl(176, 68%, 64%);
        }
    }
`

export const FeauturesSt = styled.section`
    width: 100%;
    background-color: hsl(218, 28%, 13%);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    >div{
        width: 100%;
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        div{
            width: 470px;
            padding: 20px 50px;
            margin: 15px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            @media screen and (max-width:469px){
                width: 100%;
                padding: 20px 10px;
            }
            img{
                margin: 10px;
            }
            h3{
                width: 95%;
                font-family: 'Raleway', sans-serif;
                font-weight: 700;
                padding: 10px 0;
            }
            p{
                width: 95%;
                font-family: 'Open Sans', sans-serif;
            }
        }
    }
`

export const ProductiveSt = styled.section`
    width: 100%;
    padding: 40px;
    background-color: hsl(218, 28%, 13%);
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    >img{
        width: 50%;
        padding: 20px;
    }
    >div{
        width: 50%;
        padding: 20px;
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        h3{
            width: 240px;
            margin: 10px 0;
            font-family: 'Raleway', sans-serif;
            font-size: 25px;
            line-height: 30px;
        }
        >p{
            font-family: 'Open Sans', sans-serif;
            margin: 10px 0;
        }
        div{
            margin: 10px 0;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            color: hsl(176, 68%, 64%);
            font-family: 'Open Sans', sans-serif;
            border-bottom: solid 1px hsl(176, 68%, 64%);
            img{
                margin: 3px;
            }
            &:hover{
                color: white;
                border-color:white;
            }
        }
    }
    @media screen and (max-width:850px){
        flex-direction: column;
        padding: 30px 10px;
        >img, >div{
            width: 400px;
        }
        >div h3{
            width: 100%;
            font-size: 18px;
        }
    }
    @media screen and (max-width:399px){
        >img, >div{
            width: 100%;
        }
    }
`

export const QuotesSt = styled.section`
    width: 100%;
    padding: 20px;
    background-color: hsl(218, 28%, 13%);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    @media screen and (max-width:850px){
        flex-direction: column;
    }
    >img{
        position: absolute;
        top: 5px;
        left: 7%;
    }
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: hsl(0, 0%, 100%);
        background-color: hsl(217, 28%, 15%);
        border-radius: 3px;
        box-shadow: 5px 5px 5px 0px hsl(217, 28%, 15%);
        font-family: 'Open Sans', sans-serif;
        text-align: left;
        max-width: 355px;
        margin: 15px;
        padding: 25px;
        z-index: 10;
        >p{
            margin: 20px 0 15px 0;
            font-size: 13px;
        }
        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            position: relative;
            img{
                width: 30px;
                border-radius:50%;
                position: absolute;
            }
            h5, p{
                margin-left: 40px;
                font-size: 11px;
            }
            h5{
                font-family: 'Raleway', sans-serif;
                font-weight: 700;
                letter-spacing: 1.5px;
            }
        }
    }
`

export const SignUpSt = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    background-color: hsl(218, 28%, 13%);
    >div{
        width: 750px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: hsl(219, 30%, 18%);
        color: white;
        text-align: center;
        border-radius: 5px;
        box-shadow: 5px 5px 5px 0px hsl(216, 53%, 9%);
        position: relative;
        bottom: -80px;
        z-index: 10;
        h3{
            font-family: 'Raleway', sans-serif;
            font-size: 20px;
            letter-spacing: 1.2px;
            margin: 10px 0;
        }
        >p{
            font-family: 'Open Sans', sans-serif;
            width: 85%;
            margin: 10px 0;
        }
        form{
            width: 90%;
            margin: 10px 0;
            padding: 5px 0 20px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            position: relative;
            input{
                margin-right: 20px;
                padding: 10px 15px;
                flex-grow: 1;
                font-family: 'Open Sans', sans-serif;
                border: none;
                border-radius: 25px;
                z-index: 20;
            }
            button{
                width: 180px;
                padding: 10px 0;
                font-family: 'Open Sans', sans-serif;
                font-weight: 700;
                text-transform: capitalize;
                border: none;
                border-radius: 25px;
                background-color: hsl(198, 60%, 50%);
                color:white;
                &:hover{            
                    background-color: hsl(176, 68%, 64%);
                }
            }
            p{
                font-family: 'Open Sans', sans-serif;
                margin-left: 15px;
                font-size: 12px;
                font-weight: 700;
                color: hsl(0, 100%, 63%);
                position: absolute;
                bottom: 0;
                translate: 0 -27px;
                transition: all 0.3s ease-out;
                visibility: hidden;
                &.alerta{
                    translate: 0;
                    visibility: visible;
                }
            }
        }
        @media screen and (max-width:800px){
            width: 95%;
            bottom: -140px;
            form{
                flex-direction: column;
                input, button{
                    margin: 10px 0;
                    width: 100%;
                    z-index: 20;
                }
                >p{
                    margin: 0;
                }
            }
        }
    }
`

export const FooterSt = styled.footer`
    width: 100%;
    padding: 120px 0 30px 0;
    background-color: hsl(216, 53%, 9%);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    position: relative;
    >img{
        width: 120px;
        position: absolute;
        left: 5%;
    }
    >div{
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        div, a{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            margin-bottom: 15px;            
        }
        div{
            img{
                width: 15px;
                margin-right: 18px;
            }
            a{
                padding: 5px;
                color: white;
                border: solid 1px white;
                border-radius: 50%;
                &:nth-child(2){
                    margin: 0 7px;
                }
                &:hover{
                    color: hsl(176, 68%, 64%);
                }
            }
        }
        p, >a{
            color: white;
            text-decoration: none;
            max-width: 300px;
        }
        >a:hover{
            font-weight: bold;
        }
    }
    @media screen and (max-width:800px){
        padding-top: 170px;
        flex-direction: column;
        img{
            position: relative;
        }
        >div{
            margin: 15px 5%;
            &:last-child{
                width:100%;
                margin: 15px 0;
                div{
                    width: 100%;
                    justify-content: center;
                }
            }
        }
    }
`