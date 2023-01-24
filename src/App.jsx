import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import db from "./db/quotes.json"
import { motion } from 'framer-motion';
const arrayColors = ["#00c6ab","#f86f6f","#6aa3b4","#A4303F",]
  const getRandom = (arrayElements) => {
    const quantityValues = arrayElements.length
    const randomIndex =   Math.floor(Math.random() * quantityValues)
    return arrayElements[randomIndex]
  };
function App() {
const [quote,setQuote]=useState(getRandom(db))

const [color, setColor]=useState(getRandom(arrayColors))

  const newQuote = () => {
    setQuote(getRandom(db))
  }

  return (
    <motion.div 
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x:window.innerWidth, transition:{duration: 0.1}}}
    className="App" style={{backgroundColor: color}}>
      <QuoteBox 
      quote={quote} 
      newQuote={newQuote}
      color={color}/>
    </motion.div>
  )
}

export default App
