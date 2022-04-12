import React, {useState} from 'react';
import { Axios } from 'shared/http/Http';

const useProducts = () => {
   const [products,setProducts] = useState<any>([]);
   const [product, setProduct] = useState<any>({});
   const [errors,setErrors] = useState<any>("");
   const [load,setLoad] = useState<boolean>(false);
   
   const getProducts = async () => {
      setLoad(true);
      try {
         let {data}  = await Axios.get(`/products`);
         setProducts(data);
         setLoad(false);
      } catch (error) {
         setLoad(false);
         setErrors(error);
      }
   }

  
   const getProductById = async (productId:any) => {
      setLoad(true);
      try {
         let {data}  = await Axios.get(`/products/products/${productId}`);
         setProduct(data);
         setLoad(false);
      } catch (error) {
         setLoad(false);
         setErrors(error);
      }
   }

  return {getProducts, products,errors,load,getProductById,product}
};

export default useProducts;
