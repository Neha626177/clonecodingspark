import React from "react";
import { useEffect } from "react";
import BlogCard from "./BlogCard";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Blog = () => {
  // getTitle();
  useEffect(() => {
    const getTitle = async () => {
      try {
        const api = `https://newsapi.org/v2/everything?q=tesla&from=2024-04-22&sortBy=publishedAt&apiKey=21c6f85c45a24e07a6bf8d4005da03e0`;
        let response = await fetch(api);
        console.log(response);
        let data = await response.json();
        // setTitle(data.title);
        //  console.log(data);
        console.log(data.articles[20].urlToImage);
        // console.log(title);
      } catch {
        console.log("Error found");
      }
    };
    getTitle();
  }, []);

  useEffect(() => {
    AOS.init({ duration: "1500" });
  });
  return (
    <>
      <div className="w-full flex flex-row justify-center items-center mt-[50px]">
        <div className=" flex flex-row justify-start items-center gap-2 ">
          <div className="w-8 h-0.5  bg-[#F7CAC9]"></div>
          <div>
            <p className="text-bold text-[#abaaad] ">From Blog</p>
          </div>
          <div className="w-8 h-0.5 bg-[#F7CAC9]"></div>
        </div>
      </div>
      <h2 className="text-center text-3xl font-extrabold mb-10">
        Latest Articles
      </h2>
      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mb-2">
        <BlogCard data-aos="zoom-in" />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="w-full flex flex-row justify-center mt-10 gap-4">
        <div className="w-[70px] h-[50px] bg-[#343148] cursor-pointer transition duration-500 hover:bg-[#F7CAC9] flex justify-center items-center text-[#F7CAC9] hover:text-[#343148]">
          <ArrowBackIosIcon />
        </div>
        <div className="w-[70px] h-[50px] bg-[#343148] cursor-pointer transition duration-500 hover:bg-[#F7CAC9] flex justify-center items-center text-[#F7CAC9] hover:text-[#343148]">
          <ArrowForwardIosIcon />
        </div>
      </div>
    </>
  );
};

export default Blog;
