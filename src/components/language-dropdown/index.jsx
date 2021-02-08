import React from 'react'

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const languageLocal = {
  'en-GB': 'English',
  'de-DE': 'German',
  'fr-FR': 'French',
  'es-ES': 'German',
}

function LanguageDropdown(props) {

  const {
    language,
    handleLanguage,
  } = props

  return(
    <DropdownButton id="dropdown-basic-button" title={languageLocal[language]}>
      <Dropdown.Item onClick={() => handleLanguage('en-GB')}>English</Dropdown.Item>
      <Dropdown.Item onClick={() => handleLanguage('de-DE')}>Deutsch</Dropdown.Item>
      <Dropdown.Item onClick={() => handleLanguage('fr-FR')}>Français</Dropdown.Item>
      <Dropdown.Item onClick={() => handleLanguage('es-ES')}>Español</Dropdown.Item>
    </DropdownButton>
  )
}

export default LanguageDropdown