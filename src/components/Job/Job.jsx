import PropType from 'prop-types'
const Job = ({job}) => {

    const {logo} = job; 

    return (
        <div>
                <img src={logo} alt="" />
        </div>
    );
};

Job.propTypes = {
    job: PropType.object
}

export default Job;