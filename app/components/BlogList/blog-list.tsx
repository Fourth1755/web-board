"use client";
import { useEffect, useState } from "react";
import Blog from "../Blog/blog";
import { Select, Option } from "@material-tailwind/react";
import CreateBlogModal from "../CreateBlogModal/createBlogModal";

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

type Community = {
  id: number;
  name: string;
};

type PropBlogList = {
  isOurBlog: boolean;
  blogList: BlogData[];
};

export default function BlogList(prop: PropBlogList) {
  const isOurBlog = prop.isOurBlog;
  const blogData = prop.blogList;
  const [community, setCommunity] = useState("");
  const [blogDataShow, setBlogDataShow] = useState<BlogData[]>([]);
  const communityList:Community[] = [
    {
      id: 1,
      name: "History",
    },
    {
      id: 2,
      name: "Food",
    },
    {
      id: 3,
      name: "Pets",
    },
    {
      id: 4,
      name: "Fashion",
    },
    {
      id: 5,
      name: "Exercise",
    },
    {
      id: 6,
      name: "Others",
    },
  ];

  const filterBlogData = () => {
    const result = blogData?.filter((item) => item.community == community);
    setBlogDataShow(result);
  };
  const changeCommunity = (val = "") => {
    setCommunity(val);
  };

  useEffect(() => {
    if (community != "") {
      filterBlogData();
    }
  }, [community]);

  useEffect(() => {
    setBlogDataShow(blogData);
  }, [blogData]);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(!openModal);

  return (
    <>
      <div className="container mx-auto md:px-40 px-5 pt-10">
        <div className="flex justify-between grid-cols-3 gap-4">
          <input
            type="text"
            id="text"
            className="bg-grey-100 border border-grey-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 flex-grow"
            placeholder="Search"
          />
          <div>
            <Select
              variant="standard"
              label="Community"
              value={community}
              onChange={changeCommunity}
            >
              {communityList?.map((item) => (
                  <Option key={item.id} value={item.name}>
                    {item.name}
                  </Option>
                ))
              }
            </Select>
          </div>
          <button
            className="px-4 py-1 bg-success rounded-lg"
            onClick={handleOpen}
          >
            Create+
          </button>
        </div>
        <div className="bg-white rounded-lg py-2 mt-6">
          {blogDataShow?.length == 0 ? (
            <p className="py-5 text-center text-black">No Blog</p>
          ) : (
            blogDataShow?.map((item: BlogData) => (
              <Blog key={item.id} blog={item} isOurBlog={isOurBlog}/>
            ))
          )}
        </div>
      </div>
      <CreateBlogModal open={openModal} handler={handleOpen} isEdit={false} blog={undefined}/>
    </>
  );
}
