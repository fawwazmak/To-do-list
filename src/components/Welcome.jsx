import React from 'react'

const Welcome = () => {
  return (
    <div className='bg-[#27AE60] h-screen'>
      <p className='text-[#2C3E50]'>Step 1 of 3</p>

      <h1 className='md:text-4xl sm:text-2xl font-semibold text-[#2C3E50]'>Welcome to Focusist!</h1>

      <div className='border-2 border-gray-400 rounded-xl p-8'>
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

      <button>Let's go</button>
    </div>
  )
}

export default Welcome
