import { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Form, Button, Table } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface Venda {
    id?: number;
    produto: string;
    quantidade: number;
    precoUnitario: number;
    data: string;
    farmId: number;
}

export default function Vendas() {
    const [vendas, setVendas] = useState<Venda[]>([]);
    const [novaVenda, setNovaVenda] = useState<Venda>({
        produto: '',
        quantidade: 0,
        precoUnitario: 0,
        data: new Date().toISOString().split('T')[0],
        farmId: 1,
    });

    useEffect(() => {
        api.get('/vendas?farmId=1')
            .then(res => setVendas(res.data))
            .catch(err => console.error('Erro ao buscar vendas', err));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/vendas', novaVenda);
            const response = await api.get('/vendas?farmId=1');
            setVendas(response.data);
            setNovaVenda({ ...novaVenda, produto: '', quantidade: 0, precoUnitario: 0 });
        } catch (err) {
            console.error('Erro ao salvar venda', err);
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4">💰 Controle de Vendas</h2>

            <Form onSubmit={handleSubmit} className="mb-4">
                <Form.Group className="mb-3">
                    <Form.Label>Produto</Form.Label>
                    <Form.Control
                        type="text"
                        value={novaVenda.produto}
                        onChange={e => setNovaVenda({ ...novaVenda, produto: e.target.value })}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control
                        type="number"
                        value={novaVenda.quantidade}
                        onChange={e => setNovaVenda({ ...novaVenda, quantidade: +e.target.value })}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Preço Unitário</Form.Label>
                    <Form.Control
                        type="number"
                        value={novaVenda.precoUnitario}
                        onChange={e => setNovaVenda({ ...novaVenda, precoUnitario: +e.target.value })}
                    />
                </Form.Group>
                <Button variant="success" type="submit">Registrar Venda</Button>
            </Form>

            <h4 className="mb-3">📋 Histórico de Vendas</h4>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço Unitário</th>
                    <th>Data</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {vendas.map(v => (
                    <tr key={v.id}>
                        <td>{v.produto}</td>
                        <td>{v.quantidade}</td>
                        <td>R$ {v.precoUnitario.toFixed(2)}</td>
                        <td>{v.data}</td>
                        <td>R$ {(v.quantidade * v.precoUnitario).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <h4 className="mt-5">📈 Gráfico de Totais por Produto</h4>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={vendas.map(v => ({
                    produto: v.produto,
                    total: v.quantidade * v.precoUnitario
                }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="produto" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" fill="#17a2b8" />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    );
}
