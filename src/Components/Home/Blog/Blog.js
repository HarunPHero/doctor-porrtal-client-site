import React from 'react';
import BlogCard from './BlogCard';
import people1 from "../../../images/people1.png" 
import people2 from "../../../images/people2.png" 
import people3 from "../../../images/people3.png" 

const Blog = () => {
    return (
        <div className="pt-28">
        <h2 className="text-center text-2xl font-bold text-secondary uppercase">
          our blog
        </h2>
        <h2 className="text-center text-4xl font-bold text-accent">
          From Our Blog News
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-5">
        
         <BlogCard img={people2}doctorName={"Dr. Ia Gray"} advise={"2 times of brush can make you healthy"}></BlogCard>
         <BlogCard img={people1}doctorName={"Dr. Rashed Kabir"} advise={"Check at least a doctor in a year for your teeth"}></BlogCard>
         <BlogCard img={people3}doctorName={"Dr. Amalia Assur"} advise={"The tooth cancer is taking a challenge"}></BlogCard>
        </div>
  
       
      </div>
    );
};

export default Blog;