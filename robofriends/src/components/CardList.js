import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(({ id, name, email }, index) => (
        <Card key={index} id={id} name={name} email={email} />
      ))}
    </div>
  );
};

export default CardList;
