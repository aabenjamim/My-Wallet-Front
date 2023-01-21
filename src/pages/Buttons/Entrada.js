import { Container, Topo, Form } from "./styled";

export default function Entrada(){
    return(
    <Container>
       <Topo>Nova entrada</Topo> 
       <Form>
            <input type='number' placeholder="Valor"
            required/>
            <input type='text' placeholder="Descrição"/>
            <button>Salvar entrada</button>
       </Form>
    </Container>
    )
}   