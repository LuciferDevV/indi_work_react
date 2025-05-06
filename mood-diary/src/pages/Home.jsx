import { useEffect, useState } from 'react';
import { getEntries } from '../api/diaryApi';
import EntryCard from '../components/EntryCard';
import FilterBar from '../components/FilterBar';
import MonthlyStats from '../components/MonthlyStats';
import SkeletonPage from '../components/SkeletonPage'; // Скелетон для загрузки страницы

function Home() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterMood, setFilterMood] = useState('');
  const [filterDate, setFilterDate] = useState('');

  // Загрузка записей при монтировании
  useEffect(() => {
    getEntries().then(res => {
      setEntries(res.data.reverse()); // Последние записи сверху
      setLoading(false);
    });
  }, []);

  // Фильтрация по дате
  const filterByDate = (entryDate) => {
    const entryTime = new Date(entryDate).getTime();
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const oneDay = 86400000;

    switch (filterDate) {
      case 'today':
        return entryTime >= todayStart;
      case 'yesterday':
        return entryTime >= todayStart - oneDay && entryTime < todayStart;
      case '7days':
        return entryTime >= now.getTime() - 7 * oneDay;
      case 'month':
        const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate()).getTime();
        return entryTime >= monthAgo;
      default:
        return true; // Без фильтра по дате
    }
  };

  // Применение всех фильтров: текст, настроение, дата
  const filtered = entries.filter(entry =>
    entry.title.toLowerCase().includes(search.toLowerCase()) &&
    (filterMood ? entry.mood === filterMood : true) &&
    filterByDate(entry.createdAt)
  );

  return (
    <div>
      <FilterBar
        search={search}
        setSearch={setSearch}
        filterMood={filterMood}
        setFilterMood={setFilterMood}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
      />

      {loading ? (
        <SkeletonPage /> // Показать скелетон во время загрузки
      ) : (
        <>
          <MonthlyStats entries={entries} /> {/* Статистика за месяц */}
          {filtered.map(entry => (
            <EntryCard key={entry.id} entry={entry} full={false} /> // Превью карточек
          ))}
        </>
      )}
    </div>
  );
}

export default Home;
