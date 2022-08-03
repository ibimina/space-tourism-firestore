import { useState } from "react";
import Navbar from "../components/Navbar";

import { useCollection } from "../hooks/useCollection";

import "./destination.css";

export default function Destination() {
  // const [url, setUrl] = useState(
  //   "http://localhost:3000/destinations?name=Moon"
  // );
 
  const [url, setUrl] = useState(["name","==","moon"]);

  const { data, error, isLoading } = useCollection("destination", url);

  const [moonActive, setMoonActive] = useState("true");
  const [marsActive, setMarsActive] = useState("false");
  const [europaActive, setEuropaActive] = useState("false");
  const [titanActive, setTitanActive] = useState("false");

  const activeMars = () => {
    if (marsActive === "false") {
      setMarsActive("true");
      setUrl(["name", "==", "Mars"])
      setEuropaActive("false");
      setMoonActive("false");
      setTitanActive("false");
    } else {
      setMarsActive("false");
    }
  };
  const activeMoon = () => {
    if (moonActive === "false") {
      setMarsActive("false");
      setEuropaActive("false");
      setMoonActive("true");
      setTitanActive("false");
      setUrl(["name", "==", "moon"]);
      console.log("wow")
    } else {
      setMoonActive("false");
    }
  };
  const activeEuropa = () => {
    if (europaActive === "false") {
      setUrl(["name", "==", "Europa"]);
      setEuropaActive("true");
      setMarsActive("false");
      setMoonActive("false");
      setTitanActive("false");
      console.log("woww");
    } else {
      setEuropaActive("false");
    }
  };
  const activeTitan = () => {
    if (titanActive === "false") {
      setUrl(["name", "==", "Titan"]);
      setTitanActive("true");
      setMarsActive("false");
      setEuropaActive("false");
      setMoonActive("false");
    } else {
      setTitanActive("false");
    }
  };


  return (
    <div className="destination">
      <Navbar />
      <div className="dec-con">
        <h1 className="uppercase fs-500 text-accent ff-sans-cond letter-spacing-3 des-pl">
          {" "}
          <span>01</span> pick your destination
        </h1>

        {error && <p>error</p>}
        {isLoading && <p> Loading</p>}
        {data &&
          data.map((data) => (
            <div key={data.name} className="wrapper">
              <picture>
                <source
                  srcSet={data.images.webp}
                  type="image/webp"
                  media="(min-width:60rem)"
                />
                <img src={data.images.png} alt="the moon" className="planet" />
              </picture>
              <div className="des-wrap">
                <div className="btn-con">
                  <button
                    aria-pressed={moonActive}
                    className="btn uppercase ff-sans-cond text-accent letter-spacing-2"
                    onClick={activeMoon}
                  >
                    Moon
                  </button>
                  <button
                    aria-pressed={marsActive}
                    className="btn uppercase ff-sans-cond text-accent letter-spacing-2"
                    onClick={activeMars}
                  >
                    Mar
                  </button>
                  <button
                    aria-pressed={europaActive}
                    className="btn uppercase ff-sans-cond text-accent letter-spacing-2"
                    onClick={activeEuropa}
                  >
                    Europa
                  </button>
                  <button
                    aria-pressed={titanActive}
                    className="btn uppercase ff-sans-cond text-accent letter-spacing-2"
                    onClick={activeTitan}
                  >
                    Titan
                  </button>
                </div>

                <p className="name uppercase fs-800 ff-serif">{data.name}</p>
                <p className="desc">{data.description}</p>
                <div className="avg">
                  <div>
                    <p className="uppercase text-accent fs-200 botm">
                      avg. distance
                    </p>

                    <p className="dist uppercase ff-serif">{data.distance}</p>
                  </div>
                  <div>
                    <p className="uppercase text-accent fs-200 botm">
                      {" "}
                      est.travel time
                    </p>
                    <p className="trav uppercase ff-serif">{data.travel}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
