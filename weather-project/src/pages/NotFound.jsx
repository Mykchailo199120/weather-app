import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Сторінку не знайдено</h1>
            <p>Вибачте, але такої сторінки не існує.</p>
            <button
                onClick={() => navigate("/")}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Повернутись на головну
            </button>
        </div>
    );
};

export default NotFound;
