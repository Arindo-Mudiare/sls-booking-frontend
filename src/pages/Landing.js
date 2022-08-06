import main from "../assets/svg/delivery-svgrepo-com.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info div */}
          <div className="info">
            <h1 className="sls-red">
              SLS <span>Booking</span> Portal
            </h1>
            <p>
              Login or register with your details and patronize the best booking
              service in africa and give testimonies
            </p>
            <Link to="/login" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          {/* image container */}
          <img src={main} alt="SLS Booking Portal" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
