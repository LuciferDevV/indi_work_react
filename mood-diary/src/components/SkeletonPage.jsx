// Компонент отображает "скелетон" для блока статистики (пока данные загружаются)
function SkeletonStatsCard() {
  return (
    <div className="skeleton-card">
      {/* Заголовок */}
      <div className="skeleton skeleton-line w-40" />
      
      {/* Отступ */}
      <div style={{ height: "20px" }} />

      {/* Несколько строк статистики */}
      <div className="flex-col">
        <div className="skeleton skeleton-line w-25" />
        <div className="skeleton skeleton-line w-25" />
        <div className="skeleton skeleton-line w-25" />
      </div>

      {/* Отступ */}
      <div style={{ height: "20px" }} />

      {/* Нижняя полоса */}
      <div className="skeleton skeleton-line w-80" />
    </div>
  );
}

// Компонент отображает "скелетон" карточки записи
function SkeletonCard() {
  return (
    <div className="skeleton-card">
      {/* Последовательно отрисовываются строки-заполнители с отступами */}
      <div style={{ height: "12px" }} />
      <div className="skeleton skeleton-line" />
      <div style={{ height: "12px" }} />
      <div className="skeleton skeleton-line" />
      <div style={{ height: "12px" }} />
      <div className="skeleton skeleton-line" />
      <div style={{ height: "12px" }} />
      <div className="skeleton skeleton-line" />
    </div>
  );
}

// Главный компонент страницы-загрузки, отображает скелетоны статистики и нескольких карточек
export default function SkeletonPage() {
  return (
    <>
      <SkeletonStatsCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </>
  );
}
