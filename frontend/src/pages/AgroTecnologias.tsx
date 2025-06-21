import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function AgroTecnologias() {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
            minHeight: '100vh',
            padding: '40px 0',
            fontFamily: 'Arial, sans-serif',
            color: '#fff',
        }}>
            <Container fluid>
                <motion.h2
                    className="text-center mb-5"
                    style={{ color: '#00ffe5', fontSize: '2.5rem', fontWeight: 'bold' }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    🌿 AgroVision360 — O Futuro do Agro
                </motion.h2>

                <Row className="justify-content-center mb-5">
                    <Col md={8} className="text-center">
                        <motion.img
                            src="/img/dashboard-agrovision.png"
                            alt="Dashboard AgroVision360"
                            style={{
                                width: '100%',
                                borderRadius: '20px',
                                boxShadow: '0 0 30px #00ffe5',
                                maxHeight: '480px',
                                objectFit: 'cover'
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        />
                    </Col>
                </Row>

                <Row className="g-4 justify-content-center">
                    {[
                        {
                            titulo: '🌾 Previsão da Safra',
                            descricao: 'Análise preditiva ano a ano com base em dados climáticos e produtividade.',
                            valor: '2024-2035',
                            cor: '#1f8a70'
                        },
                        {
                            titulo: '💰 Gestão de Custos',
                            descricao: 'Controle visual de custos operacionais e comparativos com produtividade.',
                            valor: 'R$ 350k',
                            cor: '#f39c12'
                        },
                        {
                            titulo: '📈 Vendas',
                            descricao: 'Painel de vendas por trimestre, região ou cultura.',
                            valor: 'R$ 860k',
                            cor: '#00ffe5'
                        },
                        {
                            titulo: '🌱 Produção Atual',
                            descricao: 'Volume de produção por cultura com dados em tempo real.',
                            valor: '4.2 Mil t',
                            cor: '#27ae60'
                        },
                        {
                            titulo: '🧑‍🌾 Gestão de Propriedade',
                            descricao: 'Cadastro e monitoramento das áreas de plantio, irrigação e solo.',
                            valor: '12 Fazendas',
                            cor: '#9b59b6'
                        }
                    ].map((card, idx) => (
                        <Col md={4} key={idx}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Card
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: `0 0 20px ${card.cor}`
                                    }}
                                    className="text-white"
                                >
                                    <Card.Body>
                                        <Card.Title style={{ color: card.cor, fontWeight: 'bold' }}>{card.titulo}</Card.Title>
                                        <h3 style={{ fontWeight: 'bold' }}>{card.valor}</h3>
                                        <Card.Text>{card.descricao}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
