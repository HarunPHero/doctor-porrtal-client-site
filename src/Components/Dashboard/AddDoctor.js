import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const { data:services, isLoading } = useQuery("services", () =>
    fetch(`https://vast-wave-13931.herokuapp.com/services`).then((res) => res.json())
  );
   const image_submition_key = `26cc468f8a4d93702bb0fc9f873e6d18`
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = async (data) => {
    
    const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${image_submition_key}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result => {
          if(result.success){
            const img = result?.data.url;
            const doctorDetail = {
              name:data.name,
              email:data.email,
              speciality:data.speciality,
              photo:img
            }
            fetch('https://vast-wave-13931.herokuapp.com/doctors', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json',
                  authorization: `Bearer ${localStorage.getItem('accesstoken')}`
              },
              body: JSON.stringify(doctorDetail)
          })
          .then(res => res.json())
          .then(doctor => {
            if(doctor.insertedId){
              toast.success("New Doctor has added",{
                theme:"colored"
              })
              reset()

            }
            else{
              toast.error('Failed to add the doctor',{
                theme:"colored"
              });
            }
          })
          }
          
        })
   
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (<>
    <h2 className="text-2xl font-bold" style={{ color: "purple" }}>
    Add a doctor
  </h2>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Your Name is required",
                },
              })}
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.name?.type === "required" && (
              <span style={{ color: "red" }}>{errors.name?.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
                  message: "Invalid email",
                },
              })}
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email?.type === "required" && (
              <span style={{ color: "red" }}>{errors.email?.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span style={{ color: "red" }}>{errors.email?.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Speciality</span>
            </label>
            <select {...register("speciality")} className="select select-bordered w-full max-w-xs" required>
              
              {
                services.map(s => <option key={s._id}>{s.name}</option> )
              }
             
            </select>
          
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
            accept="image/*"
              {...register("photo", {
                required: {
                  value: true,
                  message: "Photo is required",
                },
              })}
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.photo?.type === "required" && (
              <span style={{ color: "red" }}>{errors.photo?.message}</span>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value={"Add new doctor"}
            />
          </div>
          
        </form>
      </div>
    </div>
    </>
  );
};

export default AddDoctor;
