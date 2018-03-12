import React from 'react'
import { Section, Container, Box, Title, Subtitle, Navbar, NavbarMenu, NavbarStart, NavbarEnd, NavbarItem, Field, Control, Input, Icon  } from 'bloomer'

// Functions for calculating TemperatureInput
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
  if (Number.isNaN(input)) return '';

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export default class Website extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'home',
      temperature: '',
      scale: 'c'
    }
  }

  changePage = (page) => { this.setState({page: page}) }
  handleAllChange = (temperature, scale) => { this.setState({temperature: temperature, scale: scale}) }

  render() {
    const { page, temperature, scale } = this.state
    const { backgroundColor, title, Component } = pages[page]

    const navvers = Object.keys(pages) // We had to change the name because it was giving an error. Related to trying to override const, perhaps?

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit)

    const onTemperatureChange = ({temperature, scale}) => {
      //scale === 'c' ? this.handleCelsiusChange(celsius) : this.handleFahrenheitChange(fahrenheit)
      var superTemperature = scale === 'c' ? '12345' : '67890'
      console.log(celsius + '   ' + fahrenheit)
      this.handleAllChange(temperature, scale)
    }

    return(
      <Section>
        <NavLinks onChange={this.changePage} pages={navvers} activePage={title} />

        <Container style={{...pageStyle, backgroundColor}}>
          <Component page={page} temperature={temperature} celsius={celsius} fahrenheit={fahrenheit} scale={pages[page].scale} onChange={onTemperatureChange} />
        </Container>

        <Container><BoilingVerdict celsius={parseFloat(celsius)} /></Container>
      </Section>
    )
  }
}

const NavLinks = ({ pages, onChange, activePage, celsius }) =>
  <Container>
    <Navbar>
      <NavbarMenu isActive={true}>
        <NavbarStart>
          <NavbarItem>
            <Title>{activePage}</Title>
          </NavbarItem>
        </NavbarStart>

        <NavbarEnd>
          {pages.map((page, key) => (
            <NavbarItem key={key} href='#/' onClick={() => onChange(page)}>{page}</NavbarItem>
          ))}
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  </Container>

// Components
const Home = () =>
  <Box>
    <Subtitle tag='h3'>This is the Home of Assignment 2b.</Subtitle>
    <p>
      It is a low level custom-built non-URL-based page routing mechanism solution based on state.
      It lets you switch pages, while demonstrating the "lifting of state" that is "shared" between multiple pages :)
    </p>
  </Box>
//(e, scale) => onChange(e.target.value, scale)
const TemperatureInput = ({page, temperature, celsius, fahrenheit, scale, onChange}) =>
  <Field>
    <Control hasIcons>
      <Input value={scale === 'c' ? celsius : fahrenheit} onChange={(e) => onChange({temperature: e.target.value, scale: scale})} placeholder={page + '!'} />
      <Icon isSize='small' isAlign='left'><PageIcon /></Icon>
    </Control>
  </Field>

const Bonus = () =>
  <Box>
    <Title>Hey James!</Title>
    <Subtitle>Let us welcome you to our implementation of Bulma & BloomerJS</Subtitle>
    <p>Although we might have gone crazy in the process, and we've taken around 4 times what we thought we would, I think we have learned a lot from this exercise</p>
    <p>We've had a real problem with understanding the flow of information. I think our main problem was the mix of very heavy concepts for beginners, with destructuring at the center of it all</p>
    <br/>
    <Subtitle>Things we've done:</Subtitle>
    <ul>
      <li>Implemented SCSS preprocessing, without ejecting (there's a bad node-sass-chokidar bug and this held us back)</li>
      <li>Implemented Bulma, a pretty cool CSS framework</li>
      <li>Started using Bloomer JS, the best React implementation we could find</li>
      <li>Rely as little as possible in CSS / HTML and purely in declarative programming (we're much better now)</li>
      <li>Gone through the crazy process (for us) of understanding how to pass functions as props and get results back in destructured form</li>
      <li>Understood how the concept of a Router actually works</li>
    </ul>

    <br/>
    <Subtitle>Things we wish we could've done</Subtitle>
    <ul>
      <li>A cooler Bonus</li>
      <li>A class last week</li>
      <li>Understand why dynamic icons won't work!</li>
    </ul>

    <br/>
    <p>Anyway, talk soon!</p>
  </Box>

// Pages
const pages = {
  home: {
    backgroundColor: 'purple',
    title: 'Home',
    Component: Home
  },
  celsius: {
    backgroundColor: 'red',
    icon: 'fire',
    title: 'Celsius!',
    scale: 'c',
    Component: TemperatureInput
  },
  fahrenheit: {
    backgroundColor: 'orange',
    icon: 'snowflake',
    title: 'Fahrenheit!',
    scale: 'f',
    Component: TemperatureInput
  },
  bonus: {
    backgroundColor: '#b0976d',
    title: 'Do Something Cool',
    Component: Bonus
  }
}

// styles
const pageStyle = {
  color: 'white',
  padding: '4em'
}

function PageIcon(props) {
  if (props.page === 'celsius') return <span className="fa fa-fire" />;
  return <span className="fa fa-snowflake" />
}

// Questions!
// Why put click handler on callback!
