import {Container, Form, Logo} from './styled'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Cadastro(){
    
    return(
        <Container>
            <Logo>My Wallet</Logo>
            <Form>
                <input type='text' placeholder="Nome"
                required/>
                <input type='email' placeholder="E-mail"
                required/>
                <input type='password' placeholder="Senha"/>
                <input type='password' placeholder="Confirme a senha"/>
                <button>Cadastrar</button>
            </Form>
            <Link to={'/'}>
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
        </Container>

    )
}