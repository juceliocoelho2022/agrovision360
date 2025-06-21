import { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Form, Button, Table } from 'react-bootstrap';

interface Producao {
    id?: number;
    year: number;
    areaPlanted: number;
    totalProduced: number;
    farmId: number;
}

export default function Producao() {
    const [historico, setHistorico] = useState<Producao[]>([]);
    const [novo, setNovo] = useState<Producao>({
        year: new Date().getFullYear(),
        areaPlanted: 0,
        totalProduced: 0,
        farmId: 1
    });

    useEffect(() => {
        api.get(`/production-history?farmId=1`).then(res => setHistorico(res.data));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post(`/production-history`, novo);
            setNovo({ ...novo, areaPlanted: 0, totalProduced: 0 });
            const response = await api.get(`/production-history?farmId=1`);
            setHistorico(response.data);
        } catch (err) {
            console.error("Erro ao salvar produção", err);
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4">🌾 Histórico de Produção</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Ano</Form.Label>
                    <Form.Control
                        type="number"
                        value={novo.year}
                        onChange={e => setNovo({ ...novo, year: +e.target.value })}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Área Plantada (ha)</Form.Label>
                    <Form.Control
                        type="number"
                        value={novo.areaPlanted}
                        onChange={e => setNovo({ ...novo, areaPlanted: +e.target.value })}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Produção Total (toneladas)</Form.Label>
                    <Form.Control
                        type="number"
                        value={novo.totalProduced}
                        onChange={e => setNovo({ ...novo, totalProduced: +e.target.value })}
                    />
                </Form.Group>
                <Button variant="success" type="submit">Salvar Produção</Button>
            </Form>

            <h4 className="mt-5">📊 Produções Registradas</h4>
            <Table striped bordered hover className="mt-3">
                <thead>
                <tr>
                    <th>Ano</th>
                    <th>Área Plantada (ha)</th>
                    <th>Produção (t)</th>
                </tr>
                </thead>
                <tbody>
                {historico.map(p => (
                    <tr key={p.id}>
                        <td>{p.year}</td>
                        <td>{p.areaPlanted}</td>
                        <td>{p.totalProduced}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}
