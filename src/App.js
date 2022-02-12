/* eslint-disable no-eval */
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  const [opr, setOpr] = useState();
  const [result, setResult] = useState();
  const [secondFlag, setSecondFlag] = useState(false);

  const clear = () => {
    setVal1("");
    setVal2("");
    setOpr("");
    setSecondFlag(false);
    setResult("");
  };

  const getNo = (val) => {
    setResult("");
    console.log(val.target.innerText);
    const data = val.target.innerText;
    if (secondFlag === false) {
      if (val1 === 0) {
        setVal1(data);
      } else {
        setVal1(data + val1);
      }
    } else {
      if (val2 === 0) {
        setVal2(data);
      } else {
        setVal2(data + val2);
      }
    }
  };

  const getOpr = (val) => {
    console.log(val.target.innerText);
    setSecondFlag(true);
    setOpr(val.target.innerText);
  };

  const count = () => {
    let res;
    if (opr === "/") {
      res = eval(val1) / eval(val2);
      setResult(res);
    } else if (opr === "-") {
      res = eval(val1) - eval(val2);
      setResult(res);
    } else if (opr === "+") {
      res = eval(val1) + eval(val2);
    }
    setVal1("");
    setVal2("");
    setOpr("");
    setSecondFlag(false);
    setResult(res);
    sendToServer(res);
  };

  const sendToServer = (val) => {
    axios.defaults.baseURL = 'http://localhost:4000/';
    axios
      .get("/calcyResult/"+val)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  };

  useEffect(() => {
    clear();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3>Calculator</h3>
          </div>
          <div className="col-6 offset-3 text-center">
            <label>{result}</label>
            <label>{val2}</label>
            <label>{opr}</label>
            <label>{val1}</label>
          </div>
          <div className="col-6 offset-3 text-center">
            <button
              onClick={clear}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              Clear
            </button>
            <button
              onClick={getOpr}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              /
            </button>
          </div>
          <div className="col-6 offset-3 text-center">
            <button
              onClick={getNo}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              7
            </button>
            <button
              onClick={getNo}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              8
            </button>
            <button
              onClick={getNo}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              9
            </button>
            <button
              onClick={getOpr}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              -
            </button>
          </div>
          <div className="col-6 offset-3 text-center">
            <button
              onClick={getNo}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              4
            </button>
            <button
              onClick={getNo}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              5
            </button>
            <button
              onClick={getNo}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              6
            </button>
            <button
              onClick={getOpr}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              +
            </button>
          </div>
          <div className="col-6 offset-3 text-center">
            <button
              onClick={getNo}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              1
            </button>
            <button
              onClick={getNo}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              2
            </button>
            <button
              onClick={getNo}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              3
            </button>
            <button
              onClick={count}
              className="text-white p-3 m-2 bg-primary border-0"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
