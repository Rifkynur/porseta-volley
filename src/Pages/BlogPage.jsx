import React from "react";
import BlogCard from "../components/Page/Blog/BlogCard";
import underConstruction from "../assets/underConstruction.png";

const BlogPage = () => {
  return (
    <section className="min-h-screen bg-primary px-4 pt-20 lg:pt-36">
      {/* <h1 className="text-center font-roboto text-xl font-bold capitalize text-colorText">Blog</h1>
      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div> */}
      <img src={underConstruction} />
    </section>
  );
};

export default BlogPage;
