export default function Board({ className, order, handleCardClick }) {
  return (
    <div className={className}>
      {order.map((position, i) => (
        <img
          key={i}
          alt={position}
          src={require("../assets/card/" + position + ".jpg")}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
}
