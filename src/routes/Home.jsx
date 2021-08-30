import React from "react";
import { useSelector } from "react-redux";
import Alert from "../components/Alert";
import Spiner from "../components/Spiner";
import Card from "./Card";

function Home() {
  console.log(window.location.href);
  const info = useSelector((state) => state?.categories_list);
  const { loading, categories, error } = info;
  console.log("category" + { categories });
  return loading ? (
    <Spiner />
  ) : error ? (
    <Alert error={error} />
  ) : (
    <div>
      <h1 className="text-center text-2xl uppercase font-bold">
        Available categories
      </h1>
      <p className="text-gray-500 text-center mt-2 font-thin">
        Click to open a category Joke
      </p>
      <div className="container h-auto w-full overflow-hidden pl-12 lg:pl-24 pt-4 flex flex-wrap ">
        {categories?.map((cat, i) => (
          <Card key={i} cat={cat} />
        ))}
      </div>
    </div>
  );
}

export default Home;
