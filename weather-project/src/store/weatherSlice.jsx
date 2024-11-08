import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2729426f566773bb8ac0c76a4cfef4ab`);
        if (!response.ok) {
            throw new Error("Місто не знайдено");
        }
        return await response.json();
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        currentWeather: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentWeather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default weatherSlice.reducer;
