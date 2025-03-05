import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Header />
          <div style={styles.container}>
            <Sidebar />
            <main style={styles.main}>
              <Routes>
                <Route path="/" element={<Timeline />} />
                <Route path="/profile" element={<UserProfile />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '20px',
    backgroundColor: '#f5f8fa',
    minHeight: 'calc(100vh - 80px)' // Ajusta a altura considerando o cabeçalho
  },
  main: {
    flex: 1
  }
};

export default App;