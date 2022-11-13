import { Link } from "react-router-dom";

const TailorDetails = () => {
  return (
    <div>
      <h3>full tailor details</h3>
      <h5>
        <nav className='nav'>
          <Link to='/edittailor'>edit tailor</Link>
          <Link to='/orders'>show orders</Link>
          <button>delete tailor</button>
        </nav>
      </h5>
    </div>
  );
};

export default TailorDetails;
