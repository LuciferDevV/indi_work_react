import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import EntryPage from './pages/EntryPage';

function App() {
  return (
    <>
      <header>
        <h1>Дневник настроения</h1>
        <nav>
          <Link to="/">Главная</Link> | <Link to="/create">Добавить запись</Link>
        </nav>
      </header>

      <div className="container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/entry/:id" element={<EntryPage />} />
          </Routes>
        </main>
      </div>

      <footer>
        <p>© 2025 Дневник настроения. Все права защищены.</p>
      </footer>
    </>
  );
}



export default App;
