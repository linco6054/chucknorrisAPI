import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "./redux/actions/categoriesActions";
import Header from "./components/Header";
import Joke from "./routes/Joke";
function App() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state?.categories_list?.categories);

  useEffect(() => {
    if (!categories) {
      console.log("No categories found");
      dispatch(fetchAllCategories());
    }
  }, [categories, dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:category" component={Joke} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
