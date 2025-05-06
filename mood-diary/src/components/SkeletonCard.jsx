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