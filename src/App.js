import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import LanguageDropdown from 'components/language-dropdown'
import List from 'components/list'
import './style/main.scss'

function App() {

  const [language, setLanguage] = useState('en-GB')
  const handleLanguage = (lang) => setLanguage(lang)

  return (
    <div className="App">
      <Container>
        <Row>
          <Col><h1>Showtime Analytics</h1></Col>
          <Col xs={1}>
            <LanguageDropdown
              language={language}
              handleLanguage={handleLanguage}
            />
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
