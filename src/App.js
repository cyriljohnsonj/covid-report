import React from 'react';
import './App.css';
import {
  Card,
  Select,
  MenuItem,
  FormControl
} from '@material-ui/core';

function App() {
  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 REPORT</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
            >
              <MenuItem>Hello</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <Card className="app__left">
      </Card>
    </div>
  );
}

export default App;
