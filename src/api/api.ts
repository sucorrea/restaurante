export type Restaurantes = {
    address: string
    id: string
    image: string
    menus: [
        {groupId:number,
         group:string,
        foods:[{foodId:number,image:string, name:string, price:number,
        sales:[{description:string, price:number, 
        hours:[{from:string, to:string }]}]}]}]
    name: string
  }

export const getRestaurantes = async () => {
  const res = await fetch('http://localhost:5000/restaurantes');
  const data = await res.json();
  console.log('dadosrestaurante', data);

  return data
  
};
