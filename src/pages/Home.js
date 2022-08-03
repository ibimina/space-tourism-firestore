//import link tag
import { Link } from "react-router-dom";

//components import
import Navbar from "../components/Navbar";

//import style sheet
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="flex">
        <div>
          <h1 className="uppercase fs-500 text-accent ff-sans-cond letter-spacing-3 pg-tilte">
            So, you want to travel to
            <span className="d-block fs-900 ff-serif text-white">
              Space
            </span>{" "}
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="margin-btm">
          <Link
            to="destination"
            className="large-button uppercase ff-serif text-dark bg-white"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
