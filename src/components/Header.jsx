import React from "react";

function Header() {
  return (
    <div className="sticky top-0 bg-gray-200 w-full h-auto py-4 px-2 ms:px-4 md:px-8 lg:px-16 xl:px-24 ">
      <h1 className="text-blue-900">
        <span className="text-xl">Work by:</span>{" "}
        <span className="font-mono">Lincoln Kantet</span>{" "}
      </h1>
      <p className="text-base text-gray-600">
        An application that consumes the{" "}
        <a
          className="cursor-pointer text-blue-700"
          href="https://api.chucknorris.io/"
        >
          chucknorris.io
        </a>{" "}
        &nbsp; API. Technologies:
        <a
          className="cursor-pointer text-blue-700 mx-2"
          href="https://reactjs.org/"
        >
          React
        </a>
        ,
        <a
          className="cursor-pointer text-blue-700 mx-2"
          href="https://react-redux.js.org/"
        >
          Redux
        </a>
        ,
        <a
          className="cursor-pointer text-blue-700 mx-2"
          href="https://axios-http.com/docs/intro"
        >
          Axios
        </a>
        &
        <a
          className="cursor-pointer text-blue-700 mx-2"
          href="https://tailwindcss.com/docs"
        >
          Tailwindcss
        </a>
      </p>
    </div>
  );
}

export default Header;
