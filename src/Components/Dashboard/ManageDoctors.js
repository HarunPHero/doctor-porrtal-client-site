import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";


const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch(`https://vast-wave-13931.herokuapp.com/doctors`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleDelete = (email) => {
    const proceed = window.confirm("Are you want to delete");
    if (proceed) {
      fetch(`https://vast-wave-13931.herokuapp.com/doctors/${email}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
      })
        .then((res) => res.json())
        .then((deletedDoctor) => {
          if (deletedDoctor.deletedCount) {
            toast.success(`Doctor is deleted.`);

            refetch();
          }
        });
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 px-3">
      {doctors.map((d) => (
        <>
          <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure>
              <img className="w-52" src={d.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Name: <span className="text-primary">{d.name}</span>
              </h2>
              <h2 className="text-1xl font-bold">
                Email: <span className="text-neutral">{d.email}</span>
              </h2>
              <h2 className="text-1xl font-bold">
                Speciality:{" "}
                <span className="text-secondary"> {d.speciality}</span>
              </h2>

              <button
                className="btn bg-gradient-to-r from-secondary to-primary ..."
                onClick={() => handleDelete(d.email)}
              >
                Remove doctor
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ManageDoctors;
