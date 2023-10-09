import React from "react";

function Layout(props) {
  const layoutClass = "w-5/6 mx-auto px-8 pt-10";
  return <div className={layoutClass}>{props.children}</div>;
}

export default Layout;
