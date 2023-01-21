import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 13px;
    input{
        width: 326px;
        height: 46px;
        border: 1px solid #A328D6;
        border-radius: 5px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding-inline: 11px;
        outline: none;
    }
    input::placeholder{
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
    button{
        width: 326px;
        height: 46px;
        background-color: #A328D6;
        border-radius: 5px;
        border: 1px solid #A328D6;
        font-size: 21px;
        font-weight: 700;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        :disabled{
            opacity: 0.7;
        }
    }

`

export const Container = styled.div`
    height: 100%;
    margin-top: 95px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    p{
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        margin-top: 36px;
    }
`
export const Logo = styled.h1`
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`