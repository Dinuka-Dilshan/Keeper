import React from "react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <h4 className="position-absolute text-center bottom-0 w-100 m-0 text-gray pb-1 font-normal">
        Dinuka Dilshan &copy; {year}
    </h4>
  );
}
