import * as fs from "fs"

const inputFilePath = "./input.txt"

const readFileLines = async (filePath: string): Promise<string[]> => {
  const data = await fs.promises.readFile(filePath, "utf8")
  return data.split("\n")
}

const isNumber = (character: string): boolean => {
  return character >= "0" && character <= "9"
}

const main =  async (): Promise<number> => {
  const lines = await Promise.resolve(readFileLines(inputFilePath))

  const finalSum = lines.reduce((accumulator, line) => {
    const characters = line.split("")
    const firstNumber = characters.find(character => isNumber(character))
    const lastNumber = characters.reverse().find(character => isNumber(character))

    const combinationNumber: number = Number(`${firstNumber}${lastNumber}`)
    return accumulator + combinationNumber
  }, 0)

  return finalSum
}

main().then((result) => console.log(result)) // 54927
