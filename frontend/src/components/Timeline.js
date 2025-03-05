// src/components/Timeline.js
import React, { useState, useContext } from 'react';
import Post from './Post';
import { useTheme } from '../context/ThemeContext';


const Timeline = () => {
  const { theme } = useTheme();
  const [posts, setPosts] = useState([
    { id: 1, user: 'NoobMaster69', message: 'Platinado o Marvel Spider-Man! 🎮' },
    { id: 2, user: 'StreamerPro', message: 'Live começando em 5 minutos! 🔴' },
    {
      id: 3,
      user: 'NoobMaster69',
      message: 'NoobMaster69 ganhou uma medalha de 100 vitórias no Fortnite!',
      medalImage:  'https://cdn2.unrealengine.com/12br-delay-social-news-header-02-1920x1080-119208936.jpg'
    },
    {
      id: 4,
      user: 'IGM', // Parody of IGN
      message: 'Nintendo Switch 2 finalmente anunciado',
      videoUrl: 'https://www.youtube.com/watch?v=itpcsQQvgAQ&t=1s',
      videoTitle: 'Nintendo Switch 2: Trailer de Anúncio (Rumor)' // Optional video title
    }
  ]);
  const [newPost, setNewPost] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([{
        id: posts.length + 1,
        user: 'MeuUsuário',
        message: newPost
      }, ...posts]);
      setNewPost('');
    }
  };

  const filteredPosts = posts.filter(post =>
    post.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ ...styles.container, backgroundColor: theme.background }}>
      {/* Área de Criação de Post */}
      <form onSubmit={handleSubmit} style={styles.postForm}>
        <textarea
          placeholder="O que você está jogando hoje?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          style={{ ...styles.postInput, backgroundColor: theme.secondary, color: theme.text }}
        />
        <button
          type="submit"
          style={{ ...styles.postButton, backgroundColor: theme.primary }}
        >
          Postar
        </button>
      </form>

      {/* Lista de Posts */}
      <div style={styles.postsContainer}>
        {filteredPosts.map(post => (
          <Post
            key={post.id}
            user={post.user}
            message={post.message}
            medalImage={post.medalImage} // Pass medal image to Post component
            videoUrl={post.videoUrl}     // Pass video URL to Post component
            videoTitle={post.videoTitle} // Pass video title to Post component
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px'
  },
  searchContainer: {
    position: 'relative',
    marginBottom: '20px'
  },
  searchInput: {
    width: '100%',
    padding: '12px 40px 12px 20px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '16px'
  },
  searchIcon: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  postForm: {
    marginBottom: '30px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '15px'
  },
  postInput: {
    width: '100%',
    height: '80px',
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    resize: 'vertical',
    marginBottom: '10px',
    fontSize: '16px'
  },
  postButton: {
    padding: '10px 25px',
    borderRadius: '20px',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    float: 'right',
    fontWeight: 'bold',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'scale(1.05)'
    }
  },
  postsContainer: {
    marginTop: '20px'
  }
};

export default Timeline;