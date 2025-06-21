import { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Table, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface Safra {
    id?: number;
    year: number;
    estimatedProduction: number;
    areaPlanted: number;
    farmId: number;
}

export default function PrevisaoSafra() {
    const [dados, setDados] = useState<Safra[]>([]);
    const [nova, setNova] = useState<Safra>({
        year: new Date().getFullYear(),
        estimatedProduction: 0,
        areaPlanted: 0,
        farmId: 1
    });

    useEffect(() => {
        api.get('/previsao?farmId=1').then(res => setDados(res.data));
    }, []);

    const salvar = async (e: React.FormEvent) => {
        e.preventDefault();
        await api.post('/previsao', nova);
        const res = await api.get('/previsao?farmId=1');
        setDados(res.data);
        setNova({ ...nova, estimatedProduction: 0, areaPlanted: 0 });
    };

    return (
        <Container className="mt-4">
            <h2>🌾 Previsão de Safra (2025-2035)</h2>
            <Form onSubmit={salvar} className="mb-4">
                <Row>
                    <Col><Form.Control type="number" placeholder="Ano" value={nova.year} onChange={e => setNova({ ...nova, year: +e.target.value })} /></Col>
                    <Col><Form.Control type="number" placeholder="Área Plantada (ha)" value={nova.areaPlanted} onChange={e => setNova({ ...nova, areaPlanted: +e.target.value })} /></Col>
                    <Col><Form.Control type="number" placeholder="Produção Estimada (t)" value={nova.estimatedProduction} onChange={e => setNova({ ...nova, estimatedProduction: +e.target.value })} /></Col>
                    <Col><Button type="submit" variant="success">Adicionar</Button></Col>
                </Row>
            </Form>

            <h5>📋 Tabela de Safras</h5>
            <Table striped bordered hover size="sm">
                <thead><tr><th>Ano</th><th>Área Plantada</th><th>Produção Estimada</th></tr></thead>
                <tbody>
                {dados.map(s => (
                    <tr key={s.id}><td>{s.year}</td><td>{s.areaPlanted} ha</td><td>{s.estimatedProduction} t</td></tr>
                ))}
                </tbody>
            </Table>

            <h5 className="mt-5">📈 Gráfico de Previsão de Produção</h5>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dados}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="estimatedProduction" stroke="#2e8b57" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    );
}
