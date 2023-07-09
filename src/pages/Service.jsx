import React, { useState, useEffect } from "react";

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then((response) => response.json())
            .then((data) => setServices(data.services));
    }, []);


    return (
        <div>Service</div>
    )
}

export default Service