import PropType from 'prop-types'
import { CiLocationOn } from 'react-icons/ci'
import { BiDollarCircle } from 'react-icons/bi'


const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='text-slate-500'>
                    <button className='px-5 py-2 font-extrabold border rounded border-slate-300 mr-4'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-extrabold border rounded border-slate-300 mr-4'>{job_type}</button>
                </div>
                <div className='flex'>
                    <span className='flex mr-6'>
                        <h2><CiLocationOn className='text-2xl'>
                        </CiLocationOn></h2>
                        <p>{location} </p>
                    </span>
                    <span className='flex'>
                        <h2 className="text-2xl">
                            <BiDollarCircle></BiDollarCircle>
                        </h2>
                            <p>{salary}</p>
                    </span>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View details</button>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropType.object
}

export default Job;