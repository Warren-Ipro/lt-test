import React, { useRef, useEffect, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";

const Flip = ({ value }) => {
  const divRef = useRef();
  const tickRef = useRef();

  const [tickValue, setTickValue] = useState(value);

  // Make the Tick instance and store it in the refs
  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit
    });
    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  // Start the Tick.down process
  useEffect(() => {
    const counter = Tick.count.down(value, {
      format: [ "d", "h", "m", "s"]
    });

    // When the counter updates, update React's state value
    counter.onupdate = function (value) {
      setTickValue(value);
    };

    return () => {
      counter.timer.stop();
    };
  }, [value]);

  // When the tickValue is updated, update the Tick.DOM element
  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = tickValue;
    }
  }, [tickValue]);

  return (
    <div ref={divRef} className="tick">
      <div data-repeat="true" data-layout="horizontal fit">
        <div className="tick-group" ref={divRef}>
          <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay">
            <span data-view="flip"></span>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-row justify-around text-center">
        <span className="w-1/4">Days</span>
        <span className="w-1/4">Hours</span>
        <span className="w-1/4">Minutes</span>
        <span className="w-1/4">Seconds</span>
      </div>
    </div>
  );
};

export default Flip