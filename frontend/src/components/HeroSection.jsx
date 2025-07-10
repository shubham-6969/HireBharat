import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const searchJobHandler = () => {
     dispatch(setSearchedQuery(query));
     navigate("/browse")
  }

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span
          style={{
            animation: "pulse 2s infinite ease-in-out",
          }}
          className="mx-auto px-6 py-3 rounded-full bg-gray-200 text-blue-700 font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
        >
          India’s Fastest Growing Job Portal
        </span>
        <h1 className="text-5xl font-bold">
          Discover & Apply <br /> For Jobs{" "}
          <span className="text-blue-700">You'll Love </span>
        </h1>
        <p>
          Discover top job opportunities across India. Apply in seconds and take
          control of your career with HireBharat.
        </p>
        <div
          className="flex w-[90%] max-w-2xl mx-auto mt-6 items-center gap-2 
                bg-white dark:bg-[#1E1E2F] 
                border border-gray-300 dark:border-gray-700 
                rounded-full px-4 py-2 shadow-lg"
        >
          <input
            type="text"
            placeholder="Search by job title, domain, or skills"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent 
               text-black dark:text-white 
               placeholder-gray-500 dark:placeholder-gray-400 
               outline-none"
          />
          <Button onClick={searchJobHandler} className="rounded-r-full bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all">
            <Search className="h-5 w-5"  />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
