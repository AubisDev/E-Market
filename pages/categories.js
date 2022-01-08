import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import React from "react";
import Navbar from "../components/Navbar";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      categories,
    },
  };
}

export default function CategoriesPage({ categories }) {
  console.log(categories)
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-10hp">
        <Navbar />
      </div>
      <div className="w-4/5 h-4/5 m-auto ">
        <h1 className=" w-full h-10hp m-auto text-4xl mt-5 border-b-2  border-gray-400 py-2  text-white flex justify-center font-medium bg-gradient-to-r from-purple-500 to-blue-500 p-2  tracking-wider">Categories</h1>
        <div className="w-full h-auto bg-white/75 border-b-2 border-r-2 border-l-2   border-gray-300 ">
          <CategoryList categories={categories} />
        </div>
        
      </div>
      

     
    </div>
  );
}