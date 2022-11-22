function createFiboGenerator(end) {
  let count = 0
  let fiboArray = [0, 1]

  return function* fiboGenerator() {
    while (count < end) {
      yield fiboArray[count]
      count += 1
      if (count > 1) {
        fiboArray = [...fiboArray, fiboArray[count - 2] + fiboArray[count - 1]]
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
