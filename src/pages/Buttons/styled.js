import styled from "styled-components";

export const Container = styled.div`
    padding: 24px;
    box-sizing: border-box;
`
export const Topo = styled.div`
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    margin-bottom: 40px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 13px;
    input{
        width: 326px;
        height: 58px;
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
        font-size: 20px;
        line-height: 23PX;
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