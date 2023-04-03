import '../assets/Dogcard.scss';

const Dogcard = ({ id, breed, size, colors, description, image }) => {
  const { primary, secondary } = colors;
  //   const [dog, setDog] = useState([]);

  return (
    <div className="dogs">
      <section className="dog">
        <h2>{breed}</h2>
        <img src={image} alt={breed} className="photo" />
        <p>{description}</p>
        <h3>Colors</h3>
        {secondary ? (
          <ul>
            <li>{`Primary: ${primary}`}</li>{' '}
            <li>{`Secondary: ${secondary}`}</li>
          </ul>
        ) : (
          <ul>
            <li>{`Primary: ${primary}`}</li>
          </ul>
        )}

        <p>{`Taille: ${size}`}</p>
      </section>
    </div>
  );
};

export default Dogcard;
