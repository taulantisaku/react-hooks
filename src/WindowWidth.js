import React, { useEffect, useState } from "react";

export default function WindowWidth() {
  const [width, setWidth] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleResize = (e) => {
    // console.log(e);
    setWidth(window.innerWidth);
    console.log(window.innerWidth);
  };

  //1
  useEffect(() => {
    //componentDidMount
    console.log("mount");
    window.addEventListener("resize", handleResize);

    //componentWillUnmount - cleanup function
    return () => {
      console.log("unmount");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //2
  useEffect(() => {
    console.log("MOUNT DATA");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((jsonResponse) => {
        setData(jsonResponse);
        console.log("jsonResponse", jsonResponse);
        setIsLoading(false);
      });

      //cleanup function 
    // return () => {
    //   console.log("unmount DATA");
    //   setData([]);
    //   console.log("DATA => ", data);
    // };
  },[]);

  return (
    <div>
      <span>Window Width: </span>
      <strong> {width}</strong>

      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((item) => <div key={item.id}>{item.title}</div>)
        )}
      </div>
    </div>
  );
}
