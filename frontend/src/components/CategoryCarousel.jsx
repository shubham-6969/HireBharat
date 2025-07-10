import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Full stack Developer",
  "DevOps Engineer",
  "Content Writer", 
  "Front Developer",
  "AI/ML Engineer",
  "Accountant",
  "SEO/SEM Specialist",
  "HR Executive",
  "HR Manager",
  "Customer Service Executive",
  "Electrical Engineer",
  "Freelance Developer",
  "Sales Executive",
];

const CategoryCarousel = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false, // keeps autoplay even after manual navigation
    })
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-6xl mx-auto my-20 px-4"
      >
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 px-2"
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full w-full text-sm font-medium
             border-gray-300 dark:border-gray-600
             text-gray-700 dark:text-gray-200
             hover:bg-gray-100 dark:hover:bg-gray-700
             "
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
