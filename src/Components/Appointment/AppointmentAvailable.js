import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BooikingApp from "./BooikingApp";
import Service from "./Service";

const AppointmentAvailable = ({ date, setDate }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
const url = `https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal-client-module-74/main/public/services.json`
        fetch(url)
        .then(res => res.json())
        .then(data=> setServices(data))
       
    },[])
  return (
    <div>
        <h1 className="text-3xl text-primary font-bold text-center py-6"> Available Appointments on {format(date, "PP")}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-3 py-6">
    {
        services.map(service => <Service key={service.id} service={service} setTreatment={setTreatment}></Service>)
    }
    {treatment && <BooikingApp date={date} treatment={treatment}></BooikingApp>}
      
    </div>
   
    </div>
  );
};

export default AppointmentAvailable;
