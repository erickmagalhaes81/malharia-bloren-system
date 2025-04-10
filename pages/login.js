import { useState } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.push('/dashboard');
    } catch (error) {
      alert('Erro ao fazer login.');
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login - Malharia Bloren</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
