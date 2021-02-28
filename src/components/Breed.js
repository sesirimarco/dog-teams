import { useParams } from 'react-router-dom';
const Breed = () => {
  const { name } = useParams();
  return (
    <h1>Breed: {name}</h1>
  )
};
export default Breed;