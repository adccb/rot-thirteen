const rot13 = require('../index.js')

describe('rot-thirteen', () => {
  it('should return the correct rot-13', () => {
    const i = 'the lazy fox jumps over the brown dog'
    const o = 'gur ynml sbk whzcf bire gur oebja qbt'

    expect(rot13(i)).toEqual(o)
    expect(rot13(o)).toEqual(i)
  })

  it('should not translate non-alphanumeric characters', () => {
    const i = '1234567890!@#$%^&*()_+-={}[]|:;\'"<,>.?/`~'

    expect(rot13(i)).toEqual(i)
  })

  it('should correctly handle capital letters', () => {
    const i = 'THE LAZY FOX JUMPS OVER THE BROWN DOG'
    const o = 'GUR YNML SBK WHZCF BIRE GUR OEBJA QBT'

    expect(rot13(i)).toEqual(o)
    expect(rot13(o)).toEqual(i)
  })
})

