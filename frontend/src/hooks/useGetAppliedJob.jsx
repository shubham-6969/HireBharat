import { setAllAppliedJobs } from "@/redux/jobSlice";
import { BACKEND_URL } from "@/utils/constant";
import axios  from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => { 
  const dispatch = useDispatch();
  
  useEffect(()=> {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/application/get`, {
          withCredentials:true
        });
        if(res.data.success) {
          dispatch(setAllAppliedJobs(res.data.application));
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAppliedJobs();
  },[dispatch])
}

export default useGetAppliedJobs;