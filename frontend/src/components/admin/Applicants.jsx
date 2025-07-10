import React, { useEffect } from "react";
import Navbar from "../shared/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ApplicantsTable from "./ApplicantsTable";
import { BACKEND_URL } from "@/utils/constant";
import { setAllApplicants } from "@/redux/applicationSlice";
import axios from "axios";

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);

  useEffect(() => {
    const fetcAllApplicant = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/application/${params.id}/applicants`,
          {
            withCredentials: true,
          }
        );
        dispatch(setAllApplicants(res.data.job));
      } catch (error) {
        console.log(error);
      }
    };
    fetcAllApplicant();
  }, [dispatch, params.id]);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-xl my-5">
          Applicants {applicants?.applications?.length}
        </h1>
        <ApplicantsTable />
      </div>
    </div>
  );
};
export default Applicants;
