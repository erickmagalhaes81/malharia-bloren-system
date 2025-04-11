import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ padding: '20px', width: '100%' }}>
        <h1>Painel Administrativo</h1>
        <p>Bem-vindo ao sistema da Malharia Bloren.</p>
      </main>
    </div>
  );
}