import { useState } from "react";

import Navbar from "../components/Navbar";

import { useCollection } from "../hooks/useCollection";

import "./technology.css";
export default function Technology() {
  const [url, setUrl] = useState(["name", "==", "Launch Vehicle"]);
 console.log(url)
const { data, error, isLoading } = useCollection("technology", url);

  const [launchActive, setLaunchActive] = useState("true");
  const [portActive, setPortActive] = useState("false");
  const [capActive, setCapActive] = useState("false");

  const activeLaunch = () => {
    if (launchActive === "false") {
      setLaunchActive("true");
      setUrl(["name", "==", "Launch Vehicle"]);
      setPortActive("false");
      setCapActive("false");
    } else {
      setLaunchActive("false");
    }
  };
  const activePort = () => {
    if (portActive === "false") {
      setPortActive("true");
      setUrl(["name", "==", "Spaceport"]);
      setLaunchActive("false");
      setCapActive("false");
    } else {
      setPortActive("false");
    }
  };
  const activeCap = () => {
    if (capActive === "false") {
      setCapActive("true");
      setUrl(["name", "==", "Space capsule"]);
      setLaunchActive("false");
      setPortActive("false");
    } else {
      setCapActive("false");
    }
  };

  return (
    <div className="technology">
      <Navbar />
      <div className="tech-wrap">
        <h2 className="text-light uppercase tech-title">
          <span className="text-accent">03</span> space launch 101
        </h2>
       
          {error && <p> Error...</p>}
          {isLoading && <p>Loading...</p>}
          {data &&
            data.map((tech) => (
              <div key={tech.name.substring(0, 5)} className="tech-flow">
                <picture>
                  <source
                    srcSet={tech.images.portrait}
                    type="image/webp"
                    media="(min-width:60rem )"
                  />
                  <img
                    src={tech.images.landscape}
                    alt="the moon"
                    className="tech-img"
                  />
                </picture>
                <div className="tech-dt">
                  <div className="num-btn">
                    <button
                      className="number-btn"
                      aria-pressed={launchActive}
                      onClick={activeLaunch}
                    >
                      1<span className="sr-only">commander button</span>
                    </button>
                    <button
                      className="number-btn "
                      aria-pressed={portActive}
                      onClick={activePort}
                    >
                      2<span className="sr-only">Mission Specialist</span>
                    </button>
                    <button
                      className="number-btn"
                      aria-pressed={capActive}
                      onClick={activeCap}
                    >
                      3 <span className="sr-only">Flight Engineer</span>
                    </button>
                  </div>
                  <div className="det tech-con">
                    <div className="spa">
                      <h3 className="uppercase fs-600 ff-serif text-accent title">
                        the terminology...
                      </h3>
                      <p className="uppercase">{tech.name}</p>
                    </div>
                    <p className=" ff-serif text-accent">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
   
  );
}
