import React from 'react';

import { Container } from './styles';

interface Props {
    readonly name: string;
    readonly changeLabel: (arg0: string) => void;
}

const Child: React.FC<Props> = ({ name, changeLabel }) => {

    const sendNewLabel = () => {
        if (document.getElementById("novoLbl")) {
            const novoLabel = (document.getElementById("novoLbl") as HTMLInputElement).value;
            changeLabel(novoLabel);
        }
    }

    return (
        <Container color={"#5B709B"} colorName={"#FAF9F5"}>
            <p>{name}</p>
            <input type="text" id="novoLbl"></input>
            <button onClick={sendNewLabel}>Send</button>
        </Container>
    );
};

export default Child;
