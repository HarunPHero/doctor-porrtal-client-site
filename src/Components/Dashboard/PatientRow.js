import React from "react";
import { toast } from "react-toastify";

const PatientRow = ({ index, patient, uid, refetch }) => {
  const makeAdmin = () => {
    fetch(`https://vast-wave-13931.herokuapp.com/user/admin/${uid}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) =>{
        if(res.status === 403){
          toast.error("Failed to make an admin")
        }
        return res.json()
        })
      .then((data) => {
       if(data.modifiedCount > 0){
        refetch();
        toast.success("Made a new admin",{
          theme:"colored"
        });
       }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-10 h-12">
              <img
                src={
                  patient.userPhoto ||
                  "https://web.programming-hero.com/static/media/profileImage.934e5b10.png"
                }
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{patient?.userName}</div>
          </div>
        </div>
      </td>
      <td>
        {patient.role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make admin
          </button>
        ) : (
          ""
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove user</button>
      </td>
    </tr>
  );
};

export default PatientRow;
