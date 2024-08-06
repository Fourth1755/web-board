"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type BlogData = {
  id: number;
  name: string;
  detail: string;
  crate_dt: string;
  community_id: number;
  community: string;
  user_id: number;
  user_name: string;
  user_image: string;
  comment: string;
};

async function getBlogById(id: string): Promise<BlogData> {
  const response = await fetch(`http://localhost:8080/blogs/${id}`);
  if (!response.ok) {
    throw new Error("cannot fetch blog");
  }
  return response.json();
}
export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [blog, setBlog] = useState<BlogData>();
  const initBlogData = async () => {
    const result = await getBlogById(id);
    setBlog(result);
  };
  useEffect(() => {
    initBlogData();
  }, [id]);

  return (
    <div className="bg-white md:ml-64 lg:pr-40 lg:pb-20 pt-20 h-screen">
      <div className="container mx-auto md:px-28 px-5 py-6">
        <Link href={"/"}>
          <button className="h-12 w-12 rounded-full bg-green-100 flex justify-center items-center">
            <svg
              className="w-8 h-8 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </button>
        </Link>
        <div className="flex pb-3 pt-6">
          <img
            className="object-cover h-12 w-12 rounded-full"
            src={blog?.user_image}
          />
          <h1 className="text-black my-auto pl-3">{blog?.user_name}</h1>
        </div>
        <span className="px-2 py-1 bg-surface rounded-lg text-grey text-sm">
          {blog?.community}
        </span>
        <div id="content" className="my-6">
          <h1 className="text-black font-semibold text-2xl pb-2">
            {blog?.name}
          </h1>
          <p className="text-black">{blog?.detail}</p>
        </div>
        <button className="text-grey-300 flex justify-between w-28">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
            />
          </svg>
          Comments
        </button>
        <div className="pb-3 pt-6">
          <button className="outline outline-success text-success px-3 py-2 rounded-lg">
            Add Comment
          </button>
          <div className="flex pt-4">
            <img
              className="object-cover h-10 w-10 rounded-full"
              src={blog?.user_image}
            />
            <h1 className="text-black my-auto pl-3">{blog?.user_name}</h1>
          </div>
          <p className="text-black text-sm pl-16 py-2">{blog?.comment}</p>
        </div>
      </div>
    </div>
  );
}
