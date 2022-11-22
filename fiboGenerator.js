function createFiboGenerator(end) {
  let count = 0
  let prevValue = 0
  let currentValue = 1
  let nextValue = prevValue

  return function* fiboGenerator() {
    while (count < end) {
      yield nextValue
      count += 1
      if (count === 1) {
        nextValue = currentValue
      }
      if (count > 1) {
        nextValue = prevValue + currentValue
        prevValue = currentValue
        currentValue = nextValue
      }
    }
  }
}

const fiboGeneratorFunction1 = createFiboGenerator(7)
const fiboGeneratorObject1 = fiboGeneratorFunction1()

console.log([...fiboGeneratorObject1])

const fiboGeneratorFunction2 = createFiboGenerator(10)
const fiboGeneratorObject2 = fiboGeneratorFunction2()

for (let i = 0; i < 12; i += 1) {
  console.log(fiboGeneratorObject2.next())
}
