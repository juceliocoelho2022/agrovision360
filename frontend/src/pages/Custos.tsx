import { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Table, Form, Button, Alert } from 'react-bootstrap';

interface Custo {
    id?: number;
    ano: number;
    valor: number;
    farmId: number;
}

export default function Custos() {
    const [custos, setCustos] = useState<Custo[]>([]);
    const [novo, setNovo] = useState<Custo>({
        ano: new Date().getFullYear(),
        valor: 0,
        farmId: 1
    });
    const [erro, setErro] = useState('');

    useEffect(() => {
        buscarCustos();
    }, []);

    const buscarCustos = async () => {
        try {
            const res = await api.get('/custos?farmId=1');
            setCustos(res.data);
        } catch (err) {
            setErro('Erro ao buscar custos.');
            console.error(err);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/custos', novo);
            setNovo({ ...novo, valor: 0 });
            buscarCustos();
        } catch (err) {
            setErro('Erro ao salvar custo.');
            console.error(err);
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4">💰 Controle de Custos</h2>

            {erro && <Alert variant="danger">{erro}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Ano</Form.Label>
                    <Form.Control
                        type="number"
                        value={novo.ano}
                        onChange={(e) => setNovo({ ...novo, ano: +e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Valor (R$)</Form.Label>
                    <Form.Control
                        type="number"
                        value={novo.valor}
                        onChange={(e) => setNovo({ ...novo, valor: +e.target.value })}
                    />
                </Form.Group>

                <Button type="submit" variant="primary">
                    Salvar Custo
                </Button>
            </Form>

            <h4 className="mt-5">📊 Custos dos últimos anos</h4>
            <Table striped bordered hover className="mt-3">
                <thead>
                <tr>
                    <th>Ano</th>
                    <th>Valor (R$)</th>
                </tr>
                </thead>
                <tbody>
                {custos.map((custo) => (
                    <tr key={custo.id}>
                        <td>{custo.ano}</td>
                        <td>R$ {(custo.valor ?? 0).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}
