"use client";
import { useEffect, useState } from "react";
import Blog from "./components/Blog/blog";
import { Select, Option } from "@material-tailwind/react";

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

function getBlogs(): BlogData[] {
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

export default function Home() {
  const communityList: Community[] = [
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
  const [community, setCommunity] = useState("");
  const [blogData, setBlogData] = useState<BlogData[]>();
  const [blogDataShow, setBlogDataShow] = useState<BlogData[]>();
  const initBlogData = () => {
    try {
      const result = getBlogs();
      setBlogData(result);
      setBlogDataShow(result);
    } catch (error) {
      console.error(error);
    }
  };
  const filterBlogData = () =>{
    const result = blogData?.filter((item)=>item.community==community)
    setBlogDataShow(result); 
  }
  const changeCommunity = (val = "") => {
    setCommunity(val);
  };

  useEffect(() => {
    initBlogData();
  }, []);

  useEffect(() => {
    if(community!=""){
      filterBlogData();
    }
  }, [community]);
  return (
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
            {communityList.map((item) => (
              <Option key={item.id} value={item.name}>
                {item.name}
              </Option>
            ))}
          </Select>
        </div>
        <button className="px-4 py-1 bg-success rounded-lg">Create+</button>
      </div>
      <div className="bg-white rounded-lg py-2 mt-6">
        {blogDataShow?.length==0 ? (
          <p className="py-5 text-center text-black">No Blog</p>
        ) : (
          blogDataShow?.map((item: BlogData) => <Blog key={item.id} blog={item} />)
        )}
      </div>
    </div>
  );
}
