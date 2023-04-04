import Colors from './Colors';
import Size from './Size';

const Dogcard = ({ id, breed, size, colors, description, image }) => {
  const { primary, secondary } = colors;

  return (
    <section className="dog">
      <h2>{breed}</h2>
      <img src={image} alt={breed} className="photo" />
      <p className="description">{description}</p>
      <div className="specs">
        <Colors primary={primary} secondary={secondary} />
        <Size size={size} />
      </div>
    </section>
  );
};

export default Dogcard;
