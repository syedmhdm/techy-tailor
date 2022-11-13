import { Link } from "react-router-dom";

const TailorList = () => {
  return (
    <div>
      <h2>Tailor list</h2>
      <nav className='nav'>
        <Link to='/edittailor'>edit tailor</Link>
        <Link to='/tailorDetails'>show tailor</Link>
      </nav>
    </div>
  );
};

export default TailorList;
