import { useEffect, useState } from 'react';
import { Farm } from '../models/Farm';
import api from '../services/api';

export default function Dashboard() {
    const [farms, setFarms] = useState<Farm[]>([]);

    useEffect(() => {
        api.get('/farms')
            .then(res => setFarms(res.data))
            .catch(err => console.error('Erro ao carregar fazendas', err));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>🌾 Fazendas Cadastradas</h1>
            <ul>
                {farms.map(farm => (
                    <li key={farm.id}>
                        <strong>{farm.name}</strong> – {farm.location} ({farm.owner})
                    </li>
                ))}
            </ul>
        </div>
    );
}
