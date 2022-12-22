import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

function App() {


  return (
    <Router>
      <div className="App">
        <Box
          width="400px"
          sx={{
            width: { xl: '1488px' },
          }}
          m="auto"
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise" element={<ExerciseDetail />} />
          </Routes>
          <Footer />
        </Box>
      </div>
    </Router>
  );
}

export default App;
