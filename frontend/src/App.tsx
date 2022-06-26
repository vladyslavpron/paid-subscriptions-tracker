import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/navbar/Navbar";
import { useTypedDispatch } from "./hooks/useTypedDispatch";
import { AuthActionCreators } from "./store/reducers/auth/action-creators";
import { SubscriptionActionCreators } from "./store/reducers/subscription/action-creators";

function App() {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(AuthActionCreators.verifyUser());
    dispatch(SubscriptionActionCreators.fetchSubscriptions());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
