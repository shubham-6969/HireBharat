import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobtable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  return (
    <div className=" bg-white dark:bg-gray-950">
      <Table>
        <TableCaption className="text-xs font-bold text-orange-700 my-3 text-center">
          *A list of your applied jobs*
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <span>You haven't applied for any job yet.</span>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                <TableCell>{appliedJob.job?.title}</TableCell>
                <TableCell>{appliedJob.job?.company?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`text-white font-medium text-xs px-3 py-1 rounded-full cursor-default ${
                      appliedJob?.status === "rejected"
                        ? "bg-red-500 hover:bg-red-600"
                        : appliedJob.status === "pending"
                        ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobtable;
