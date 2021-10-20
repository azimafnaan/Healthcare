import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';

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
            <Header></Header>
            <img
                className="d-block w-100"
                src={abc?.img}
                alt=""
            />
            <h1>{abc?.title}</h1>
            <p>{abc?.description}</p>
            <p>
                Historically, cardiac surgeons in Canada completed general surgery followed by a fellowship in CV / CT / CVT. During the 1990s, the Canadian cardiac surgery training programs changed to six-year "direct-entry" programs following medical school. The direct-entry format provides residents with experience related to cardiac surgery they would not receive in a general surgery program (e.g. echocardiography, coronary care unit, cardiac catheterization etc.). Residents in this program will also spend time training in thoracic and vascular surgery. Typically, this is followed by a fellowship in either Adult Cardiac Surgery, Heart Failure/Transplant, Minimally Invasive Cardiac Surgery, Aortic Surgery, Thoracic Surgery, Pediatric Cardiac Surgery or Cardiac ICU. Contemporary Canadian candidates completing general surgery and wishing to pursue cardiac surgery often complete a cardiothoracic surgery fellowship in the United States. The Royal College of Physicians and Surgeons of Canada also provides a three-year cardiac surgery fellowship for qualified general surgeons that is offered at several training sites including the University of Alberta, the University of British Columbia and the University of Toronto.
                Thoracic surgery is its own separate 2-3 year fellowship of general or cardiac surgery in Canada
            </p>
            <p>
                Cardiac surgery training in the United States is combined with general thoracic surgery and called cardiothoracic surgery or thoracic surgery. A cardiothoracic surgeon in the U.S. is a physician (M.D. or D.O.) who first completes a general surgery residency (typically 5–7 years), followed by a cardiothoracic surgery fellowship (typically 2–3 years). The cardiothoracic surgery fellowship typically spans two or three years, but certification is based on the number of surgeries performed as the operating surgeon, not the time spent in the program, in addition to passing rigorous board certification tests. Two other pathways to shorten the duration of training have been developed: (1) a combined general-thoracic surgery residency consisting of four years of general surgery training and three years of cardiothoracic training at the same institution and (2) an integrated six-year cardiothoracic residency (in place of the general surgery residency plus cardiothoracic residency), which have each been established at many programs (over 20).[3] Applicants match into the integrated six-year (I-6) programs directly out of medical school, and the application process has been extremely competitive for these positions as there were approximately 160 applicants for 10 spots in the U.S. in 2010. As of May 2013, there are 20 approved programs, which include the following:


            </p>
        </div>
    );
};

export default Details;