const uppercase = require('./ex1')

describe('exercício 1', () => {
  test('verificar callback está sendo chamada', done => {
    uppercase('lucas', callback => {
      expect(callback).toBe('LUCAS');
      done();
    })
  }
  )
})
