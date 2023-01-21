import { Container, Topo, Form } from "./styled";

export default function Saida(){
    return(
        <Container>
        <Topo>Nova saída</Topo> 
        <Form>
            <input type='number' placeholder="Valor"
            required/>
            <input type='text' placeholder="Descrição"/>
            <button>Salvar saída</button>
        </Form>
        </Container>
    )
}