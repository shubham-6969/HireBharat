import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FillterCard from "./FillterCard";
import Job from "./Job";
import { useSelector } from "react-redux";


const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          {/* Sidebar filter */}
          <div className="w-[20%]">
            <FillterCard />
          </div>

          {/* Job cards */}
          <div className="flex-1  pb-5">
            {filterJobs.length <= 0 ? (
              <span>Job not found</span>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filterJobs.map((job, index) => (
                 <div 
                   key={job?._id}
                   className={`animate-in fade-in slide-in-from-right-3 duration-500 delay-[${index * 50}ms]`}
                 >
                   <Job job={job}/>
                 </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
