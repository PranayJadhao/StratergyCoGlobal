const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

//A simple Node server to serve the React app
app.use(express.static(path.join(__dirname, '../frontend/statergyCoGloble/build')));

// Proxy API requests to the movie DB API
app.get('/api/movies', async (req, res) => {
  try {
    const movieTitle = req.query.title;
    const apiKey = 'YOUR_MOVIE_DB_API_KEY'; 

    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}`);
    const data = response.data;

    res.json(data.results);
  } catch (error) {
    console.error('Error proxying API request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//Running the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
