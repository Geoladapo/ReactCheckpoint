import Card from './Card';

const Name = () => {
  const humanDetailsArray = [
    {
      description:
        'Experienced project Manager skilled in leading cross-functional teams',

      position: 'Engineer',
      name: 'John Doe',
      age: 32,
      img: 'https://res.cloudinary.com/dythcaexg/image/upload/v1694620799/cld-sample.jpg',
    },
    {
      description:
        'Experienced project Manager skilled in leading cross-functional teams',
      position: 'Engineer',
      name: 'John Doe',
      age: 22,
      img: 'https://res.cloudinary.com/dythcaexg/image/upload/v1694620801/cld-sample-5.jpg',
    },
    {
      description:
        'Experienced project Manager skilled in leading cross-functional teams',
      position: 'Engineer',
      name: 'John Doe',
      age: 42,
      img: 'https://res.cloudinary.com/dythcaexg/image/upload/v1694620799/cld-sample-2.jpg',
    },

    // Add more objects with human details as needed
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-20 m-20	max-w-4xl mx-auto my-[100px]">
        {humanDetailsArray.map((item, index) => (
          <Card
            key={index}
            description={item.description}
            position={item.position}
            name={item.name}
            age={item.age}
            img={item.img}
          />
        ))}
      </div>
    </>
  );
};
export default Name;
