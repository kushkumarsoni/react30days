import { useState } from 'react'
import './App.css'

function App() {

  const[color,setColor] = useState("olive");

  const colorList = ['red', 'green', 'blue', 'violet','yellow','gray','black'];

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
              {
                colorList.map((bgColor,index) => 
                  (<button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                  style={{ backgroundColor:bgColor}}
                   onClick={()=>setColor(`${bgColor}`)} key={index}>{bgColor}</button>)
                )
              }

                {/* <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                style={{ backgroundColor:color}}
                onClick={()=>setColor("red")}>{"red"}</button> */}
          </div>
        </div>
    </div>
  )
}

export default App
