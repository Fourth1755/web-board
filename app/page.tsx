"use client";
import { useEffect, useState } from "react";
import BlogList from "./components/BlogList/blog-list";

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

async function getBlogs(): Promise<BlogData[]> {
  const response = await fetch(`http://localhost:8080/blogs`);
  if (!response.ok) {
    throw new Error("cannot fetch blog");
  }
  return response.json();
}

export default function Home() {
  const [blogData, setBlogData] = useState<BlogData[]>([]);
  const initBlogData = async() => {
    try {
      const result = await getBlogs();
      setBlogData(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    initBlogData();
  }, []);
  return (
    <>
      <BlogList isOurBlog={false} blogList={blogData}/>
    </>
  );
}
