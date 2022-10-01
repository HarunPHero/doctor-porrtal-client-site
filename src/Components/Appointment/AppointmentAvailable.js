import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BooikingApp from "./BooikingApp";
import Service from "./Service";

const AppointmentAvailable = ({ date, setDate }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");
  const { data: services, isLoading, refetch } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
 
  return (
    <div>
      <h1 className="text-3xl text-primary font-bold text-center py-6">
        {" "}
        Available Appointments on {format(date, "PP")}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-3 py-6">
        {services?.map((service) => (
          <Service
            key={service.id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
        {treatment && (
          <BooikingApp
            key={treatment._id}
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
            refetch = {refetch}
            price={treatment.price}
          ></BooikingApp>
        )}
      </div>
    </div>
  );
};

export default AppointmentAvailable;
