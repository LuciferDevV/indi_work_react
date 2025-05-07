/**
 * Компонент-заглушка для блока статистики, отображается во время загрузки данных.
 *
 * @component
 * @returns {JSX.Element} Скелет статистического блока.
 */
function SkeletonStatsCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-line w-40" />
      <div style={{ height: "20px" }} />
      <div className="flex-col">
        <div className="skeleton skeleton-line w-25" />
        <div className="skeleton skeleton-line w-25" />
        <div className="skeleton skeleton-line w-25" />
      </div>
      <div style={{ height: "20px" }} />
      <div className="skeleton skeleton-line w-80" />
    </div>
  );
}

/**
 * Компонент-заглушка для карточки записи, отображается во время загрузки контента.
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

/**
 * Страница-заглушка, объединяющая скелетон статистики и несколько скелетонов карточек.
 *
 * Используется для отображения при первоначальной загрузке главной страницы.
 *
 * @component
 * @returns {JSX.Element} Страница со скелетонами.
 */
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
