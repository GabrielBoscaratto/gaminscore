import React, { useState } from 'react';

const forums = [
  { id: 1, name: 'GTA Series', description: 'Fórum para fãs de Grand Theft Auto' },
  { id: 2, name: 'The Witcher Universe', description: 'Discussões sobre The Witcher (Jogos, Livros, Série)' },
  { id: 3, name: 'Minecraft Builders', description: 'Compartilhe suas criações e dicas de Minecraft' },
  { id: 4, name: 'Call of Duty Zone', description: 'Comunidade para jogadores de Call of Duty' },
  { id: 5, name: 'Elden Ring Explorers', description: 'Explore e discuta o mundo de Elden Ring' }
];


const users = [
  { id: 1, name: 'Noob Master', username: '@NoobMaster69' },
  { id: 2, name: 'Caixista Gamer', username: '@Caixinha123' },
  { id: 3, name: 'Persona fan', username: '@Peesona4' },
  { id: 4, name: 'User Four', username: '@userfour' },
  { id: 5, name: 'User Five', username: '@userfive' }
];

const FollowButton = ({ userId }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setIsHovering(false);
  };

  return (
    <button
      style={{
        ...styles.followButton,
        ...(isFollowing ? styles.followingButton : {}),
      }}
      onClick={handleFollow}
      onMouseEnter={() => isFollowing && setIsHovering(true)}
      onMouseLeave={() => isFollowing && setIsHovering(false)}
    >
      {isFollowing
        ? (isHovering ? 'Deixar de seguir' : 'Seguindo')
        : 'Seguir'}
    </button>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ ...styles.sidebar, ...(isCollapsed ? styles.sidebarCollapsed : {}) }}>
      <div style={styles.sidebarHeader}>
        {!isCollapsed && <h2 style={styles.title}>Fóruns Sugeridos</h2>} {/* Changed title here */}
        <button style={styles.collapseButton} onClick={toggleCollapse}>
          {isCollapsed ? 'Abrir' : 'Fechar'}
        </button>
      </div>

      {!isCollapsed && (
        <>
          <ul style={styles.list}>
            {forums.map((forum) => (
              <li key={forum.id} style={styles.item}>
                <div style={styles.communityInfo}>
                  <span style={styles.communityName}>{forum.name}</span>
                  <button
                    style={styles.followButton}
                    // Changed community to forum in alert
                    onClick={() => alert(`Você seguiu o fórum ${forum.name}!`)}
                  >
                    Seguir
                  </button>
                </div>
                <p style={styles.description}>{forum.description}</p>
              </li>
            ))}
          </ul>
          <h3 style={styles.sidebarTitle}>Jogadores Populares</h3>
          <div style={styles.usersList}>
            {users.map(user => (
              <div key={user.id} style={styles.userCard}>
                <img
                  src={`https://i.pravatar.cc/40?img=${user.id}`}
                  alt={user.name}
                  style={styles.avatar}
                />
                <div style={styles.userInfo}>
                  <div style={styles.userName}>{user.name}</div>
                  <div style={styles.userUsername}>{user.username}</div>
                </div>
                <FollowButton userId={user.id} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  sidebar: {
    backgroundColor: '#fff',
    border: '1px solid #e1e8ed',
    borderRadius: '8px',
    padding: '15px',
    width: '300px',
    marginRight: '20px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    height: 'fit-content',
    transition: 'width 0.3s ease-in-out',
    overflow: 'hidden', /* Ensure content is hidden when collapsed */
  },
  sidebarCollapsed: {
    width: '50px', /* Adjust collapsed width as needed */
    padding: '10px',
    overflow: 'hidden',
  },
  sidebarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  title: {
    fontSize: '20px',
    marginBottom: '15px',
    color: '#14171a'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  item: {
    marginBottom: '15px'
  },
  communityInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  communityName: {
    fontWeight: 'bold',
    color: '#14171a'
  },
  followButton: {
    backgroundColor: '#1da1f2',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '5px 10px',
    cursor: 'pointer'
  },
  description: {
    fontSize: '14px',
    color: '#657786'
  },
  sidebarTitle: {
    margin: '0 0 15px 0',
    color: '#1da1f2'
  },
  usersList: {
    maxHeight: 'calc(100vh - 200px)',
    overflowY: 'auto'
  },
  userCard: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '8px',
    ':hover': {
      backgroundColor: '#f5f8fa'
    }
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px'
  },
  userInfo: {
    flex: 1
  },
  userName: {
    fontWeight: 'bold',
    fontSize: '14px'
  },
  userUsername: {
    color: '#657786',
    fontSize: '12px'
  },
  followingButton: {
    backgroundColor: '#e1e8ed',
    color: '#1da1f2',
    ':hover': {
      backgroundColor: '#ff4d4d',
      color: 'white'
    }
  },
  collapseButton: {
    backgroundColor: 'transparent',
    border: '1px solid #e1e8ed',
    borderRadius: '20px',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default Sidebar;