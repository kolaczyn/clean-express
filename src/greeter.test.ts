import { greeter } from './greeter'

describe('greeter', () => {
  it('greets hello world', () => {
    expect(greeter('world')).toBe('Hello world!')
  })
  it('greet Paweł', () => {
    expect(greeter('Paweł')).toBe('Hello Paweł!')
  })
})
