import React, { useEffect, useState } from 'react';
import { apiCall } from './api';
import './App.css'

const App = () => {
  const [loadMessage, setLoadMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiCall();
      setLoadMessage(response.data);
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
