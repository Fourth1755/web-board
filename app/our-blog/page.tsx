"use client";
import { useEffect, useState } from "react";
import BlogList from "../components/BlogList/blog-list";

type BlogData = {
  id: number;
  name: string;
  detail: string;
  community_id: number;
  community: string;
  user_id: number;
  user_name: string;
  user_image: string;
  comment: string;
};

function getMyBlogs(): BlogData[] {
  return [
    {
      id: 1,
      name: "The Beginning of the End of the World",
      detail:
        "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have ",
      community_id: 1,
      community: "History",
      user_id: 1,
      user_name: "Alisa Mikhailovna",
      user_image: "https://cdn.myanimelist.net/images/characters/5/536830.jpg",
      comment: "",
    },
    {
      id: 2,
      name: "The Beginning of the End of the World",
      detail:
        "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have ",
      community_id: 3,
      community: "Pets",
      user_id: 1,
      user_name: "Alisa Mikhailovna",
      user_image: "https://cdn.myanimelist.net/images/characters/5/536830.jpg",
      comment: "",
    },
  ];
}
export default function OurBlog(){
    const [blogData, setBlogData] = useState<BlogData[]>([]);
    const initBlogData = () => {
      try {
        const result = getMyBlogs();
        setBlogData(result);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      initBlogData();
    }, []);
    return(
        <>
            <BlogList isOurBlog={true} blogList={blogData}/>
        </>
    )
}