import "./CategoryCard.css";

const CategoryCard = ({ title, subtitle, image }) => {
  return (
    <div className="category-card">
      <img src={image} alt={title} />
      <div className="card-overlay">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryCard;