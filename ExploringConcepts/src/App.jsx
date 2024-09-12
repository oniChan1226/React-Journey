
import { useState } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState("yellow");
  const [liked, setLiked] = useState(false);
  const [username, setUsername] = useState("Fahad");
  const [userAge, setUserAge] = useState(21);

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleCheckBox = () => {
    setLiked((prevLiked) => !prevLiked);
  }
  // updater function
  const incrementAgeByFive = () => {
    for (let i = 0; i < 5; i++) {
      setUserAge(prevAge => prevAge + 1);
    }
    
  }

  return (
    <>
      <input type='text' value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('yellow')}>
        Reset
      </button>
      <br />

      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={handleCheckBox}
        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
      <br />

      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={() => setUserAge(userAge + 1)}>
        Increment age
      </button>
      <button onClick={incrementAgeByFive}>
        Increment age by 5
      </button>
      <p>Hello, {username}. You are {userAge}.</p>
    </>
  )
}

export default App
