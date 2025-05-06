function FilterBar({ search, setSearch, filterMood, setFilterMood, filterDate, setFilterDate }) {
  return (
    <div className="filter-bar">
      {/* Поле ввода для поиска по заголовку */}
      <input
        placeholder="Поиск по заголовку..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Фильтр по настроению */}
      <select value={filterMood} onChange={e => setFilterMood(e.target.value)}>
        <option value="">Все настроения</option>
        <option value="😊">😊 Хорошее</option>
        <option value="😐">😐 Нормальное</option>
        <option value="😞">😞 Плохое</option>
      </select>

      {/* Фильтр по дате */}
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
