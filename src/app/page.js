"use client"

import Files from "@/Components/Files";
import "./globals.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Loader from "@/Components/Loader/Loader";
import { useState } from "react";


export default function Home() {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState({})
  return (
   <>
    <nav className="w-full  h-[80px] flex justify-between items-center bg-[#000000]">
      <h1 className="letras_nav text-white ml-4 hidden md:block">Recaudo Asesor</h1>
      <img src={"/Logo3.png"} width={"120"} height={"80"} alt="" />
    </nav>
    <section className="flex justify-center">
     <Files 
     setLoader={setLoader}
     setData={setData}
     data={data}
     />
    </section>

    {loader && <Loader />}
    </>
  );
}
