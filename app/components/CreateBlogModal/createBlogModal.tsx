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
import { useState } from "react";

type PropsCreateBlogModal = {
  open: boolean;
  handler: any;
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

export default function CreateBlogModal(prop: PropsCreateBlogModal) {
  const open = prop.open;
  const handleOpen = prop.handler;
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

  const [formData, setFormData] = useState<FormData>({ title: "", detail: "",community:"" });

  const handleInputChange=(event: React.ChangeEvent<HTMLInputElement>|any)=> {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const changeCommunity = (val="") => {
    setFormData({ ...formData, "community": val });
  };

  const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    console.log(formData)
  }

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
        <DialogHeader>Create Post</DialogHeader>
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
