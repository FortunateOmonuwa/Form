import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const programmingLanguages = [
  'JavaScript',
  'Python',
  'Java',
  'C#',
  'C++',
  'Ruby',
  'Go',
  'Swift',
  'Kotlin',
  'PHP',
  'TypeScript',
  'Rust',
  'Perl',
];

function App() {
  const [input, setInput] = useState({
    firstname: "",
    lastname:"",
    email:"",
    gender: "",
    age:"",
    selectedLanguages:[]
  })

  const ageOptions = Array.from({length:83}, (_, index) => 18 + index);

  const handleLanguageChange = (e) => {
    const {name, checked} = e.target;

    setInput((prevData) =>{
      return{
        ...prevData,
      selectedLanguages: checked ? [...prevData.selectedLanguages, name] 
      : prevData.selectedLanguages.filter((lang) => lang !== name)
      };
      
  })
  }

  const submitHandler = (e)=>{
    e.preventDefault()
  }

  const SetInput = (e)=>{
    setInput(prevData => {
      return{
        ...prevData,
        [e.target.name] : e.target.value
      }
    })
      
  }

  return (
    <>
      <form className='form' action="">

       
        <input 
        value={input.firstname}
        name='firstname'
        type="text" 
        onChange={SetInput}
        placeholder='first name'/>

        <input 
        value={input.lastname}
        type="text" 
        name="lastname" 
        placeholder='last name'
        onChange={SetInput}
        id="" />

        <input
        value={input.email}
        type="email" 
        name='email'
        onChange={SetInput}
        placeholder='email'/>

        
        <select value={input.gender} 
         name="gender" 
         onChange={SetInput}
         id="">
        <option value="" disabled>...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        </select>

        <select value={input.age} 
        onChange={SetInput}
        name="age" id="">
          {ageOptions.map((age) =>(
            
            <option key={age} value={age}>{age}</option>
          ))}
        </select>

        
        <h3>Programming Languages</h3>
        {programmingLanguages.map((lang) => (
            <label key={lang}>
              <input
                type="checkbox"
                name={lang}
                id={lang}
                checked={input.selectedLanguages.includes(lang)} // this checks if the checkbox associated with each language mapped in is checked.....
                onChange={handleLanguageChange}
              />
              {lang}
            </label>
        ))}    

        <button onSubmit={submitHandler}>submit</button>
      </form>
    </>
  )
}

export default App
