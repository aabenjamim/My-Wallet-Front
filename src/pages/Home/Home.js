import { Baixo, Container, Quadro, Topo } from "./styled";

export default function Home(){
    return(
        <Container>
            <Topo>
                <h1>Olá, Fulano</h1>
                <ion-icon name="exit-outline"></ion-icon>
            </Topo>
            <Quadro>
                <p>Não há registros de entrada ou saída</p>
            </Quadro>
            <Baixo>
                <button>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </button>
                <button>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </button>
            </Baixo>
        </Container>
    )
}