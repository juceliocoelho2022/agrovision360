import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Custos from './pages/Custos';
import Vendas from './pages/Vendas';
import EstoqueGrafico from './pages/EstoqueGrafico';
import PrevisaoSafra from './pages/PrevisaoSafra';
import Producao from './pages/Producao';
import 'bootstrap/dist/css/bootstrap.min.css';
import Estoque from "./pages/Estoque";
import AgroTecnologias from './pages/AgroTecnologias';

function App() {
    return (
        <BrowserRouter>
            <div className="d-flex">
                {/* Menu lateral */}
                <div className="bg-dark text-white p-3 vh-100" style={{ width: '220px' }}>
                    <h4 className="text-success">🌿 AgroVision</h4>
                    <ul className="nav flex-column mt-4">
                        <li className="nav-item"><Link to="/producao" className="nav-link text-white">📈 Produção</Link></li>
                        <li className="nav-item"><Link to="/custos" className="nav-link text-white">💰 Custos</Link></li>
                        <li className="nav-item"><Link to="/vendas" className="nav-link text-white">🛒 Vendas</Link></li>
                        <li className="nav-item"><Link to="/estoque" className="nav-link text-white">📦 Estoque</Link></li>
                        <li className="nav-item"><Link to="/previsao" className="nav-link text-white">📊 Previsão Safra</Link></li>
                    </ul>
                </div>

                {/* Conteúdo */}
                <div className="p-4 flex-grow-1" style={{ width: '100%' }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/producao" />} />
                        <Route path="/custos" element={<Custos />} />
                        <Route path="/vendas" element={<Vendas />} />
                        <Route path="/estoque" element={<Estoque />} />
                        <Route path="/estoque-grafico" element={<EstoqueGrafico />} />
                        <Route path="/previsao" element={<PrevisaoSafra />} />
                        <Route path="/producao" element={<Producao />} />
                        <Route path="/tecnologias" element={<AgroTecnologias />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
