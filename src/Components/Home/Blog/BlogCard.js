import React from 'react';

const BlogCard = ({img, doctorName, advise}) => {
    return (
        <div className="card shadow-xl" data-aos="fade-up">
        <div className="card-body">
        <div className="card-actions">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={img} alt="" />
              </div>
  
              
            </div>
            <div className="pl-2">
            <h1 className="text-1xl font-bold text-secondary">
                {doctorName}
              </h1>
              <h1 className="text-neutral">23 April 2019</h1>
            </div>
          </div>
          <h1 className="text-2xl">
                {advise}
              </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, odit!
          </p>
         
        </div>
      </div>
    );
};

export default BlogCard;