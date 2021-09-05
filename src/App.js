import React, { useState, useEffect } from "react";
import "./styles/styles.scss";
import Header from "./components/header";
import Togglebutton from "./components/button";
import Main from "./components/Mainstat";
import Table from "./components/table";
import Chart from "./components/charts";
import RecoveredChart from "./components/reccharts";
import DeceaseddChart from "./components/deccharts";
import Footer from "./components/footer";

import Jsoncontext from "./context/context";

const url = "https://data.covid19india.org/data.json";
const requestOptions = {
  method: "GET",
  redirect: "follow",
};

function App() {
  const [stateWise, setData] = useState();
  const [total, setTotal] = useState();
  const [flag, setToggle] = useState(0);

  useEffect(() => {
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((resp) => {
        for (let i = 1; i < 38; i++) {
          for (let j = 1; j < 38 - i; j++) {
            if (
              parseInt(resp.statewise[j].confirmed) <
              parseInt(resp.statewise[j + 1].confirmed)
            ) {
              var temp;
              temp = resp.statewise[j + 1];
              resp.statewise[j + 1] = resp.statewise[j];
              resp.statewise[j] = temp;
            }
          }
        }
        setData(resp.statewise);
        setTotal(resp.cases_time_series);
      });
  }, []);

  const handletoggle = (flag) => {
    setToggle(flag);
  };

  return (
    <Jsoncontext.Provider value={{ stateWise, total }}>
      <div className={flag ? "App-dark" : "App-light"}>
        <div className="header_wrapper row">
          <div className="col-9">
            <Header />
          </div>
          <div className="col-3">
            <Togglebutton func={handletoggle} />
          </div>
        </div>
        <Main />
        <Table />
        <Chart />
        <RecoveredChart />
        <DeceaseddChart />
        <Footer />
      </div>
    </Jsoncontext.Provider>
  );
}

export default App;
