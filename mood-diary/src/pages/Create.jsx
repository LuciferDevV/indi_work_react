import { useState } from 'react';
import { createEntry } from '../api/diaryApi';
import { useNavigate } from 'react-router-dom';

/**
 * Страница создания новой записи дневника.
 *
 * Позволяет пользователю ввести заголовок, содержание и выбрать настроение.
 * При отправке формы данные сохраняются и происходит переход на главную страницу.
 *
 * @component
 * @returns {JSX.Element} Форма создания записи.
 */
function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!title || !content || !mood) {
      setError('Все поля обязательны');
      return;
    }

    await createEntry({
      title,
      content,
      mood,
      createdAt: new Date().toISOString()
    });

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Новая запись</h2>

      {error && <p className="error">{error}</p>}

      <input
        placeholder="Заголовок"
        value={title}
        required
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Содержание"
        value={content}
        required
        onChange={e => setContent(e.target.value)}
      />

      <select value={mood} onChange={e => setMood(e.target.value)}>
        <option value="">Выберите настроение</option>
        <option value="😊">😊 Хорошее</option>
        <option value="😐">😐 Нормальное</option>
        <option value="😞">😞 Плохое</option>
      </select>

      <button type="submit">Сохранить</button>
    </form>
  );
}

export default Create;
