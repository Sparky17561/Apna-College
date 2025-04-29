import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <LikeButton/>
   </div>
  );
}

export default App
