import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader.js';

function HomePage() {
  const [videoUrl, setVideoUrl] = useState('');
  const [loader, SetLoader]=useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      SetLoader(true);
      const response = await axios.post('http://localhost:5000/analyze', { url: videoUrl });
      setData(response.data);
      // Navigate to /analysis page and pass the data via state
      SetLoader(false);
      navigate('/analysis', { state: { data: response.data } });
    } catch (error) {
      SetLoader(false);
      console.error('Error fetching data:', error);
    }
  };

  

  if(loader){
    return <Loader/>
  }

  return (
    <div className="home_cont">
      <div className="form_cont">
        <h3>YouTube Comment Analyzer</h3>
        <p className="caption">Enter a YouTube video URL to analyse its comment</p>
        <form className='form_main' onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter YouTube video URL"
            value={videoUrl}
            required
            onChange={(e) => setVideoUrl(e.target.value)}
          />
          <button type="submit">Analyze</button>
        </form>
      </div>
    </div>
  );
}
export default HomePage;