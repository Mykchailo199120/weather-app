import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [units, setUnits] = useState('metric');

    const toggleUnits = () => {
        setUnits(prev => (prev === 'metric' ? 'imperial' : 'metric'));
    };

    return (
        <WeatherContext.Provider value={{ units, toggleUnits }}>
            {children}
        </WeatherContext.Provider>
    );
};
