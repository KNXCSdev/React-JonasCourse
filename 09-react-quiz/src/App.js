// import DateCounter from "./DateCounter.js";

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Ready from "./Ready";

const initialState = {
  questions: [],

  //Loading,Error,Ready,Active,Finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "ready":
      return { ...state, questions: action.payload, status: "active" };

    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions } = state;

  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header></Header>

      <Main>
        {status === "loading" && <Loader></Loader>}
        {status === "error" && <Error></Error>}
        {status === "ready" && <Ready numQuestions={numQuestions}></Ready>}
      </Main>
    </div>
  );
}
