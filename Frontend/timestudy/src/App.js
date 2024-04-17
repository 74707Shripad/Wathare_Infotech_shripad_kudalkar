import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>TimeStamp
      {data.map(entry => (
        <div key={entry.ts}>
          <div style={{ backgroundColor: entry.machine_status === 0 ? 'yellow' : (entry.machine_status === 1 ? 'green' : 'red') }}>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
