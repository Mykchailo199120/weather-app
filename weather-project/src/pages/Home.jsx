import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (city) {
            navigate(`/weather/${city}`);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <h1>Пошук погоди</h1>
            <input
                type="text"
                placeholder="Введіть місто"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{
                    padding: '10px',
                    width: '200px',
                    marginBottom: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                }}
            />
            <button
                onClick={handleSearch}
                style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                Пошук
            </button>
        </div>
    );
};

export default Home;
