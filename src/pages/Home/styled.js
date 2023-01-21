import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 25px 24px;
    box-sizing: border-box;
`
export const Topo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    ion-icon{
        font-size: 30px;
        color: #FFFFFF;
    }
`
export const Quadro = styled.div`
    width: 100%;
    height: 446px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    p{
        width: 180px;
        height: 46px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
`
export const Baixo = styled.div`
    padding-top: 13px;
    padding-bottom: 13px;
    display: flex;
    justify-content: space-between;
    button{
        box-sizing: border-box;
        width: 49%;
        height: 114px;
        background-color: #A328D6;
        padding: 10px;
        border-radius: 5px;
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        ion-icon{
            font-size: 28px;
            color: #FFFFFF;
        }
        p{
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;
            text-align: left;
        }
    }
`