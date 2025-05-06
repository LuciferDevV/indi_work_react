import { useState } from 'react';
import { createEntry } from '../api/diaryApi';
import { useNavigate } from 'react-router-dom';

function Create() {
  // Состояния для хранения введенных данных и ошибок
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Обработка отправки формы
  const handleSubmit = async e => {
    e.preventDefault();

    // Проверка на заполнение всех полей
    if (!title || !content || !mood) {
      setError('Все поля обязательны');
      return;
    }

    // Создание новой записи через API
    await createEntry({
      title,
      content,
      mood,
      createdAt: new Date().toISOString()
    });

    // Переход на главную страницу после успешного сохранения
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Новая запись</h2>

      {/* Вывод сообщения об ошибке при незаполненных полях */}
      {error && <p className="error">{error}</p>}

      <input
        placeholder="Заголовок"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Содержание"
        value={content}
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
