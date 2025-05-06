function MonthlyStats({ entries }) {
  const now = new Date();

  // Фильтрация записей, созданных в текущем месяце
  const thisMonthEntries = entries.filter(entry => {
    const date = new Date(entry.createdAt);
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  });

  // Подсчет количества каждого настроения
  const moodCount = { '😊': 0, '😐': 0, '😞': 0 };
  thisMonthEntries.forEach(entry => {
    if (moodCount[entry.mood] !== undefined) {
      moodCount[entry.mood]++;
    }
  });

  const total = thisMonthEntries.length;
  const getPercentage = count => total ? Math.round((count / total) * 100) : 0;

  // Процентное распределение настроений
  const percentages = {
    '😊': getPercentage(moodCount['😊']),
    '😐': getPercentage(moodCount['😐']),
    '😞': getPercentage(moodCount['😞']),
  };

  // Определяем преобладающее настроение
  const values = Object.values(percentages);
  const max = Math.max(...values);
  const maxMoods = Object.entries(percentages).filter(([_, value]) => value === max).map(([m]) => m);

  let summary = '';

  // Формирование текстового описания по статистике
  if (total === 0) {
    summary = 'В этом месяце еще нет записей.';
  } else if (maxMoods.length === 3) {
    summary = 'За этот месяц у вас преобладали какие-то непонятки в настроении.';
  } else if (maxMoods.length === 2) {
    const [a, b] = maxMoods.sort();

    if (a === '😊' && b === '😐') {
      summary = 'За этот месяц у вас настроение было лучше чем обычно.';
    } else if (a === '😐' && b === '😞') {
      summary = 'За этот месяц у вас все как обычно.';
    } else if (a === '😊' && b === '😞') {
      summary = 'Походу у вас биполярка.';
    } else {
      summary = 'Настроение сложно определить.';
    }
  } else if (maxMoods.length === 1) {
    const mood = maxMoods[0];
    if (mood === '😊') summary = 'За этот месяц у вас преобладало хорошее настроение.';
    else if (mood === '😐') summary = 'За этот месяц у вас преобладало нормальное настроение.';
    else if (mood === '😞') summary = 'За этот месяц у вас преобладало плохое настроение.';
  }

  return (
    <div className="monthly-summary">
      <h3>📊 Статистика за месяц</h3>
      <ul>
        <li>😊 Хорошее: {percentages['😊']}%</li>
        <li>😐 Нормальное: {percentages['😐']}%</li>
        <li>😞 Плохое: {percentages['😞']}%</li>
      </ul>
      <p>{summary}</p>
    </div>
  );
}

export default MonthlyStats;
