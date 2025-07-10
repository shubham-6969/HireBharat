import { setSingleCompany } from '@/redux/companySlice'
import { BACKEND_URL } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetCompanyById = (companyId) => {
 const dispatch = useDispatch();
 useEffect(() => {
  const fetchSingleCompany = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/company/get/${companyId}`, {withCredentials:true});
      if(res.data.success){
        dispatch(setSingleCompany(res.data.company));
      }
    } catch (error) {
      console.log(error)
    }
  }
  fetchSingleCompany();
 },[dispatch, companyId])
}

export default useGetCompanyById
