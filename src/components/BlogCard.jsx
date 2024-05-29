
import blogimg from "../assets/blog1.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink } from "react-router-dom";

const BlogCard = () => {


  return (
    <div>
      <div className=" flex flex-col justify-center  border-[1px]  ">
        <img className="w-full mb-4" src={blogimg} alt="" />

        <h1 className="text-xl font-semibold  text-[#343148] pl-6">
          Lorem ipsum dolor
        </h1>
        <div className=" flex flex-row gap-2 pl-6  mb-2">
          <p> Tech Updates </p>
          <p>01-jan-2025 </p>
          <p>5</p>
        </div>
        <p className="pl-6 text-[#7e7e81] hover:text-red">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, autem?
        </p>
        <NavLink to = '/blog'
          className=" font-bold pl-6 my-2 text-[#343148] hover:text-[#F7CAC9] "
          
        >
          Read More{" "}
          <span>
            <ArrowForwardIosIcon className="text-[px]" />
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default BlogCard;
