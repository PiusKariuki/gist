import React, {useState} from 'react';
import { Axios } from 'shared/http/Http';

const useProducts = () => {
   const [products,setProducts] = useState<any>([]);
   const [errors,setErrors] = useState<any>("")

   console.log(products);
   
   const getProducts = async () => {
      try {
         let {data}  = await Axios.get(`/products`);
         setProducts(data);

      } catch (error) {
         setErrors(error)
      }
   }

  return {getProducts, products,errors}
};

export default useProducts;
