import { setAllAdminJobs } from '@/redux/jobSlice'
import { BACKEND_URL } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllAdminJobs = () => {
 const dispatch = useDispatch();
 useEffect(() => {
  const fetchAllAdminJobs = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/job/getadminjobs`, {withCredentials:true});
      if(res.data.success){
        dispatch(setAllAdminJobs(res.data.jobs));
      }
    } catch (error) {
      console.log(error)
    }
  }
  fetchAllAdminJobs();
 },[dispatch])
}

export default useGetAllAdminJobs;
