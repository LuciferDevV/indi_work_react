import { Link } from 'react-router-dom';

/**
 * Компонент отображения карточки записи.
 *
 * @component
 * @param {Object} props - Свойства компонента.
 * @param {Object} props.entry - Объект записи.
 * @param {string} props.entry.id - Уникальный идентификатор записи.
 * @param {string} props.entry.title - Заголовок записи.
 * @param {string} props.entry.content - Содержимое записи.
 * @param {string} props.entry.mood - Настроение, связанное с записью.
 * @param {string|Date} props.entry.createdAt - Дата и время создания записи.
 * @param {boolean} [props.full=false] - Показывать ли полное содержимое записи.
 * @returns {JSX.Element} Карточка записи, обёрнутая в ссылку.
 */
function EntryCard({ entry, full = false }) {
  return (
    <Link to={`/entry/${entry.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <h3>{entry.title}</h3>
        <p className={full ? '' : 'entry-preview'}>{entry.content}</p>
        <p><strong>Настроение:</strong> {entry.mood}</p>
        <small>{new Date(entry.createdAt).toLocaleString()}</small>
      </div>
    </Link>
  );
}

export default EntryCard;
