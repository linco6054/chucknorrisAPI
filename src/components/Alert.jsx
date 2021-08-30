import React from "react";

function Alert({ error }) {
  return (
    <div className="w-full h-screen py-12 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <div
        class="   bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-auto"
        role="alert"
      >
        <strong class="font-bold pr-4">Error! </strong>
        <span class="block sm:inline "> {error}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </span>
      </div>
    </div>
  );
}

export default Alert;
