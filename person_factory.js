function makePerson(name, age) {
  let state = {
    name,
    age
  }
  return {
    ...getters(state),
    ...greeter(state)
  }
}

function getters(state) {
  return Object.keys(state).reduce((getters, key) => {
    const capitalizedProperty = key[0].toUpperCase() + key.slice(1)
    const getterName = `get${capitalizedProperty}`
    return {
      [getterName]: () => state[key],
      ...getters
    }
  }, {})
}

const greeter = (state) => ({
  greet: () => `Hi, I'm ${state.name}`
})

module.exports = { makePerson }

