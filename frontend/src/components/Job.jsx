import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
      const createdAt = new Date(mongodbTime);
      const currentTime = new Date();
      const timeDifference = currentTime - createdAt;
      return Math.floor(timeDifference/ (1000*24*60*60));
  }
  
  return (
    <div className="p-4 border rounded-md shadow-sm  transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1">
      {/* Top Row: Bookmark + Date */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      {/* Company Logo + Info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 border rounded-md bg-gray-50">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </div>
        <div>
          <h2 className="text-base font-semibold">{job?.company?.name}</h2>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">
         {job?.description}
        </p>
      </div>
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
              <div className="flex items-center gap-4 mt-4">
                <Button onClick={()=> navigate(`/description/${job?._id}`)}
                variant="outline">Details</Button>
                <Button>Save for latter</Button>
              </div>
    </div>
  );
};

export default Job;
