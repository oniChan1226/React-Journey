import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("Get Your Password");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDERFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "/*-+.!@#$%^&*()-=";

    for(let i = 0; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  const passwordRef = useRef(null);
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  // const [length, setLength] = useState(8);
  // const [numberAllowed, setNumberAllowed] = useState(false);
  // const [charAllowed, setCharAllowed] = useState(false);
  // const [password, setPassword] = useState("");

  // // useRef
  // const passwordRef = useRef(null);

  // const passwordGenerator = useCallback(() => {
  //   let pass = "";
  //   let str = "ABCDERFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  //   if(numberAllowed) str += "0123456789";
  //   if(charAllowed) str += "+-*/.()!@#$%";

  //   for(let i = 1; i <= length; i++) {
  //     let char = Math.floor(Math.random() * str.length + 1);
  //     pass += str.charAt(char);
  //   }
  //   setPassword(pass);

  // }, [length, numberAllowed, charAllowed, setPassword]);


  // const copyPasswordToClipboard = useCallback(() => {
  //   passwordRef.current?.select();
  //   // passwordRef.current?.setSelectionRange(0, 3);
  //   window.navigator.clipboard.writeText(password);
  // }, [password])

  // useEffect(() => {
  //   passwordGenerator();
  // }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-2xl text-center p-5">Password Generator</h1>
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4 px-5 pb-5">
          <input
          type="text"
          value={password}
          ref={passwordRef}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2 pb-5">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={50}
            className="cursor-pointer"
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {setNumberAllowed((prevNumberAllowed) => !prevNumberAllowed)}}
            />
            <label htmlFor="numbers">Numbers</label>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="charInput"
            onChange={() => {setCharAllowed((prevCharAllowed) => !prevCharAllowed)}}
            />
            <label htmlFor="Characters">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
