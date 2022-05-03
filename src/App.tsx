import React from "react";
import Header from "./components/Header";
import "./styles/style.scss";

const app = () => {
  const names = ["philip", "daylinda", "echavez", "albert"];

  return (
    <div>
      <div className="navbar mb-r justify-space-between">
        <div className="container">
          <h2 className="site-title">Shinobi CSS</h2>
          <p>a Lightweight sass Library for Devs</p>
        </div>
      </div>
      <div className="container responsive-test">
        <h2 className="mb-2">Grid System</h2>
        <div className="row gap-1 justify-content-end">
          {names.map((name) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-4 col-xl-6">
                <div className="card">
                  <h3 className="card-title">Hello {name}</h3>
                  <p className="card-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default app;
