import React from 'react'
import { Section, Container, Box, Title, Subtitle, Navbar, NavbarMenu, NavbarStart, NavbarEnd, NavbarItem, Field, Control, Input, Icon  } from 'bloomer'

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

export default class Website extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'home',
      temperature: '',
      scale: 'c'
    }
  }

  changePage = (page) => {
    this.setState({page: page})
  }

  handleAllChange = (temperature, scale) => {
    this.setState({temperature: temperature, scale: scale})
  }

  render() {
    const { page, temperature, scale } = this.state
    const { backgroundColor, title, Component } = pages[page] 

    const navvers = Object.keys(pages) // We had to change the name because it was giving an error. Related to trying to override const, perhaps?

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit)

    const onTemperatureChange = ({ target: { value }}) => {
      console.log(celsius + '   ' + fahrenheit)
      this.handleAllChange(value, scale)
    }

    const scale2 = pages[page].scale

    const componentProps = {
      celsius,
      fahrenheit,
      temperature,
      scale: scale2 === 'c' ? celsius : fahrenheit,
      onTemperatureChange,
      page
    }

    return(
      <Section>
        <NavLinks changePage={this.changePage} pages={navvers} activePage={title} />

        <Container style={{...pageStyle, backgroundColor}}>
          <Component {...componentProps} />
        </Container>

        <Container><BoilingVerdict celsius={parseFloat(celsius)} /></Container>
      </Section>
    )
  }
}

const TemperatureInput = ({page, temperature, celsius, fahrenheit, scale, onTemperatureChange}) =>
  <Field>
    <Control hasIcons>
      <Input value={scale} onChange={onTemperatureChange} />
      <Icon isSize='small' isAlign='left'><PageIcon page={page} /></Icon>
    </Control>
  </Field>


const NavLinks = ({ pages, changePage, activePage, celsius }) =>
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
            <NavbarItem key={key} href='#/' onClick={() => changePage(page)}>{page}</NavbarItem>
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
      It lets you change pages, while demonstrating the "lifting of state" that is "shared" between multiple pages :)
    </p>
  </Box>

//(e, scale) => onChange(e.target.value, scale)
const Bonus = () =>
  <Box>
    <Title>Hey James!</Title>
    <Subtitle>Let us welcome you to our implementation of Bulma & BloomerJS</Subtitle>
    <p>Although we might have gone crazy in the process, and we've taken around 4 times what we thought we would, I think we have learned a lot from this exercise</p>
    <p>We've had a real problem with understanding the flow of information. I think our main problem was the mix of very heavy concepts for beginners, with destructuring at the center of it all</p>
    <br/>
    <Subtitle>Things we've done:</Subtitle>
    <ul>
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
  return props.page === 'celsius'
    ? <div style={{height: 10, width: 30, backgroundColor: 'red'}} />
    : <div style={{height: 10, width: 30, backgroundColor: 'blue'}} />

  // if (props.page === 'celsius') return <span className="fa fa-fire" />;
  // return <span className="fa fa-snowflake" />
}

// Questions!
// Why put click handler on callback!
