function createFiboIterable(end) {
  let count = 0
  let prevValue = 0
  let currentValue = 1
  let nextValue = prevValue

  return {
    [Symbol.iterator]() {
      return {
        next() {
          let result
          if (count < end) {
            if (count === 1) {
              nextValue = currentValue
            }
            if (count > 1) {
              nextValue = prevValue + currentValue
              prevValue = currentValue
              currentValue = nextValue
            }
            result = { value: nextValue, done: false }
            count += 1
            return result
          }
          return { undefined, done: true }
        },
      }
    },
  }
}

const fiboIterable = createFiboIterable(5)

console.log([...fiboIterable])
