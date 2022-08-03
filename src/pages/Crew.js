import { useState } from "react";

import Navbar from "../components/Navbar";


import { useCollection } from "../hooks/useCollection";
import "./crew.css";
export default function Crew() {
 
const [url, setUrl] = useState(["role", "==", "Commander"]);

const { data, error, isLoading } = useCollection("crew", url);
  const [commandActive, setCommandActive] = useState("true");
  const [flightEngActive, setFlightEngActive] = useState("false");
  const [missionSpecActive, setMissionSpecActive] = useState("false");
  const [pilotActive, setPilotActive] = useState("false");

  const activeComm = () => {
    if (commandActive === "false") {
      setCommandActive("true");
      setUrl(["role", "==", "Commander"]);
      setFlightEngActive("false");
      setMissionSpecActive("false");
      setPilotActive("false");
    } else {
      setCommandActive("false")
    }
  };
const activeFlig = () => {
  if (flightEngActive === "false") {
    setFlightEngActive("true");
    setUrl(["role", "==", "Flight Engineer"]);
    setCommandActive("false");
    setMissionSpecActive("false");
    setPilotActive("false");
  } else {
    setFlightEngActive("false");
  }
};
const activeMission = () => {
  if (missionSpecActive === "false") {
    setMissionSpecActive("true");
    setUrl(["role", "==", "Mission Specialist"]);
    setCommandActive("false");
    setFlightEngActive("false");
    setPilotActive("false");
  } else {
    setMissionSpecActive("false");
  }
};

const activePilot = () => {
  if (pilotActive=== "false") {
    setPilotActive("true");
    setUrl(["role", "==", "Pilot"]);
    setCommandActive("false");
    setFlightEngActive("false");
    setMissionSpecActive("false");
  } else {
    setPilotActive("false");
  }
};
  return (
    <div className="crew">
      <Navbar />
      <div className="crew-wrap">
        <h2 className="text-light uppercase pg-title ">
          <span className="text-dark">02</span> Meet your crew
        </h2>
        {error && <p> Error...</p>}
        {isLoading && <p>Loading...</p>}
        {data &&
          data.map((crews) => (
            <div key={crews.role} className="crew-con">
              <picture className="cre">
                <source
                  srcSet={crews.images.webp}
                  type="image/webp"
                  media="(min-width:60rem )"
                />
                <img src={crews.images.png} alt="the moon" className="creww" />
              </picture>
              <div className="crew-flex">
                <div className="rou-btn">
                  <button
                    aria-pressed={commandActive}
                    onClick={activeComm}
                    className="round"
                  >
                    <span className="sr-only">commander button</span>
                  </button>
                  <button
                    aria-pressed={missionSpecActive}
                    onClick={activeMission}
                    className="round"
                  >
                    <span className="sr-only">Mission Specialist</span>
                  </button>
                  <button
                    aria-pressed={flightEngActive}
                    onClick={activeFlig}
                    className="round"
                  >
                    <span className="sr-only">Flight Engineer</span>
                  </button>
                  <button
                    aria-pressed={pilotActive}
                    onClick={activePilot}
                    className="round"
                  >
                    <span className="sr-only">pilot</span>
                  </button>
                </div>
                <div className="det">
                  <h3 className="uppercase fs-600 ff-serif text-accent title">
                    {crews.role}
                  </h3>
                  <p className="uppercase fs-700 ff-serif crew-name">
                    {crews.name}
                  </p>
                  <p className="bio">{crews.bio}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
