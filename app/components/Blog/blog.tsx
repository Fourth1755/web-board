"use client";
import Link from "next/link";
import CreateBlogModal from "../CreateBlogModal/createBlogModal";
import { useState } from "react";
import DeleteBlogModal from "../DeleteModal/deleteBlogModal";

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

type PropsBlog = {
  blog: BlogData;
  isOurBlog: boolean;
};

export default function Blog(prop: PropsBlog) {
  const blog: BlogData = prop.blog;
  const isOurBlog = prop.isOurBlog;

  const [openEditModal, setOpenEditModal] = useState(false);
  const handleOpenEditModal = () => setOpenEditModal(!openEditModal);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpenDeleteModal = () => setOpenDeleteModal(!openDeleteModal);
  return (
    <>
    <div className="px-5 py-4 border-b-2 border-grey-100">
      <div className="flex justify-between">
        <div className="flex pb-3">
          <img
            className="object-cover h-12 w-12 rounded-full"
            src={blog.user_image}
          />
          <h1 className="text-grey-300 my-auto pl-3">{blog.user_name}</h1>
        </div>
        {isOurBlog ? (
          <div className="flex w-14 h-8 justify-between">
            <button id="edit blog" onClick={handleOpenEditModal}>
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
                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
              />
            </svg>
            </button>
            <button id="delete blog" onClick={handleOpenDeleteModal}>
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
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>
            </button>

          </div>
        ) : (
          <></>
        )}
      </div>
      <span className="px-2 py-1 bg-surface rounded-lg text-grey text-sm">
        {blog.community}
      </span>
      <div id="content" className="my-3">
        <Link href={`/blog/${blog.id}`}>
          <h1 className="text-black font-semibold text-lg">{blog.name}</h1>
        </Link>
        <p className="text-black">{blog.detail}</p>
      </div>
      <button className="text-grey-300">Comments</button>
    </div>
    <CreateBlogModal open={openEditModal} handler={handleOpenEditModal} isEdit={true} blog={blog}/>
    <DeleteBlogModal open={openDeleteModal} handler={handleOpenDeleteModal} blogId={blog.id}/>
    </>
  );
}
