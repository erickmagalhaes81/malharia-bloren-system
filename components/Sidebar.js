import Link from 'next/link';

const Sidebar = () => {
  return (
    <div style={{
      width: '250px',
      height: '100vh',
      background: '#f2f2f2',
      padding: '20px',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
    }}>
      <h2>Menu</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link href="/dashboard">Início</Link></li>
        <li><Link href="/producao">Produção</Link></li>
        <li><Link href="/terceirizacao">Terceirização</Link></li>
        <li><Link href="/orcamentos">Orçamentos</Link></li>
        <li><Link href="/financeiro">Financeiro</Link></li>
        <li><Link href="/custos">Custos</Link></li>
        <li><Link href="/estoque">Estoque</Link></li>
        <li><Link href="/login">Sair</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;