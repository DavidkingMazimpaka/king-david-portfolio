import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Routes from './Routes';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;