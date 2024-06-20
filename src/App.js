import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lng) => {
    setAnchorEl(null);
    if (lng) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <div>
      <Router>
        <div className="language-switcher">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="language"
            aria-controls="language-menu"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <LanguageIcon />
          </IconButton>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={() => handleClose()}
          >
            <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
            <MenuItem onClick={() => handleClose('ta')}>Tamil</MenuItem>
          </Menu>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
