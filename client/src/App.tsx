import React, { useEffect } from 'react';
import { apiCall } from './api';
import './App.css'

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      await apiCall();
    }
    
    fetchData();
  }, [])

  return (
    <>
      <section id="center">
        <div>
          <h1>Welcome to Arcane Cricket League</h1>
          <p>
            Where Cricket meets Magic!
          </p>
          <p>
            {loadMessage}
          </p>
        </div>
      </section>

    </>
  )
}

export default App
