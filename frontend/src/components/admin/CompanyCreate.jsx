import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState();
  const dispatch = useDispatch();
  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success("Comapny created successfully");
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      const message = error?.response?.data?.message || "Failed to create company";
      toast.error(message);
      console.log("Company creation error:",error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name </h1>
          <p>
            What would you like to give your company name? you can change this
            latter{" "}
          </p>
        </div>
        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="Google, Microsoft, Amazon, Paypal, Accenture"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button
            variant="outline"
            className="hover:bg-purple-700 hover:text-white"
            onClick={registerNewCompany}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
