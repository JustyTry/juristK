import React, { useState, useEffect } from "react";

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then((response) => response.json())
            .then((data) => setServices(data.services));
    }, []);


    return (
        <div className="w-full bg-light" >
            <div>
                <h2></h2>
            <div></div>
            </div>
        </div>
    )
}

export default Service
