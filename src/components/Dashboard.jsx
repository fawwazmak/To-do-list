import React from 'react'

const dashboard = ({ onNext, userName }) => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div className=''>
        <button onClick={handleLogout} className='bg-white absolute top-2 right-4 w-fit px-4 py-2 rounded-sm text-[#27AE60] font-semibold animate-bounce mt-4'>Log Out</button>

        <div>
            <h1>Welcome {userName}</h1>
        </div>
    </div>
  )
}

export default dashboard
