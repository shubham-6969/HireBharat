import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { BACKEND_URL } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/user/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  };
  return (
    <div
      className="bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300"
      style={{
        borderBottom: "none",
        boxShadow: "none",
      }}
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-7">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[#388E3C]">Hire</span>
            <span className="text-[#FF6F00]">Bharat</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li className="cursor-pointer relative group">
                  <Link to="/admin/companies">Companies</Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF6F00] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer relative group">
                  <Link to="/admin/jobs">Jobs</Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF6F00] transition-all duration-300 group-hover:w-full"></span>
                </li>
              </>
            ) : (
              <>
                <li className="cursor-pointer relative group">
                  <Link to="/">Home</Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF6F00] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer relative group">
                  <Link to="/jobs">Jobs</Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF6F00] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer relative group">
                  <Link to="/browse">Browse</Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF6F00] transition-all duration-300 group-hover:w-full"></span>
                </li>
              </>
            )}
          </ul>

          <ThemeToggle />

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#f88935] hover:bg-[#FF6F00] text-white transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg">
                  Singup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  {user && user.role === "student" && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        {" "}
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
