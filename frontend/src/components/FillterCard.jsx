import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Mumbai",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Surat",
      "Lucknow",
      "Kanpur",
      "Noida",
      "Gurgaon",
      "Kanpur",
      "Agra",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Associate Software Engineer (Fresher)",
      "DevOps Engineer",
      "Mobile App Developer",
      "Data Scientist",
      "Software Developer (3 Years Exp.)",
      "Machine Learning Engineer",
      "AI Engineer",
      "Cloud Engineer",
      "Cybersecurity Specialist",
      "Product Manager",
      "Project Manager",
      "Software Tester / QA",
      "Blockchain Developer",
      "Web Developer",
      "Graphic Designer",
      "Digital Marketing",
      "SEO Specialist",
      "IT Support Specialist",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "Below ₹2 LPA",
      "₹2 LPA - ₹5 LPA",
      "₹5 LPA - ₹10 LPA",
      "₹10 LPA - ₹15 LPA",
      "₹15 LPA - ₹25 LPA",
      "₹25 LPA - ₹50 LPA",
      "Above ₹50 LPA",
    ],
  },
];

const FillterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue, dispatch]);

  return (
    <div className="w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-white p-3 rounded-md flex-1 h-[88vh] overflow-y-auto pr-5">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="my-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `r${index}-${idx}`;
              return (
                <div key={idx} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FillterCard;
