import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({job}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate('/description/${job._id}')} className="p-5 rounded-md shadow-xl bg-white dark:bg-[#0f172a] border-gray-100 dark:border-gray-800 cursor-pointer translate duration-200 transform hover:scale-105">
      <div className="my-4">
        <h1 className="text-lg font-semibold text-black dark:text-white">{job?.company?.name}</h1>
        <p className="text-gray-700 dark:text-gray-300">India</p>
      </div>
      <div className="mt-2">
        <h1 className="text-md font-bold text-black dark:text-white" >{job?.title}</h1>
        <p className="text-sm text-gray-700 dark:text-gray-400">{job?.description}</p>
        <div className="flex items-center gap-2 mt-4">
          <Badge className={"text-blue-700 font-bold "} variant="ghost">
            {job?.position} Positions
          </Badge>
          <Badge className={"text-orange-700 font-bold"} variant="ghost">
            {job?.jobType} 
          </Badge>
          <Badge className={"text-green-700 font-bold"} variant="ghost">
            {job?.salary}LPA
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCards;
