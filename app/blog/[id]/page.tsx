"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

type BlogData = {
  id: number;
  name: string;
  detail: string;
  crate_dt:string;
  community_id: number;
  community: string;
  user_id: number;
  user_name: string;
  user_image: string;
  comment: string;
};

function getBlogById(id: number): BlogData {
  return {
    id: 1,
    name: "The Beginning of the End of the World",
    detail:
      "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have ",
    crate_dt:"",
    community_id: 1,
    community: "History",
    user_id: 1,
    user_name: "Alisa Mikhailovna",
    user_image: "https://cdn.myanimelist.net/images/characters/5/536830.jpg",
    comment: "Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.",
  };
}
export default function Page() {
  const blog = getBlogById(1);
  return (
    <div className="bg-white md:ml-64 lg:pr-40 lg:pb-20">
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
            src={blog.user_image}
          />
          <h1 className="text-black my-auto pl-3">{blog.user_name}</h1>
        </div>
        <span className="px-2 py-1 bg-surface rounded-lg text-grey text-sm">
          {blog.community}
        </span>
        <div id="content" className="my-6">
          <h1 className="text-black font-semibold text-2xl pb-2">
            {blog.name}
          </h1>
          <p className="text-black">{blog.detail}</p>
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
            <button className="outline outline-success text-success px-3 py-2 rounded-lg">Add Comment</button>
          <div className="flex pt-4">
            <img
              className="object-cover h-10 w-10 rounded-full"
              src={blog.user_image}
            />
            <h1 className="text-black my-auto pl-3">{blog.user_name}</h1>
          </div>
          <p className="text-black text-sm pl-16 py-2">{blog.comment}</p>
        </div>
      </div>
    </div>
  );
}
