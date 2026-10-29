import React from "react";
import { Link } from "react-router-dom";
function DestinationCard({
  place,
  isFavorite,
  onToggleFavorite,
  showCategory = true,
}) {
  return (
    <article className="destination-card">
      <div className="destination-image">
        <img
          src={place.image}
          alt={place.name}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src =
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80";
          }}
        />
        <button
          type="button"
          className={`favorite-button ${
            isFavorite ? "selected" : ""
          }`}
          onClick={() => onToggleFavorite(place.id)}
          aria-label={
            isFavorite
              ? `Remove ${place.name} from favorites`
              : `Add ${place.name} to favorites`
          }
        >
          {isFavorite ? "♥" : "♡"}
        </button>

        {showCategory && (
          <span className="category-badge">
            {place.category}
          </span>
        )}
      </div>
      <div className="destination-info">
        <div className="title-row">
          <h2>{place.name}</h2>
          <span className="rating">
            ★ {place.rating}
          </span>
        </div>
        <p className="country">📍 {place.country}</p>
        <p className="description">
          {place.description}
        </p>
        <div className="destination-meta">
          <span>🗓️ {place.days} days</span>
          <strong>
            ₹{place.price.toLocaleString("en-IN")}
          </strong>
        </div>
        <Link
          className="plan-button"
          to={`/booking?destination=${encodeURIComponent(
            place.name
          )}`}
        >
          Plan this trip →
        </Link>
      </div>
    </article>
  );
}
export default DestinationCard;