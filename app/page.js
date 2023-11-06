"use client"
import React, { useState } from 'react'

const page = () => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [MainTask, setMainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault();
    setMainTask([...MainTask,{Title,Desc}])
    // console.log(MainTask)
    setTitle("")
    setDesc("")
  }
  const deleteHandler=(i)=>{
    let copyTask=[...MainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }
  let renderTask=<h2>No task available</h2>
  if (MainTask.length>0) {
    renderTask = MainTask.map((t,i)=>{
      return <li key={i} className='flex justify-around items-center py-2'>
          <div className='py-2 w-2/3'>
          <h5 className='text-xl font-bold'>{t.Title}</h5>
          <p className=' text-md font-semibold'>{t.Desc}</p>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }} className='bg-red-400 rounded border-2 border-black px-4 py-2 font-bold'>Delete</button>
        </li>
        
      })
  }

  return (
    <>
      <h1 className='bg-black text-white text-2xl p-5 text-center font-bold'>My Todo List</h1>
      <form className='flex justify-center items-center' onSubmit={submitHandler}>
        <input type="text" className='text-xl border-zinc-800 border-2 mx-5 my-2 px-4 py-2' placeholder='Enter Title' value={Title} onChange={(e) => {
          setTitle(e.target.value)
        }} />
        <input type="text" className='text-xl border-zinc-800 border-2 mx-5 my-2 px-4 py-2' placeholder='Enter Description' value={Desc} onChange={(e) => {
          setDesc(e.target.value)
        }} />
        <button className='bg-black text-white px-6 py-3 rounded m-5'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-gray-300'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page