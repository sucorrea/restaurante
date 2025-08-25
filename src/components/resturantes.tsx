import { useEffect, useState } from 'react';
import { getRestaurantes, type Restaurantes } from '../api/api';
import './restaurantes.css'
const Resturantes = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([]);

  useEffect(() => {
    getRestaurantes().then((data) => {
      setRestaurantes(data);
    });
  }, []);
  console.log('restaurantes', restaurantes);

  return( <div>
    {restaurantes.map((restaurante) => (
      <div>
      <img src={restaurante.image} alt={restaurante.name} />
      <h1>{restaurante.name}</h1>
      <h2>{restaurante.address}</h2>
      </div>
    ))}



  </div>

    
  )
};

export default Resturantes;
