import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../store/weatherSlice';

const WeatherDetails = () => {
    const { city } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentWeather, status, error } = useSelector((state) => state.weather);

    useEffect(() => {
        dispatch(fetchWeather(city));
    }, [city, dispatch]);

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '50px auto', textAlign: 'center' }}>
            <button
                onClick={() => navigate("/")}
                style={{
                    marginBottom: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Назад на головну
            </button>

            <h2>Деталі погоди для {city}</h2>

            {status === 'loading' && <p>Завантаження...</p>}
            {status === 'failed' && <p>Помилка: {error || 'Дані для цього міста не знайдено'}</p>}

            {status === 'succeeded' && currentWeather && currentWeather.main ? (
                <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
                    <p>Температура: {currentWeather.main.temp}°C</p>
                    <p>Опис: {currentWeather.weather[0].description}</p>
                    <p>Вологість: {currentWeather.main.humidity}%</p>
                    <p>Швидкість вітру: {currentWeather.wind.speed} м/с</p>
                </div>
            ) : (
                status === 'succeeded' && <p>Дані для цього міста не знайдено.</p>
            )}
        </div>
    );
};

export default WeatherDetails;
