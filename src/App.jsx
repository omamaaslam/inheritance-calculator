import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState();
  const [widows, setWidows] = useState();
  const [son, setSon] = useState();
  const [daughter, setDaughter] = useState();
  const [remaining, setRemaining] = useState();

  const divideWorth = (event) => {
    event.preventDefault();
    if (!amount && !widows && !son && !daughter) {
      alert("please fill all fields");
      return
    }
    // calculate for single widow 
    let singleWidowAmount = amount * 1 / 8;
    console.log("singleWidow: ", singleWidowAmount);
    setWidows(singleWidowAmount);
    let ramainingAmout = amount - singleWidowAmount * widows;
    setRemaining(ramainingAmout);
    let singleSon = calculateAmountofSingleSon(ramainingAmout, son, daughter);
    setSon(singleSon);
    let remainAmount1 = ramainingAmout - singleSon * son;
    console.log("remainAmount1", remainAmount1)
    setRemaining(remainAmount1);
    setDaughter(remainAmount1 / daughter);
  }

  function calculateAmountofSingleSon(remaining, son, daughter) {
    let b = son * 2;
    let bI = b + parseInt(daughter);
    let amt1 = (remaining / bI) * b;
    let amt2 = amt1 / son;
    return amt2;
  }

  return (
    <div className='bg-gray-900 w-[100%] h-[100vh] flex justify-start items-start bg-[url(https://images.pexels.com/photos/910307/pexels-photo-910307.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-center bg-no-repeat bg-cover'>
      <div className='w-full p-[19px] mt-10 flex justify-evenly flex-wrap'>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-[384px]" onSubmit={divideWorth}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Total Amount
            </label>
            <input type='number' min={0} id='amount' value={amount} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Total Amount"
              onChange={(e) => setAmount(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="widow">
              No. of widow
            </label>
            <input type='number' min={0} max={4} id='widow' value={widows} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="No. of widow"
              onChange={(e) => setWidows(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="son">
              No. of Son
            </label>
            <input type='number' min={0} id='son' value={son} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="No. of Son"
              onChange={(e) => setSon(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="daughter">
              No. of Daughter
            </label>
            <input type='number' min={0} id='daughter' value={daughter} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="No. of Daughter"
              onChange={(e) => setDaughter(e.target.value)} />
          </div>
          <div className='md:flex md:items-center'>
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" >
              Calculate
            </button>
          </div>
        </form>

        <div className='card border border-gray-600 w-[384px] px-8 pt-6 pb-8 glassmorphism'>
          <h1 className="text-4xl text-white font-bold mb-4">Final Result</h1>
          <hr className='text-white' />
          <div className='mt-5 mb-5 flex flex-col gap-y-6'>
            <span className='text-gray-500 p-3 text-xl bg-amber-50'>Widow: {widows}</span>
            <span className='text-gray-500 p-3 text-xl bg-amber-50'>Son: {son}</span>
            <span className='text-gray-500 p-3 text-xl bg-amber-50'>Daughter: {daughter}</span>
          </div>
          <p className='text-white text-md'>Note: The above amount will be divided on a per-person basis.</p>
        </div>
      </div>
    </div>
  )
}

export default App
