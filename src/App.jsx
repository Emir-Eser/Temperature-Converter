import React, { useState } from 'react'
import InputBar from './components/InputBar'
import ConversionButtons from './components/ConversionButtons'
import Result from './components/Result'
import './TemperatureConverter.css'

function App() 
{
    const [celsius, setCelsius] = useState('');
    const [convertedTemperature, setConvertedTemperature] = useState();

    function convertToKelvin() 
    {
        const inputCelsius = parseFloat(celsius);

        if (!isNaN(inputCelsius)) 
        {
            const kelvin = inputCelsius + 273.15;

            setConvertedTemperature(`${kelvin.toFixed(2)} °K`);
        }
    }

    function convertToFahrenheit() {
        const inputCelsius = parseFloat(celsius);
        if (!isNaN(inputCelsius)) {
            const fahrenheit = (inputCelsius * 9 / 5) + 32;
            setConvertedTemperature(`${fahrenheit.toFixed(2)} °F`);
        }
    }

    return (

        <div className="container">

            <div className="main-box">

                <h2>Temperature Converter</h2>

                <InputBar value={celsius} onChange={(e) => setCelsius(e.target.value)} />

                <ConversionButtons onKelvinClick={convertToKelvin} onFahrenheitClick={convertToFahrenheit} />

                <Result convertedTemperature={convertedTemperature} />

            </div>

        </div>

    )
}

export default App
