function createFiboIterable(end) {
  let count = 0
  let fiboArray = [0, 1]

  return {
    [Symbol.iterator]() {
      return {
        next() {
          let result
          if (count < end) {
            if (count > 1) {
              fiboArray = [...fiboArray, fiboArray[count - 2] + fiboArray[count - 1]]
            }
            result = { value: fiboArray[count], done: false }
            count += 1
            return result
          }
          return { undefined, done: true }
        },
      }
    },
  }
}

const fiboIterable = createFiboIterable(7)

console.log([...fiboIterable])
