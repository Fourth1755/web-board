"use client";
import { Alert, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import axios from "axios";
import Swal from "sweetalert2";
import { error } from "console";

async function login(username:string) {
  const response = await axios.post(`http://localhost:8080/auth/login`,{username})
  .catch((error)=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Username is incroect!",
    });
  })
  return Response.json(response)
}

export default function Page() {
  const [username, setUsername] = useState("");
  const router = useRouter()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //POST:/login
    const response = await login(username)
    router.push('/')

  };
  return (
    <div className="flex md:flex-row flex-col-reverse bg-green-500 h-screen">
      <div className="md:w-3/5 md:h-screen h-1/2 flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-80 gap-5 h-full">
            <span className="font-semibold text-xl py-2">Sign in</span>
            <Input
              label="Username"
              crossOrigin={undefined}
              value={username}
              name="username"
              required
              onChange={handleInputChange}
              className="bg-white"
            />
            <button className="bg-success py-2 px-2 rounded-xl" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="bg-green-300 md:w-2/5 md:h-screen h-1/2 md:rounded-l-3xl rounded-b-3xl">
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col w-80 gap-5 items-center">
            <img 
                className="lg:w-full md:h-full w-40 h-40"
                src="https://inclusivespace.com.ua/wp-content/uploads/2023/12/parnters-question.webp" />
            <h1 className="font-castoro italic text-lg text-center">a Borad</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
