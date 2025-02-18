import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="tours-container">
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
    </div>
  );
};
export default Tours;
