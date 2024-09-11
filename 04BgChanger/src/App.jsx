import { useState } from 'react'

function App() {
  let [color, setColor] = useState("violet");

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-4 py-2 rounded-full'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg'
          onClick={() => setColor("red")}
          style={{backgroundColor: "red"}}
          >Red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg'
          onClick={() => setColor("green")}
          style={{backgroundColor: "green"}}
          >green</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg'
          onClick={() => setColor("blue")}
          style={{backgroundColor: "blue"}}
          >blue</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg'
          onClick={() => setColor("orange")}
          style={{backgroundColor: "orange"}}
          >orange</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg'
          onClick={() => setColor("yellow")}
          style={{backgroundColor: "yellow"}}
          >yellow</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg'
          onClick={() => setColor("aqua")}
          style={{backgroundColor: "aqua"}}
          >aqua</button>
        </div>
      </div>

    </div>
  )
}

export default App
