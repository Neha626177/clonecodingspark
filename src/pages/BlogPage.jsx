import React from 'react'

import { useState , useEffect } from 'react';



const BlogPage = () => {
   
    const [title,setTitle] = useState();
    const [author, setAuthor] = useState()
    const [disc, setDisc] = useState()
    const [content, setContent] = useState();
    const [imgurl ,setImgurl] = useState()
    const [publishedAt ,setPublishedAt] = useState();
    

    // let ranNum = Math.floor(Math.random() * 10);
    // console.log(ranNum);
    useEffect(() => {
      const getTitle = async () => {
        try {
          const api = `https://newsapi.org/v2/everything?q=tesla&from=2024-04-25&sortBy=publishedAt&apiKey=dd7a08dc7dbf4da484e488466a91c64a`;
          let response = await fetch(api);
          console.log(response);
          let data = await response.json();
          console.log(data);
          setTitle(data.articles[0].title);
          setImgurl(data.articles[0].urlToImage);
          setAuthor(data.articles[0].author);
          setDisc(data.articles[0].description);
          setContent(data.articles[0].content);
          setPublishedAt(data.articles[0].publishedAt);
          // console.log(data.articles[0].title);
        } catch {
          console.log("Error is found");
        }
      };
      getTitle();
    }, []);

  return (
    <div className="w-full  my-[30px] flex justify-center items-center">
      <div className=" w-[70%] mb:w-[50%] lg:w-[50%] m-[100px] mb-10  border-[1px]">
        <p className=" mt-10 px-6 py-3 text-4xl font-semibold text-[#343148]">
          {" "}
          {title}
        </p>
        <div className=" w-full flex justify-center">
          <img src={imgurl} alt="" />
        </div>
        <div className="flex items-center justify-between px-6">
          <p className=" py-2 text-2xl font-medium">{author}</p>
          <p className="text-[#7e7e81]">{publishedAt}</p>
        </div>

        <p className="px-6 py-2">{disc}</p>
        <p className="px-6 pb-8">{content}</p>
      </div>
    </div>
  );
}

export default BlogPage
