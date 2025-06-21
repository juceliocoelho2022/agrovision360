import { Container, Row, Col, Card } from 'react-bootstrap';

const tecnologias = [
    {
        titulo: "🌾 Drones Agrícolas",
        descricao: "Monitoramento aéreo de lavouras, pulverização precisa e mapeamento georreferenciado.",
        imagem: "https://cdn-icons-png.flaticon.com/512/3639/3639874.png"
    },
    {
        titulo: "📡 IoT no Campo",
        descricao: "Sensores de solo, umidade e temperatura conectados em tempo real para decisão assertiva.",
        imagem: "https://cdn-icons-png.flaticon.com/512/1701/1701160.png"
    },
    {
        titulo: "🧠 Inteligência Artificial",
        descricao: "Modelos preditivos para previsão de safra, detecção de pragas e otimização da produção.",
        imagem: "https://cdn-icons-png.flaticon.com/512/4149/4149643.png"
    },
    {
        titulo: "📊 Big Data Agrícola",
        descricao: "Análise massiva de dados para gestão estratégica, produtividade e redução de perdas.",
        imagem: "https://cdn-icons-png.flaticon.com/512/3011/3011270.png"
    },
    {
        titulo: "🤖 Máquinas Autônomas",
        descricao: "Tratores e colheitadeiras inteligentes com direção autônoma e conectividade total.",
        imagem: "https://cdn-icons-png.flaticon.com/512/1632/1632670.png"
    },
];

export default function AgroTecnologias() {
    return (
        <Container className="mt-5">
            <h2 className="text-success mb-4">🚀 Inovações no Agronegócio</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {tecnologias.map((tec, idx) => (
                    <Col key={idx}>
                        <Card className="h-100 shadow">
                            <Card.Img variant="top" src={tec.imagem} height="180" style={{ objectFit: 'contain', padding: '10px' }} />
                            <Card.Body>
                                <Card.Title className="text-primary">{tec.titulo}</Card.Title>
                                <Card.Text>{tec.descricao}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
