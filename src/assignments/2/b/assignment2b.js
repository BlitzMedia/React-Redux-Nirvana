import React from 'react'
import { Section, Container, Box, Title, Subtitle, Heading, Navbar, NavbarMenu, NavbarStart, NavbarEnd, NavbarItem, Field, Control, Input, Icon, Button  } from 'bloomer'

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
  handleCelsiusChange = temperature => { this.setState({scale: 'c', temperature}); }
  handleFahrenheitChange = temperature => { this.setState({scale: 'f', temperature}); }

  render() {
    const { page, temperature, scale } = this.state
    const { backgroundColor, title, Component } = pages[page]

    const navvers = Object.keys(pages) // We had to change the name because it was giving an error. Related to trying to override const, perhaps?

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    const onTemperatureChange = ({scale, temperature}) => {
      //scale === 'c' ? console.log('hola Celsius') : console.log('hola Fahrenheit!')
      console.log(scale)
    }

    const props = { page, temperature }

    return(
      <Section>
        <NavLinks onChange={this.changePage} pages={navvers} activePage={page} />

        <Container style={{...pageStyle, backgroundColor}}>
          <Component {...props} onChange={onTemperatureChange(scale, temperature)} />
        </Container>

      </Section>
    )
  }
}

const NavLinks = ({ pages, onChange, activePage }) =>
  <Container>
    <Navbar>
      <NavbarMenu isActive={true}>
        <NavbarStart>
          <NavbarItem>
            <Title>{activePage}</Title>
          </NavbarItem>
        </NavbarStart>

        <NavbarEnd>
          {pages.map(page => (
          <NavbarItem href='#/' onClick={() => onChange(page)}>{page}</NavbarItem>
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

const TemperatureInput = (props) =>
  <Field hasAddons>
    <Control hasIcons>
      <Input type="text" placeholder={cap(props.page) + '!'} />
      <Icon isSize='small' isAlign='left'>
          <span className={"fa fa-" + (pages[props.page].icon)} aria-hidden="true" />
          {/* This doesn't work, we don't know why!!! */}
      </Icon>
    </Control>

    <Control>
      <Button isColor='warning'>Go! - {pages[props.page].scale}</Button>
    </Control>
  </Field>

const Bonus = () => <p>Bonus</p>

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
    backgroundColor: 'blue',
    title: 'Do Something Cool',
    Component: Bonus
  }
}

// styles
const pageStyle = {
  color: 'white',
  padding: '4em'
}

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

// Questions!
// Why put click handler on callback!
