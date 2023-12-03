import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebase/firebaseUtils'; // Verifica que la ruta sea correcta

export const Login = () => {
  let navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/pokedex'); // Navega a la Pokedex después de un inicio de sesión exitoso
    } catch (error) {
      console.error('Error al iniciar sesión: ', error);
    }
  };

  // Estilos definidos dentro del componente
  const styles = {
    container: {
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      padding: '2rem',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '2rem auto',
    },
    title: {
      marginBottom: '1rem',
      fontSize: '2rem',
    },
    description: {
      marginBottom: '2rem',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      backgroundColor: '#646cff',
      color: 'white',
      padding: '0.6em 1.2em',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#535bf2',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenido a la Pokedex</h1>
      <p style={styles.description}>
        La Pokedex es una enciclopedia virtual que contiene información detallada sobre las diferentes especies de Pokémon. Aquí puedes explorar, descubrir y aprender más sobre cada Pokémon.
      </p>
      <button 
        style={styles.button}
        onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        onClick={handleGoogleSignIn}
      >
        Inicia sesión con Google
      </button>
    </div>
  );
};

export default Login;
