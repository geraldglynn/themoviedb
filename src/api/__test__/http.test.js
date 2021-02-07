import http from '../http'

afterEach(() => {
  delete global.fetch
})

describe('http', () => {
  it('GET receives response', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => ({ status: 200 }) }))
    const response = await http({path: '/movie', params: {id: '464052'}})
    expect(response.status).toBe(200)
  })

  it('GET gets cached', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => ({ status: 200 }) }))
    const response1 = await http({path: '/movie', params: {id: '464052'}})

    delete global.fetch
    const response2 = await http({path: '/movie', params: {id: '464052'}})

    expect(response1.status).toBe(200)
    expect(response2.status).toBe(200)
  })

  it('POST does not get cached', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => ({ status: 200 }) }))
    const response1 = await http({path: '/movie', params: {id: '464052'}}, { method: 'POST'})

    global.fetch = jest.fn(() => Promise.resolve({ json: () => ({ status: 400 }) }))
    const response2 = await http({path: '/movie', params: {id: '464052'}}, { method: 'POST'})

    expect(response1.status).toBe(200)
    expect(response2.status).toBe(400)
  })
})

