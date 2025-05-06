import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEntryById, updateEntry, deleteEntry } from "../api/diaryApi";
import SkeletonCard from '../components/SkeletonCard';

const moodEmoji = {
  "Хорошее": "😊",
  "Нормальное": "😐",
  "Плохое": "😞",
};

function EntryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entry, setEntry] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEntry, setEditedEntry] = useState({ title: "", content: "", mood: "" });

  useEffect(() => {
    getEntryById(id).then((res) => {
      setEntry(res.data);
      setEditedEntry({
        title: res.data.title,
        content: res.data.content,
        mood: res.data.mood,
      });
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEntry((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateEntry(id, editedEntry).then((res) => {
      setEntry(res.data);
      setIsEditing(false);
    });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Вы уверены, что хотите удалить эту запись?");
    if (confirmDelete) {
      deleteEntry(id).then(() => {
        navigate('/');  // Перенаправляем на главную страницу после удаления
      });
    }
  };

  if (!entry) return <SkeletonCard />;

  return (
    <div className="card">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedEntry.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            value={editedEntry.content}
            rows={6}
            onChange={handleChange}
          />
          <select name="mood" value={editedEntry.mood} onChange={handleChange}>
            <option value="Хорошее">😊 Хорошее</option>
            <option value="Нормальное">😐 Нормальное</option>
            <option value="Плохое">😞 Плохое</option>
          </select>
          <button className="btn edit-btn" onClick={handleSave}>Сохранить</button>
        </>
      ) : (
        <>
          <h2>{entry.title}</h2>
          <p>{entry.content}</p>
          <p>
            <strong>Настроение:</strong> {entry.mood} {moodEmoji[entry.mood]}
          </p>
          <small>{new Date(entry.createdAt).toLocaleString()}</small>
          <br />
          <button className="btn edit-btn" onClick={() => setIsEditing(true)}>Редактировать</button>
          <button className="btn delete-btn" onClick={handleDelete}>Удалить</button>
        </>
      )}
    </div>
  );
}

export default EntryPage;
