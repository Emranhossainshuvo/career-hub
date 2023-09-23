import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

    const jobs = useLoaderData() || {};

    const {id} = useParams();

    const job = jobs.find(job => job.id == id)

    console.log(job)

    return (
        <div>
            <h2 className="text3xl">Job details of id : {id} </h2>            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <div className="border">
                        <h2 className="text-2xl">Side things</h2>
                        <button className="btn btn-primary w-full">
                            Apply now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;