const assert = require('assert')
const personFactory = require('./person_factory')

describe('Person', () => {
  it('Has a name', () => {
    const person = personFactory.makePerson('Alex', 38)
    assert.strictEqual(person.getName(), 'Alex')
  })
  it('Has a holder age', () => {
    const person = personFactory.makePerson('Alex', 38)
    assert.strictEqual(person.getAge(), 38)
  })

  it('can greet', () => {
    const person = personFactory.makePerson('Alex')
    assert.strictEqual(person.greet(), "Hi, I'm Alex")
  })
});