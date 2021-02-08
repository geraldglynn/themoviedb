import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import List from 'components/list'
import './style/main.scss'

const lanagueLocal = {
  'en-GB': 'English',
  'de-DE': 'German',
  'fr-FR': 'French',
  'es-ES': 'German',
}

function App() {

  const [language, setLanguage] = useState('en-GB')
  const handleLanguage = (lang) => setLanguage(lang)

  return (
    <div className="App">
      <Container>
        <Row>
          <Col><h1>Showtime Analytics</h1></Col>
          <Col xs={1}>
            <DropdownButton id="dropdown-basic-button" title={lanagueLocal[language]}>
              <Dropdown.Item onClick={() => handleLanguage('en-GB')}>English</Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguage('de-DE')}>German</Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguage('fr-FR')}>French</Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguage('es-ES')}>Spanish</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <List language={language} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
