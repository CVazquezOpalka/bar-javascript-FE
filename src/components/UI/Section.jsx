import React from "react";

function Section(props) {
  return (
    <section className="w-3/4 mx-auto my-5 p-2 bg-white">
      {props.children}
    </section>
  );
}

export default Section;
