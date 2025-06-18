import React, { useState, useEffect } from 'react';
const Profile = ({ onNext}) => {
    const [username, setUsername] = useState("");

    const sendName = (e) => {
        e.preventDefault();
        if(username.trim()) {
            onNext(username);
        }
    }

    useEffect(() => {
        const saved = localStorage.getItem("name");
        if (saved) setUsername(saved);
    }, []);

    const handleChange = (e) => {
        setUsername(e.target.value);
        localStorage.setItem("name", e.target.value);
    };

  return (
    <form className='md:w-4/5 md:m-0 m-4' onSubmit={sendName}>
        <p className='text-[#2C3E50] font-semibold'>Step 2 of 2</p>

        <h1 className='md:text-3xl sm:text-2xl xs:text-xl font-semibold text-[#2C3E50] my-4'>What is your name?</h1>
    
        <input type="text" placeholder='Enter your name' value={username} onChange={handleChange} className='block w-full border-2 border-black rounded-sm p-2 outline-none focus:border-b-2 text-white focus:border-x-0 focus:border-t-0 focus:rounded-none focus:border-[#2C3E50] ' required  />

        <button className='p-2 bg-[#2C3E50] w-full rounded-xl my-4 cursor-pointer text-white font-semibold'>Start</button>
    </form>
  )
}

export default Profile
