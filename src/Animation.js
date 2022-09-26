import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function Animation() {
  const divRef = useRef(null);

  useEffect(() => {
    console.log(divRef.current);
    VanillaTilt.init(divRef.current, {
      max: 25,
      speed: 400,
    });

    //cleanup function
    return () => divRef.current.vanillaTilt.destroy();
  });
  //   console.log("divRef", divRef);
  return (
    <>
      <div
        ref={divRef}
        style={{
          width: 200,
          height: 200,
          background: "#000",
          color: "white",
          margin: "0 auto",
        }}
      >
        Animation
      </div>
      <button onClick={() => divRef.current.vanillaTilt.destroy()}>
        Destroy animation
      </button>
    </>
  );
}
