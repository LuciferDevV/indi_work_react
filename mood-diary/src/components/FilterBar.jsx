/**
 * Компонент панели фильтрации записей.
 *
 * @component
 * @param {Object} props - Свойства компонента.
 * @param {string} props.search - Текущее значение строки поиска.
 * @param {Function} props.setSearch - Функция для обновления строки поиска.
 * @param {string} props.filterMood - Текущее значение фильтра по настроению.
 * @param {Function} props.setFilterMood - Функция для обновления фильтра по настроению.
 * @param {string} props.filterDate - Текущее значение фильтра по дате.
 * @param {Function} props.setFilterDate - Функция для обновления фильтра по дате.
 * @returns {JSX.Element} Панель с полем поиска и выпадающими списками для фильтрации.
 */
function FilterBar({ search, setSearch, filterMood, setFilterMood, filterDate, setFilterDate }) {
  return (
    <div className="filter-bar">
      <input
        placeholder="Поиск по заголовку..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select value={filterMood} onChange={e => setFilterMood(e.target.value)}>
        <option value="">Все настроения</option>
        <option value="😊">😊 Хорошее</option>
        <option value="😐">😐 Нормальное</option>
        <option value="😞">😞 Плохое</option>
      </select>

      <select value={filterDate} onChange={e => setFilterDate(e.target.value)}>
        <option value="">Все даты</option>
        <option value="today">Сегодня</option>
        <option value="yesterday">Вчера</option>
        <option value="7days">Последние 7 дней</option>
        <option value="month">Последний месяц</option>
      </select>
    </div>
  );
}

export default FilterBar;
