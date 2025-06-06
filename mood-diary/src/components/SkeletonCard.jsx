/**
 * Компонент-заглушка для отображения во время загрузки карточки записи.
 *
 * Представляет собой визуальный скелет, имитирующий структуру контента,
 * который будет загружен позже.
 *
 * @component
 * @returns {JSX.Element} Скелет карточки записи.
 */
function SkeletonCard() {
  return (
    <div className="skeleton-card">
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

export default SkeletonCard;
