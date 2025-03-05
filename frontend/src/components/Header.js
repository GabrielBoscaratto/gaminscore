import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const Header = ({ onSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);
  const [showMessagesDropdown, setShowMessagesDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const userDropdownRef = useRef(null);
  const notificationsDropdownRef = useRef(null);
  const messagesDropdownRef = useRef(null);

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const toggleNotificationsDropdown = () => {
    setShowNotificationsDropdown(!showNotificationsDropdown);
  };

  const toggleMessagesDropdown = () => {
    setShowMessagesDropdown(!showMessagesDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
      if (notificationsDropdownRef.current && !notificationsDropdownRef.current.contains(event.target)) {
        setShowNotificationsDropdown(false);
      }
      if (messagesDropdownRef.current && !messagesDropdownRef.current.contains(event.target)) {
        setShowMessagesDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getThemeButtonStyle = () => ({
    ...styles.themeButton,
    background: theme.primary,
    color: theme.name === 'dark' ? theme.text : '#fff'
  });

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if(onSearch) onSearch(query);
  };

  return (
    <header style={{ ...styles.header, backgroundColor: theme.primary }}>
      <Link to="/" style={styles.titleLink}>
        <h1 style={styles.title}>Gaminscore</h1>
      </Link>
      
      {/* Barra de Pesquisa */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Pesquisar posts..."
          value={searchQuery}
          onChange={handleSearch}
          style={{ 
            ...styles.searchInput,
            backgroundColor: theme.background,
            color: theme.text
          }}
        />
      </div>

      <div style={styles.iconsContainer}>
        <button 
          style={getThemeButtonStyle()}
          onClick={toggleTheme}
        >
          {theme.name.toUpperCase()}
        </button>
        <div style={styles.iconContainer} ref={notificationsDropdownRef}>
          <span 
            style={styles.icon}
            onClick={toggleNotificationsDropdown}
          >
            <i className="bi bi-bell"></i>
          </span>
          {showNotificationsDropdown && (
            <div style={styles.dropdown}>
              <div style={styles.dropdownItem}>
                Nenhuma notificação recebida
              </div>
            </div>
          )}
        </div>
        <div style={styles.iconContainer} ref={messagesDropdownRef}>
          <span 
            style={styles.icon}
            onClick={toggleMessagesDropdown}
          >
            <i className="bi bi-envelope"></i>
          </span>
          {showMessagesDropdown && (
            <div style={styles.dropdown}>
              <div style={styles.dropdownItem}>
                Nenhuma mensagem recebida
              </div>
            </div>
          )}
        </div>
        <div style={styles.userContainer} ref={userDropdownRef}>
          <img
            src="https://i.pinimg.com/736x/33/3b/9a/333b9acf068a50b16cf7925e6c7798c6.jpg"
            alt="User"
            style={styles.userIcon}
            onClick={toggleUserDropdown}
          />
          {showUserDropdown && (
            <div style={styles.dropdown}>
              <div 
                style={styles.dropdownItem} 
                onClick={() => navigate('/profile')}
              >
                Meu Perfil
              </div>
              <div 
                style={styles.dropdownItem} 
                onClick={() => alert('Configurações')}
              >
                Configurações
              </div>
              <div 
                style={styles.dropdownItem} 
                onClick={() => alert('Log Out')}
              >
                Log Out
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '15px 20px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  searchContainer: {
    flex: 1,
    maxWidth: '600px',
  },
  searchInput: {
    width: '100%',
    padding: '8px 15px',
    borderRadius: '20px',
    border: 'none',
    outline: 'none',
    fontSize: '14px'
  },
  titleLink: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  title: {
    margin: 0,
    fontSize: '24px'
  },
  iconsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  iconContainer: {
    position: 'relative'
  },
  icon: {
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'scale(1.1)'
    }
  },
  userContainer: {
    position: 'relative',
    marginLeft: '10px'
  },
  userIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer'
  },
  dropdown: {
    position: 'absolute',
    top: '50px',
    right: '0',
    backgroundColor: '#fff',
    color: '#14171a',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    borderRadius: '4px',
    overflow: 'hidden',
    zIndex: 1000
  },
  dropdownItem: {
    padding: '10px 15px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee'
  },
  themeButton: {
    padding: '8px 16px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s',
    ':hover': {
      transform: 'scale(1.05)'
    }
  }
};

export default Header;