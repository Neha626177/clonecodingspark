import React, { useEffect, useState } from "react";
import blogimg from "../assets/blog1.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const BlogCard = () => {
  //  const [title,setTitle] = useState('');

  // const getTitle = async () => {
  //   try {
  //     const api = `https://newsapi.org/v2/everything?q=tesla&from=2024-04-22&sortBy=publishedAt&apiKey=21c6f85c45a24e07a6bf8d4005da03e0`;
  //     let response = await fetch(api);
  //     console.log(response);
  //     let data = await response.json();
  //     // setTitle(data.title);
  //     console.log(data);
  //     // console.log(title);
  //   } catch {
  //     console.log("Error found");
  //   }
  // };

  // getTitle();
  // useEffect(()=>{
  //   getTitle();
  // },[])

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          aliquid omnis perspiciatis officiis distinctio, consectetur doloribus
          consequatur earum cupiditate dignissimos.
        </p>
        <a
          className=" font-bold pl-6 my-2 text-[#343148] hover:text-[#F7CAC9] "
          href="#"
        >
          Read More{" "}
          <span>
            <ArrowForwardIosIcon className="text-[px]" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
