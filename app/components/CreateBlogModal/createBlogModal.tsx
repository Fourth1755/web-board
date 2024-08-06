"use client";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

type PropsCreateBlogModal = {
  open: boolean;
  handler: ()=>void;
  isEdit: boolean;
  blog?:BlogData
};

type Community = {
  id: number;
  name: string;
};

type FormData ={
  title: string;
  detail: string;
  community:string
}

async function createBlog(blog:BlogData) {
  const response = await axios.post(`http://localhost:8080/blogs`,blog)
  return Response.json(response)
}

async function updateBlog(blog:BlogData,id:number) {
  const response =axios.patch(`http://localhost:8080/blogs/${id}`,blog)
  return Response.json(response)
}

export default function CreateBlogModal(prop: PropsCreateBlogModal) {
  const router = useRouter()
  const open = prop.open;
  const handleOpen = prop.handler;
  const isEdit = prop.isEdit
  const blogData =prop.blog
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
  const user={
    id:1,
    name:"Alisa Mikhailovna",
    image:"https://cdn.myanimelist.net/images/characters/5/536830.jpg",
  }
  const [formData, setFormData] = useState<FormData>({ title: "", detail: "",community:"" });

  const handleInputChange=(event: React.ChangeEvent<HTMLInputElement>|any)=> {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const changeCommunity = (val="") => {
    setFormData({ ...formData, "community": val });
  };

  const handleSubmit=async(event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    const blog:BlogData = {
      id:0,
      name:formData.title,
      detail:formData.detail,
      community_id:0,
      community:formData.community,
      user_id:user.id,
      user_name:user.name,
      user_image:user.image,
      comment:""
    }
    if(isEdit&&blogData){
      //PATCH:/blogs
      blog.id=blogData.id
      await updateBlog(blog,blogData.id)
    }else{
      //POST:/blogs
      await createBlog(blog)
    }
    handleOpen()
    router.push('/')
  }
  useEffect(()=>{
    if(isEdit&&blogData){
      setFormData({title:blogData.name,detail:blogData.detail,community:blogData.community})
    }
  },[])
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>{isEdit?"Edit Post":"Create Post"}</DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <div className="grid gap-6">
              <div className="md:w-48">
                <Select
                  variant="outlined"
                  label="Choose a Community"
                  color="green"
                  value={formData.community}
                  name="community"
                  onChange={changeCommunity}
                >
                  {communityList.map((item) => (
                    <Option key={item.id} value={item.name}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <Input
                label="Title"
                crossOrigin={undefined}
                value={formData.title}
                name="title"
                onChange={handleInputChange}
              />
              <Textarea
                label="What's on your mind..."
                value={formData.detail}
                name="detail"
                onChange={handleInputChange}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="green"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" type="submit">
              <span>Post</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
