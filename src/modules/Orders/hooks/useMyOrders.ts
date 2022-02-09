import React,{useState} from 'react';
import useRequest from 'shared/http/useRequest';


const useMyOrders = () => {
   const {Axios} = useRequest();

   const getMyOrders = async (shopId: string) => {
      try {
        let {data} =  await Axios.get(`/orders/all/shop/${shopId}`);
      } catch (error) {
         
      }
   }
  return {}
}

export default useMyOrders