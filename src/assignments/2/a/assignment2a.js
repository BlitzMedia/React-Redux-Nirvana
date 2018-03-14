import React, { Component } from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

// Calculadora

function BoilingVerdict(props) {
  if (props.celsius >= 100) return <p>The water would boil.</p>;
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) { return (fahrenheit - 32) * 5 / 9; }
function toFahrenheit(celsius) { return (celsius * 9 / 5) + 32; }

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (isNaN(input)) return '';

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded;
}


class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {temperature: '', scale: 'c'}
  }

  handleCelsiusChange = temperature => { this.setState({scale: 'c', temperature}); }
  handleFahrenheitChange = temperature => { this.setState({scale: 'f', temperature}); }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);

    // NOT USED -- DELETE IT!
    // const onTemperatureChange = ({scale, temperature}) => {
    //   scale === 'c' ? console.log('hola Celsius') : console.log('hola Fahrenheit!');
    // }

    console.log(celsius, fahrenheit)

    return (
      <div>

        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <br/>

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict celsius={parseFloat(celsius)} />

      </div>
    );
  }
}



class TemperatureInput extends Component {

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    )
  }
}


export default Calculator
