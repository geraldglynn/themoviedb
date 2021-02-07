import languageFromCode from 'utils/language'

describe('languageFromCode', () => {

  const countries = [
    {
      code: 'IE',
      country: 'Ireland',
    },
    {
      code: 'ES',
      country: 'Spain',
    },
    {
      code: 'FR',
      country: 'France',
    },
    {
      code: 'DE',
      country: 'Germany',
    },
  ]

  countries.forEach( country => {
    it('should return correct country name', ()=> {
      expect(languageFromCode(country.code)).toBe(country.name)
    })
  })
})
