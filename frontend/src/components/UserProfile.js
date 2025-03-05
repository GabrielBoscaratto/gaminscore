import React, { useState } from 'react';
import medalImage from '../assets/P4Atr-IAmThou-2.png';

// Componente Medalha
const Medalha = ({ titulo, descricao, imagem }) => (
  <div style={styles.medalhaContainer}>
    <img src={imagem} alt={titulo} style={styles.medalhaImagem} />
    <div>
      <h4 style={styles.medalhaTitulo}>{titulo}</h4>
      <p style={styles.medalhaDescricao}>{descricao}</p>
    </div>
  </div>
);

// Componentes de Ícones
const SteamIcon = () => (
  <svg style={styles.icon} viewBox="0 0 24 24">
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.566 1.912-.566.805 0 1.536.26 2.122.776l3.581-2.465c-.051-.327-.09-.66-.09-1.001 0-2.19 1.552-4.152 3.686-4.772l.001-3.202A11.979 11.979 0 0 0 11.979 0zm7.737 7.489c.234 0 .465.018.694.054l-2.467 3.501c-.372-.11-.775-.17-1.193-.17-1.625 0-3.036.895-3.788 2.208l-3.417 2.344c-.277-.1-.572-.155-.879-.155-1.495 0-2.717 1.117-2.954 2.558L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12-.341 0-.676.015-1.008.042l4.335 6.612c.26-.038.528-.065.802-.065 2.18 0 4.086 1.134 5.198 2.834l3.414-2.364c-.668-1.177-1.953-2.01-3.447-2.01zM7.358 18.208c0 .665.542 1.206 1.207 1.206.665 0 1.206-.541 1.206-1.206 0-.665-.541-1.206-1.206-1.206-.665 0-1.207.541-1.207 1.206z"/>
  </svg>
);

const PlayStationIcon = () => (
  <svg style={styles.icon} viewBox="0 0 24 24">
    <path d="M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.181.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.153 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502h-.002zm4.656 16.242l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.042l-4.205 1.125v-2.083l.24-.08s1.201-.42 2.913-.615c1.696-.18 3.785.029 5.437.661.688.259.944.571.863 1.093-.079.532-.548.794-1.274.556l-8.174-2.368v2.759zm-11.403-.18l2.772 1.115c.856.342 1.542-.055 1.726-.812.066-.255.104-.517.104-.781V7.176c-.008-.814-.088-1.648-.733-1.941-.71-.323-1.675.128-2.176.526L1.6 8.572v7.925c0 1.5.666 2.164 1.638 2.164.5 0 .998-.13 1.406-.381zm5.591-4.806c-.075-.13-.008-.154.058-.02.068.135.143.273.206.408.055.124.027.148-.076.028-.222-.28-.201-.306-.188-.416z"/>
  </svg>
);

const XboxIcon = () => (
  <svg style={styles.icon} viewBox="0 0 24 24">
    <path d="M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.902-2.967 1.877-1.912-4.316-.228-7.902-.228-3.582 0-9.778 1.645-7.898.228zm16.209-4.853a15.16 15.16 0 0 0 1.129-6.18c0-3.207-1.161-6.148-3.088-8.428C16.944 1.593 14.471 0 12 0c-2.472 0-4.945 1.593-6.353 3.572C3.72 5.852 2.56 8.793 2.56 12c0 2.189.425 4.244 1.127 6.18C6.666 16.767 11 17.01 12 17.01c1.025 0 5.334-.246 8.311-.83zm-8.321-4.617c-1.089 0-1.975-1.086-1.975-2.419 0-1.332.886-2.419 1.975-2.419 1.09 0 1.976 1.087 1.976 2.419 0 1.333-.886 2.419-1.976 2.419zm5.996-.605c-.029.398-.327.694-.711.694-.415 0-.741-.33-.741-.745v-.248c0-2.086-1.542-3.729-3.526-3.729-1.91 0-3.521 1.576-3.521 3.729v.248c0 .415-.326.745-.742.745-.384 0-.682-.296-.711-.694-.034-.454.118-.915.412-1.299.754-.98 1.971-1.528 3.41-1.647v-.037c0-.355.295-.644.658-.644.363 0 .658.289.658.644v.037c1.44.119 2.656.667 3.411 1.647.294.384.446.845.412 1.299z"/>
  </svg>
);

