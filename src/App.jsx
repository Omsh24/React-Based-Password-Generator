import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'
import TickMark from './TickMark';

function App() {
  
  const [length, setLength] = useState(8);
  const [capAllowed, setCapAllowed] = useState(true)
  const [smallAllowed, setSmallAllowed] = useState(false)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(false)

  const passRef = useRef(null)

  const copyText = () => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = ""

    if(capAllowed)  str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(smallAllowed)  str += 'abcdefghijklmnopqrstuvwxyz'
    if(numAllowed)  str += '1234567890'
    if(charAllowed)  str += '!~@#$%^&*()_+{}|:"<>?`-=[]\;,./'

    for(let i=1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, capAllowed, smallAllowed, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, capAllowed, smallAllowed, numAllowed, charAllowed, passwordGenerator])

  return (
    // background
    <div className='container w-full h-screen bg-red-400'>
      <h1 className='texty'>REACT PASSWORD GENERATOR</h1>

      {/* card */}
      <div className='card p-[15px] bg-slate-500 w-[320px] h-fit gap-10'>
        {/* password section */}
        <div className='pass'>
          <input type="text" className='p-[5px] rounded-l-lg' readOnly placeholder='Password'
          value={password} ref={passRef}/>
          <button className='bg-blue-600 rounded-r-lg p-[5px]' onClick={copyText}>Copy</button>
        </div>

        {/* options */}
        <div className='flex flex-col gap-8 justify-center align-middle'>
          <div className='flex gap-2 rangediv'>
            <input type="range" min={1} max={20} name='ranger' defaultValue={8}
             onChange={(e) => {setLength(e.target.value)}}/>
            <label htmlFor="ranger">Length: {length}</label>
          </div>

          <div className='flex gap-2'>
            <TickMark checked={check1} />
            <input type="checkbox" id='ca' defaultChecked={capAllowed}
             onChange={() => {
              setCapAllowed((prev) => !prev)
              setCheck1((prev) => !prev)
              }}/>
            <label htmlFor="ca" >Capital Alphabets: {capAllowed ? 'Allowed' : 'Not-Allowed'}</label>
          </div>

          <div className='flex gap-2'>
          <TickMark checked={check2}/>
            <input type="checkbox" id='sa'  defaultValue={smallAllowed}  
            onChange={() => {
              setSmallAllowed((prev) => !prev)
              setCheck2((prev) => !prev)
            }}/>
            <label htmlFor="sa">Small Alphabets: {smallAllowed ? 'Allowed' : 'Not-Allowed'}</label>
          </div>

          <div className='flex gap-2' >
          <TickMark checked={check3}/>
            <input type="checkbox" id='na' defaultValue={numAllowed} 
            onChange={() => {
              setNumAllowed((prev) => !prev)
              setCheck3((prev) => !prev)
            }}/>
            <label htmlFor="na">Numbers: {numAllowed ? 'Allowed' : 'Not-Allowed'}</label>
          </div>

          <div className='flex gap-2'>
          <TickMark checked={check4}/>
            <input type="checkbox" id='cha' defaultValue={charAllowed} 
            onChange={() => {
              setCharAllowed((prev) => !prev)
              setCheck4((prev) => !prev)
            }}/>
            <label htmlFor="cha">Symbols: {charAllowed ? 'Allowed' : 'Not-Allowed'}</label>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default App
