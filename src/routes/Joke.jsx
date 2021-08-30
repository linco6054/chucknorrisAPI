import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import Alert from "../components/Alert";
import Spiner from "../components/Spiner";
import { getJokeAction } from "../redux/actions/categoriesActions";
import JokeCard from "./JokeCard";

function Joke(props) {
  const { category } = useParams();
  const dispatch = useDispatch();
  const jokesInfo = useSelector((state) => state.joke);
  const { joke, loading, error } = jokesInfo;
  const history = useHistory();
  console.log({ category });
  useEffect(() => {
    if (category) {
      dispatch(getJokeAction(category));
    }
  }, [category, dispatch]);

  if (!category) {
    return <Redirect to="/" />;
  } else {
    return error ? (
      <Alert error={error} />
    ) : loading ? (
      <Spiner />
    ) : (
      <>
        <div className="flex justify-around mt-4">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => history.push("/")}
          >
            Home
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => dispatch(getJokeAction(category))}
          >
            Load more...
          </button>
        </div>
        <div className="mx-auto w-sreen h-screen ">
          <JokeCard category={category} joke={joke} />
        </div>
      </>
    );

    // jsdjkcnhjd
  }
}

export default Joke;
