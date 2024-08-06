"use client";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/navigation";

type PropsDeleteBlogModal = {
  open: boolean;
  handler: () => void;
  blogId: number;
};

async function deleteBlog(id:number) {
  const response =axios.delete(`http://localhost:8080/blogs/${id}`)
  return Response.json(response)
}

export default function DeleteBlogModal(prop: PropsDeleteBlogModal) {
  const router = useRouter()
  const open = prop.open;
  const handleOpen = prop.handler;
  const blogId = prop.blogId;
  const handleDelete =async()=>{
    await deleteBlog(blogId)
    router.push('/')
  }
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size="xs"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-center">Please confirm if you wish to delete the post</DialogHeader>
        <DialogBody className="text-center">
            Are you sure you want to delete the post? Once deleted, it cannot be recovered.
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
            <Button variant="gradient" color="red" onClick={handleDelete}>
              <span>Delete</span>
            </Button>
          </DialogFooter>
      </Dialog>
    </>
  );
}
