import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    let { serviceId } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('/services.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    const abc = service ? service.find(td => td.id == serviceId) : []
    // useEffect(() => {

    //     console.log(abc)
    // }, [service, serviceId]);
    return (
        <div>
            <h3>Service Details of: {serviceId}</h3>
            <img src={abc?.img} alt="" />
            <h3>{abc?.title}</h3>
            <p>{abc?.description}</p>
        </div>
    );
};

export default Details;