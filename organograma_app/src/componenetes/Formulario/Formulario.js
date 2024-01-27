import { useState } from 'react';
import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import Lista from '../ListaSuspensa/Lista';
import './Formulario.css';

const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX/UI',
        'Mobile',
        'Inovação e Gestão',
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');


    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColoboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time,
        });
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>

                <h2>Preenca os dados para criar o Card do coloborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <Lista 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card 
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;