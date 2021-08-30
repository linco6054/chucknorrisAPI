import React from "react";
import moment from "moment";
function JokeCard({ joke, category }) {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={joke.icon_url}
          alt={category}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-2xl font-semibold uppercase ">
          From {category} Category
        </h2>
        <p className="mt-2 text-gray-600">"{joke.value} 🤣😂🤣"</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {joke?.categories?.map((cat, i) => (
          <span
            key={i}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2"
          >
            #{cat}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className=" justify-start mt-4">
          <span className="text-black font-semibold"> Created-On:</span>
          <span className="text-gray-600 text-sm ml-2">
            {moment(joke.created_at).format("MMMM Do YYYY")}
          </span>
        </div>
        <div className=" justify-end mt-4">
          <a href={joke?.url} className="text-lg font-medium text-indigo-500">
            chucknorris.io
          </a>
        </div>
      </div>
    </div>
  );
}

export default JokeCard;
