import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';

const Home = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomDogImage = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        setImageUrl(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomDogImage();
  }, []);

  return (
    <div>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ maxWidth: 400, margin: 'auto' }}>
          <img src={imageUrl} alt="Random Dog" style={{ width: '100%', borderRadius: 8 }} />
        </Box>
      )}
    </div>
  );
};

export default Home;
