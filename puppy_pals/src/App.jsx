import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  // console.log('puppyList: ', puppies);
  // console.log('Feature Puppy: ', featuredPup);
  return (
    <>
      <div>
        <h1 className="logo.react">Puppy Pals</h1>
        {
          puppies.map((puppy) => {
            return (
            <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
            );
          })
        }
        { featPupId && (
          <div className="detail">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
            </div>
        )}
      </div>
    </>
  );
}

export default App
