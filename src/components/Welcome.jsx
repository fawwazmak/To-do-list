import React from 'react'

const Welcome = ({ onNext }) => {
  return (
    <div className='md:w-4/5 md:m-0 m-4'>
      <p className='text-[#2C3E50] font-semibold'>Step 1 of 2</p>

      <h1 className='md:text-4xl sm:text-2xl xs:text-xl font-semibold text-[#2C3E50]'>Welcome to Focusist!</h1>

      <div className='border-2 border-gray-400 rounded-xl p-4 mt-3'>
        <h4>Focusist helps you to ...</h4>

        <ul>
          <div>
            <p>Organize your tasks</p>
          </div>

          <div>
              <p>focus on what truly matters</p>
          </div>

          <div>
              <p>Achieve goals</p>
          </div>
        </ul>
      </div>

      <button onClick={onNext} className='p-2 bg-[#2C3E50] w-full rounded-xl my-4 cursor-pointer text-white font-semibold'>Let's go</button>
    </div>
  )
}

export default Welcome
