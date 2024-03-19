import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [mensagemErro, setMensagemErro] = useState('');
    const [exibirTabela, setExibirTabela] = useState(false);

    const calcularIMC = () => {
        if (!peso || !altura) {
            setMensagemErro('Por favor, preencha todos os campos.');
            setImc(null);
            return;
        }

        const alturaMetros = altura / 100;
        const calculoImc = peso / (alturaMetros * alturaMetros);
        setImc(calculoImc.toFixed(2));
        setMensagemErro('');
    }

    return (
        <div className="App">
            <h1>Calculadora de IMC</h1>
            <div className="mb-3">
                <label>
                    <b>Peso</b> (kg):
                    <input className="form-control" type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
                </label>
            </div>
            <div className="pb-3">
                <label>
                    <b>Altura</b> (cm):
                    <input className="form-control" type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
                </label>
            </div>
            <div className="d-flex">
                <button className="btn btn-success mr-2 btn-custom" onClick={calcularIMC}>Calcular IMC</button>
                <button className="btn btn-secondary btn-custom" onClick={() => setExibirTabela(!exibirTabela)}>Exibir Tabela IMC</button>
            </div>
            {mensagemErro && <div className="alert alert-warning mt-3" role="alert">{mensagemErro}</div>}
            {imc && <p>Seu IMC é: {imc}</p>}
            {exibirTabela &&
                <div className="mt-5" style={{ maxWidth: '600px' }}>
                    <h2>Tabela IMC (OMS)</h2>
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Classificação</th>
                                <th scope="col">IMC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Abaixo do peso</td>
                                <td>Menos de 18.5</td>
                            </tr>
                            <tr>
                                <td>Peso normal</td>
                                <td>18.5 - 24.9</td>
                            </tr>
                            <tr>
                                <td>Sobrepeso</td>
                                <td>25 - 29.9</td>
                            </tr>
                            <tr>
                                <td>Obesidade Grau I</td>
                                <td>30 - 34.9</td>
                            </tr>
                            <tr>
                                <td>Obesidade Grau II</td>
                                <td>35 - 39.9</td>
                            </tr>
                            <tr>
                                <td>Obesidade Grau III</td>
                                <td>Mais de 40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default App;
