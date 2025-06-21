import { Container, Row, Col, Card } from 'react-bootstrap';

const tecnologias = [
    {
        titulo: '🌾 IoT no Campo',
        descricao:
            'Sensores inteligentes medem umidade, temperatura e nutrientes do solo em tempo real, permitindo decisões mais precisas.',
    },
    {
        titulo: '🚁 Drones Agrícolas',
        descricao:
            'Drones são usados para pulverização, mapeamento aéreo e análise da saúde das plantações com imagens térmicas e infravermelhas.',
    },
    {
        titulo: '📡 Previsão Climática Avançada',
        descricao:
            'Sistemas de previsão integrados ajudam a planejar o melhor momento para plantio e colheita com base em modelos meteorológicos.',
    },
    {
        titulo: '🧠 Inteligência Artificial',
        descricao:
            'IA analisa dados históricos e ambientais para prever produtividade, detectar pragas e sugerir correções no manejo.',
    },
    {
        titulo: '📈 Big Data no Agro',
        descricao:
            'Milhões de dados de sensores, mercado e clima são processados para apoiar a tomada de decisões estratégicas.',
    },
    {
        titulo: '🚜 Máquinas Autônomas',
        descricao:
            'Tratores e colheitadeiras autônomas otimizam operações, reduzindo o uso de combustível e mão de obra.',
    },
];

export default function AgroTecnologias() {
    return (
        <Container className="mt-5">
            <h2 className="mb-4 text-center">🚀 Tecnologias que Estão Revolucionando o Agro</h2>
            <Row>
                {tecnologias.map((tec, idx) => (
                    <Col key={idx} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{tec.titulo}</Card.Title>
                                <Card.Text>{tec.descricao}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
