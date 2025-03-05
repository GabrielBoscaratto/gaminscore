// src/components/Post.js
import React, { useState } from 'react';
import { Heart, ChatDots } from 'react-bootstrap-icons';

const Post = ({ user, message, medalImage, videoUrl, videoTitle }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div style={styles.post}>
      <div style={styles.userInfo}>
        <img
          src="https://picsum.photos/40"
          alt="Avatar do usuário"
          style={styles.avatar}
        />
        <span style={styles.userName}>{user}</span>
      </div>
      {medalImage && ( 
        <div style={styles.medalContainer}>
          <img src={medalImage} alt="Medalha" style={styles.medal} />
          <p style={styles.medalMessage}>{message}</p> {/* Display message alongside medal */}
        </div>
      )}
      {!medalImage && videoUrl && ( // Conditionally render video link
        <div style={styles.videoContainer}>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" style={styles.videoLink}>
            {videoTitle || message} {/* Use videoTitle if available, else use message as title */}
          </a>
        </div>
      )}
      {!medalImage && !videoUrl && (<p style={styles.message}>{message}</p>)} {/* Default message rendering */}

      <div style={styles.actions}>
        <button
          style={{ ...styles.actionButton, ...(liked ? styles.likedButton : {}) }}
          onClick={handleLike}
        >
          <Heart size={18} color={liked ? 'red' : 'black'} />
          <span style={{ marginLeft: '5px' }}>{likes > 0 && likes}</span>
        </button>
        <button style={styles.actionButton}>
          <ChatDots size={18} />
          <span style={{ marginLeft: '5px' }}>Comentar</span>
        </button>
      </div>
    </div>
  );
};

const styles = {
  post: {
    border: '1px solid #e1e8ed',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: '0 auto 15px'
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  },
  avatar: {
    borderRadius: '50%',
    marginRight: '10px',
    width: '40px',
    height: '40px'
  },
  userName: {
    fontWeight: 'bold',
    color: '#14171a'
  },
  message: {
    fontSize: '16px',
    color: '#657786'
  },
  medalContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px' // Add some margin below medal section
  },
  medal: {
    width: '50px',
    height: '50px',
    borderRadius: '8px'
  },
  medalMessage: {
    fontSize: '16px',
    color: '#657786',
    margin: 0 // Remove default paragraph margin
  },
  videoContainer: {
    marginBottom: '10px' // Add some margin below video link
  },
  videoLink: {
    display: 'block', // Make link take full width
    fontSize: '16px',
    color: '#007bff', // Bootstrap primary link color
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  actions: {
    display: 'flex',
    gap: '20px',
    marginTop: '10px'
  },
  actionButton: {
    background: 'none',
    border: 'none',
    color: '#657786',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    borderRadius: '20px',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#f5f8fa'
    }
  },
  likedButton: {
    color: 'red',
    ':hover': {
      backgroundColor: '#ffe6e6' // Light red on hover when liked
    }
  }
};

export default Post;