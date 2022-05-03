import React from "react";
import Header from "./components/Header";
import "./styles/style.scss";

const app = () => {
  return (
    <div className="">
      <Header />
      <h1 className="text-blue">itigil na natin tong mga to kabayan</h1>
      <button className="btn-complement-light-yellow p-2 br-none">Hello</button>
    </div>
  );
};

export default app;
