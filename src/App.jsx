import React, { useState } from 'react';

export default function App() {
  const [title , setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div className=' '>
       <input type="
       text" 
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
          }
           placeholder='Enter your description' 

       
       />

        <input type="
    text"
    className='w-full h-5 bg-blue-300 '
     value={ description}
     onChange={(e) =>
      setDescription(e.target.value)
     }
     placeholder='Enter your description'
    />
    </div>
  );
}
