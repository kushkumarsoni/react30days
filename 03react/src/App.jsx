import './App.css'
import Card from './components/Card'
import { Product } from './components/Product'

function App() {

  let detail = {
    "age":30,
    "gender":"Male"
  }

  return (
    <>
      <h1 className="bg-green-500 text-white p-2 rounded-xl mb-3">Tailwind CSS Implement</h1>
      <div className='grid grid-cols-4 gap-4'>
          <Card name = "Kush" about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?' detail={detail} />
          <Card name = "Deepak" about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?2' detail={detail} />
          <Card name = "Shiva" about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?3' detail={detail} />
          <Card name = "Abhishek" about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?4' detail={detail} />
      </div>
      <div className="flex justify-start gap-1 mt-2 text-white justify-items-center ">
          <div className="bg-green-400 p-10">01</div>
          <div className="bg-red-400 p-10">02</div>
          <div className="bg-yellow-400 p-10">03</div>
      </div>

      <Product />
    </>
  )
}

export default App
