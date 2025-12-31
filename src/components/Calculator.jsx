import { useState } from 'react'
import Button from './Button'
import Display from './Display'

export default function Calculator() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  // const funnyAnswers = [
  //   "42 (the answer to everything)",
  //   "A bajillion",
  //   "Error 404: Correct answer not found",
  //   "π (because why not?)",
  //   "Potato",
  //   "The square root of rainbows",
  //   "Infinity and beyond!",
  //   "404 - Math not found",
  //   "Undefined (like my usefulness)",
  //   "NaN (Not a Number, but Nice and Nifty!)"
  // ]

  // const generateWrongAnswer = () => {
  //   const originalResult = eval(input)
  //   let wrongResult

  //   do {
  //     wrongResult = Math.floor(Math.random() * 2001) - 1000
  //   } while (wrongResult === originalResult)

  //   return wrongResult.toString()
  // }

  // const getRandomAnswer = () => {
  //   if (Math.random() < 0.5) {
  //     return generateWrongAnswer()
  //   } else {
  //     return funnyAnswers[Math.floor(Math.random() * funnyAnswers.length)]
  //   }
  // }

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult()
    } else if (value === 'C') {
      setInput('')
      setResult('')
    } else {
      setInput(prev => prev + value)
    }
  }

  const calculateResult = () => {
    setLoading(true);

    setTimeout(() => {
      try {
        if (!/^[0-9+\-*/.]+$/.test(input)) {
          throw new Error("Invalid input");
        }
        // eslint-disable-next-line no-new-func
        const answer = Function(`"use strict"; return (${input})`)();
        setResult(answer.toString());
      } catch (error) {
        setResult("Error");
      }

      setLoading(false);
    }, 300);
  };
  const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/']

  return (
    <div className="bg-gradient-to-br from-yellow-400 via-purple-500 to-red-500 bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-xl p-8 w-full max-w-md">
      <h1 className="text-4xl font-bold text-black text-center mb-6">Calculator</h1>
      <Display value={input} />
      <div className="grid grid-cols-4 gap-4 mb-4">
        {buttons.map((btn) => (
          <Button
            key={btn}
            value={btn}
            onClick={() => handleButtonClick(btn)}
            isEqual={btn === '='}
          />
        ))}
      </div>
      <Display value={result} loading={loading} />
    </div>
  )
}