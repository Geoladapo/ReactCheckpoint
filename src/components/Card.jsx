import PropTypes from 'prop-types';

const Card = ({ description, position, name, age, img }) => {
  return (
    <>
      <div className="shadow-slate-80 flex flex-col items-center justify-center p-10 shadow-xl rounded-lg	">
        <p>{description}</p>
        <div className="flex gap-8 items-center my-5">
          <img
            src={img}
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <div>
            <p className="text-sm">{position}</p>
            <h1 className="text-xl">{name}</h1>
            <span className="bg-black px-2  rounded-full text-white">
              {age}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  position: PropTypes.string,
  img: PropTypes.string,
  age: PropTypes.number,
};

export default Card;
