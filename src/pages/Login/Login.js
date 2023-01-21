import {Container, Form, Logo} from './styled'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Login(){
    
    return(
        <Container>
            <Logo>My Wallet</Logo>
            <Form>
                <input type='email' placeholder="E-mail"
                required/>
                <input type='password'placeholder="Senha"/>
                <button>Entrar</button>
            </Form>
            <Link to={'/cadastro'}>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Container>

    )
}