import { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Card, Row, Col } from 'react-bootstrap';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

interface PrevisaoSafra {
    year: number;
    areaPlanted: number;
    estimatedProduction: number;
    productivity: number;
}

export default function PrevisaoSafra() {
    const [dados, setDados] = useState<PrevisaoSafra[]>([]);

    useEffect(() => {
        // Dados fictícios até 2035
        const mock: PrevisaoSafra[] = [];
        for (let year = 2025; year <= 2035; year++) {
            const areaPlanted = 100 + Math.floor(Math.random() * 50);
            const productivity = 2 + Math.random();
            const estimatedProduction = areaPlanted * productivity;
            mock.push({ year, areaPlanted, estimatedProduction, productivity });
        }
        setDados(mock);
    }, []);

    return (
        <Container className="mt-5">
            <h2 className="mb-4">🌱 Previsão de Safra até 2035</h2>

            <Row className="mb-4">
                <Col>
                    <Card bg="success" text="white">
                        <Card.Body>
                            <Card.Title>🌾 Área Plantada Média</Card.Title>
                            <Card.Text>
                                {(
                                    dados.reduce((acc, cur) => acc + cur.areaPlanted, 0) /
                                    dados.length
                                ).toFixed(2)} ha
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="warning" text="dark">
                        <Card.Body>
                            <Card.Title>📈 Produção Estimada Total</Card.Title>
                            <Card.Text>
                                {dados.reduce((acc, cur) => acc + cur.estimatedProduction, 0).toFixed(2)} t
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="info" text="white">
                        <Card.Body>
                            <Card.Title>📊 Produtividade Média</Card.Title>
                            <Card.Text>
                                {(
                                    dados.reduce((acc, cur) => acc + cur.productivity, 0) /
                                    dados.length
                                ).toFixed(2)} t/ha
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={dados} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="estimatedProduction" stroke="#28a745" name="Produção Estimada (t)" />
                    <Line type="monotone" dataKey="areaPlanted" stroke="#ffc107" name="Área Plantada (ha)" />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    );
}
