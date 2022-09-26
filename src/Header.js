import React from "react";

// export default function Header(props) {
//   console.log("header props");
//   return <div>Header component title: {props.title}</div>;
// }

const Header = React.memo((props) => {
  console.log("header props");
  return <div>Header compnent title {props.title}</div>;
});

export default Header;
