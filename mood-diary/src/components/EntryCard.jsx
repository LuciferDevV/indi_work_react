import { Link } from 'react-router-dom';

function EntryCard({ entry, full = false }) {
  return (
    // Оборачиваем карточку в ссылку, ведущую на страницу отдельной записи
    <Link to={`/entry/${entry.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <h3>{entry.title}</h3>

        {/* Если full = false, применяем класс для обрезки длинного текста (превью) */}
        <p className={full ? '' : 'entry-preview'}>{entry.content}</p>

        <p><strong>Настроение:</strong> {entry.mood}</p>
        <small>{new Date(entry.createdAt).toLocaleString()}</small>
      </div>
    </Link>
  );
}

export default EntryCard;
