import React from 'react';
import { Axios } from './Http';
import { useRecoilValue } from 'recoil';
import {user} from "../store/Store"


const useRequest = () => {
   const userObj = useRecoilValue<any>(user);
   const tkn = userObj?.token

   const request = Axios.interceptors.request.use((request:any) => {
      request.headers.Authorization = `Bearer ${tkn}`;
      return request;
   })


  return {request}
};

export default useRequest;
