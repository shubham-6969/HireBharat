import { setAllAdminJobs } from '@/redux/jobSlice'
import { BACKEND_URL } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllAdminJobs = () => {
 const dispatch = useDispatch();
 useEffect(() => {
  const fetchCompanies = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/job/getadminjobs`, {withCredentials:true});
      if(res.data.success){
        dispatch(setAllAdminJobs(res.data.jobs));
      }
    } catch (error) {
      console.log(error)
    }
  }
  fetchCompanies();
 },[dispatch])
}

export default useGetAllAdminJobs