const SwitchIcon = () => (
  <svg style={styles.icon} viewBox="0 0 24 24">
    <path d="M14.176 24h3.674c3.376 0 6.15-2.774 6.15-6.15V6.15C24 2.775 21.226 0 17.85 0H14.1c-.074 0-.15.074-.15.15v23.7c0 .076.076.15.15.15h.076zm-10.351 0h3.674c.075 0 .15-.074.15-.15V.15c0-.076-.075-.15-.15-.15H3.825C.45 0 0 2.775 0 6.15v11.7C0 21.226 2.775 24 6.15 24zm12.122-.75c2.548 0 4.65-2.102 4.65-4.65V6.15c0-2.548-2.102-4.65-4.65-4.65h-3.375v19.05h3.375zM6.15 23.25c-2.548 0-4.65-2.102-4.65-4.65V6.15c0-2.548 2.102-4.65 4.65-4.65h3.375v19.05H6.15z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg style={styles.icon} viewBox="0 0 24 24">
    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
  </svg>
);

const UserProfile = () => {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: 'Acabei de completar Persona 5 Royal! Que jogo incrível!',
      date: '2025-03-01',
      medal: medalImage
    },
    {
      id: 2,
      content: 'Alguém quer jogar co-op em Monster Hunter World?',
      date: '2025-02-28',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([{
        id: posts.length + 1,
        content: newPost,
        date: new Date().toISOString().split('T')[0]
      }, ...posts]);
      setNewPost('');
    }
  };

  const user = {
    name: 'Nome do Usuário',
    bio: 'Entusiasta de jogos, amante de aventuras digitais e explorador de mundos virtuais.',
    coverImage: 'https://conteudo.imguol.com.br/2013/05/02/o-uol-tecnologia-selecionou-algumas-capas-para-facebook-com-imagens-de-jogos-para-enfeitar-seu-perfil-na-foto-acima-o-game-pacman-para-colocar-a-da-imagem-acima-no-facebook-clique-no-botao-mais-1367517598415_615x300.png',
    avatar: 'https://i.pinimg.com/736x/33/3b/9a/333b9acf068a50b16cf7925e6c7798c6.jpg',
    platforms: ['PC', 'Xbox', 'PlayStation'],
    favoriteGames: ['Persona', 'Sonic the Hedgehog', 'Shin Megami Tensei'],
    medals: [
      {
        titulo: 'Mestre da Franquia Persona',
        descricao: 'Completou todos os jogos da franquia Persona.',
        imagem: medalImage,
      },
    ],
    followers: 1200,
    following: 300,
    recentGames: ['The Legend of Zelda: Breath of the Wild', 'Final Fantasy VII Remake', 'Cyberpunk 2077'],
    socialIds: {
      playstation: 'PSN_ID_123',
      xbox: 'GamerTag_456',
      switch: 'SW-7890-1234-5678',
      discord: 'User#1234',
    },
  };

  return (
    <div style={styles.profileContainer}>
      <div style={styles.coverContainer}>
        <img src={user.coverImage} alt="Capa do Usuário" style={styles.coverImage} />
        <img src={user.avatar} alt="Avatar do Usuário" style={styles.avatar} />
      </div>

      <div style={styles.profileHeader}>
        <h2 style={styles.userName}>{user.name}</h2>
        <p style={styles.bio}>{user.bio}</p>

        <div style={styles.statsContainer}>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>{user.followers}</div>
            <div style={styles.statLabel}>Seguidores</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>{user.following}</div>
            <div style={styles.statLabel}>Seguindo</div>
          </div>
        </div>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.leftColumn}>
          <div style={styles.postBox}>
            <form onSubmit={handleSubmit}>
              <textarea
                style={styles.postInput}
                placeholder="O que você está jogando hoje?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <button style={styles.postButton} type="submit">Postar</button>
            </form>
          </div>

          <div style={styles.postsContainer}>
            {posts.map((post) => (
              <div key={post.id} style={styles.postCard}>
                {post.medal && (
                  <div style={styles.medalNotification}>
                    <img
                      src={post.medal}
                      alt="Medalha"
                      style={styles.medalImageSmall}
                    />
                    <span>Conquista desbloqueada!</span>
                  </div>
                )}
                <div style={styles.postHeader}>
                  <img src={user.avatar} alt="Avatar" style={styles.postAvatar} />
                  <div style={styles.userInfo}>
                    <span style={styles.postUsername}>{user.name}</span>
                    <span style={styles.postHandle}>@gaminscore_user</span>
                    <span style={styles.postDate}>· {post.date}</span>
                  </div>
                </div>
                <p style={styles.postContent}>{post.content}</p>
                <div style={styles.postActions}>
                  <button style={styles.actionButton}>💬 12</button>
                  <button style={styles.actionButton}>🔄 45</button>
                  <button style={styles.actionButton}>❤️ 230</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.rightColumn}>
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Plataformas</h3>
            <div style={styles.platformsContainer}>
              {user.platforms.map((platform, index) => (
                <div key={index} style={styles.platformItem}>
                  {platform === 'PC' && <SteamIcon />}
                  {platform === 'PlayStation' && <PlayStationIcon />}
                  {platform === 'Xbox' && <XboxIcon />}
                  <span>{platform}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Jogos Favoritos</h3>
            <ul style={styles.list}>
              {user.favoriteGames.map((game, index) => (
                <li key={index} style={styles.listItem}>{game}</li>
              ))}
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Jogos Recentes</h3>
            <ul style={styles.list}>
              {user.recentGames.map((game, index) => (
                <li key={index} style={styles.listItem}>{game}</li>
              ))}
            </ul>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Medalhas</h3>
            <div style={styles.medalhasContainer}>
              {user.medals.map((medal, index) => (
                <Medalha
                  key={index}
                  titulo={medal.titulo}
                  descricao={medal.descricao}
                  imagem={medal.imagem}
                />
              ))}
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>IDs Sociais</h3>
            <div style={styles.socialContainer}>
              <div style={styles.socialItem}>
                <PlayStationIcon />
                <span>{user.socialIds.playstation}</span>
              </div>
              <div style={styles.socialItem}>
                <XboxIcon />
                <span>{user.socialIds.xbox}</span>
              </div>
              <div style={styles.socialItem}>
                <SwitchIcon />
                <span>{user.socialIds.switch}</span>
              </div>
              <div style={styles.socialItem}>
                <DiscordIcon />
                <span>{user.socialIds.discord}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  profileContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f8fa',
  },
  coverContainer: {
    position: 'relative',
    borderRadius: '15px',
    overflow: 'hidden',
    height: '200px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    marginBottom: '70px'
  },
  coverImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: '4px solid white',
    position: 'absolute',
    bottom: '-px', // Alterado de -60px para -30px
    left: '50%',
    transform: 'translateX(-50%)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
    objectFit: 'cover',
    zIndex: 1
  },
  profileHeader: {
    textAlign: 'center',
    marginTop: '80px',
    marginBottom: '40px'
  },
  userName: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '0 0 10px 0'
  },
  bio: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.5',
    margin: '0 auto',
    maxWidth: '600px'
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginTop: '20px'
  },
  statItem: {
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1da1f2'
  },
  statLabel: {
    fontSize: '14px',
    color: '#657786'
  },
  mainContent: {
    display: 'flex',
    gap: '30px',
    marginTop: '30px'
  },
  leftColumn: {
    flex: 2,
    minWidth: '600px'
  },
  rightColumn: {
    flex: 1,
    minWidth: '300px'
  },
  postBox: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  postInput: {
    width: '100%',
    height: '80px',
    padding: '15px',
    border: '1px solid #e1e8ed',
    borderRadius: '8px',
    fontSize: '16px',
    resize: 'vertical',
    marginBottom: '10px'
  },
  postButton: {
    backgroundColor: '#1da1f2',
    color: 'white',
    border: 'none',
    padding: '10px 25px',
    borderRadius: '20px',
    cursor: 'pointer',
    float: 'right',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#1991db'
    }
  },
  postsContainer: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  postCard: {
    borderBottom: '1px solid #e1e8ed',
    padding: '15px 0',
    ':last-child': {
      borderBottom: 'none'
    }
  },
  medalNotification: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#e3f2fd',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '15px'
  },
  medalImageSmall: {
    width: '30px',
    height: '30px'
  },
  postHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  },
  postAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px'
  },
  userInfo: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px'
  },
  postUsername: {
    fontWeight: 'bold',
    fontSize: '15px'
  },
  postHandle: {
    color: '#657786',
    fontSize: '14px'
  },
  postDate: {
    color: '#657786',
    fontSize: '14px'
  },
  postContent: {
    fontSize: '15px',
    lineHeight: '1.5',
    margin: '0 0 10px 50px'
  },
  postActions: {
    display: 'flex',
    gap: '80px',
    marginLeft: '50px'
  },
  actionButton: {
    color: '#657786',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    transition: 'color 0.2s',
    ':hover': {
      color: '#1da1f2'
    }
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '25px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: '0 0 15px 0'
  },
  platformsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  platformItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    fontSize: '14px'
  },
  icon: {
    width: '24px',
    height: '24px',
    fill: '#1da1f2',
    flexShrink: 0
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  socialItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    padding: '12px',
    margin: '8px 0',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#e9ecef'
    }
  },
  medalhasContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  medalhaContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '10px',
    gap: '15px'
  },
  medalhaImagem: {
    width: '50px',
    height: '50px',
    borderRadius: '8px',
    objectFit: 'cover'
  },
  medalhaTitulo: {
    margin: '0 0 5px 0',
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a1a1a'
  },
  medalhaDescricao: {
    margin: 0,
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.4'
  }
};

export default UserProfile;