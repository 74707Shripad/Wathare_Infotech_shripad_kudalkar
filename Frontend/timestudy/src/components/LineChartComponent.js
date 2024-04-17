import React, { useEffect, useState } from 'react';
import SimpleLineChart from 'react-simple-line-chart';

const LineChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Simple Line Chart</h2>
      {data.length > 0 ? (
        <SimpleLineChart
          width={800}
          height={400}
          data={data.map(item => ({ x: new Date(item.ts), y: item.vibration }))}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LineChartComponent;
