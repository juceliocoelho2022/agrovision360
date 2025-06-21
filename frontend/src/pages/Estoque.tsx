import { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Table, Badge, Alert } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface EstoqueItem {
    id?: number;
    name: string;
    quantity: number;
    unit: string;
    farmId: number;
}

export default function EstoqueGrafico() {
    const [dados, setDados] = useState<EstoqueItem[]>([]);
    const [estoque, setEstoque] = useState<EstoqueItem[]>([]);

    useEffect(() => {
        api.get('/estoque?farmId=1')
            .then(res => {
                setDados(res.data);
                setEstoque(res.data);
            })
            .catch(err => console.error('Erro ao carregar dados do estoque:', err));
    }, []);

    const estoqueCritico = estoque.filter(item => item.quantity < 10);

    return (
        <Container className="mt-5">
            <h2 className="mb-4">📦 Controle de Estoque</h2>

            {estoqueCritico.length > 0 && (
                <Alert variant="danger">
                    ⚠️ Atenção! Alguns itens estão com estoque crítico.
                </Alert>
            )}

            <Table striped bordered hover className="mb-5">
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantidade</th>
                    <th>Unidade</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {estoque.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        <td>
                            {item.quantity < 10 ? (
                                <Badge bg="danger">Baixo</Badge>
                            ) : (
                                <Badge bg="success">OK</Badge>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <h3 className="mb-4">📊 Gráfico de Estoque Atual</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={dados}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="quantity" fill="#28a745" />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    );
}
