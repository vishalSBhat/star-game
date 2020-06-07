import React from "react";
import "../css/styles.css";
import mathFunctions from "../util/mathFunctions";
import Rules from "../static-components/Rules";
import LeftPlayArea from "./LeftPlayArea";
import RightPlayArea from "./RightPlayArea";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      timer: 10,
      availableNums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      selectedNums: [],
      randomStars: 9,
      selectedNumsSum: 0,
      gameStatus: "",
      test: "not received",
    };
  }

  update = async () => {
    const res = await fetch(
      "http://localhost:9000/home/test/vishalbhat97@gmail.com"
    );
    const data = await res.text();
    console.log(data);
    this.setState({ test: data });
  };
  startGame = () => {
    const { availableNums, randomStars } = this.state;
    const newRandomStar = mathFunctions.generateStars(
      availableNums,
      9,
      randomStars
    );
    this.setState({
      isActive: true,
      randomStars: newRandomStar,
    });
    this.timerInterval = setInterval(this.timerUpdate, 1000);
  };

  stopGame = (timer, randomStars, gameStatus) => {
    clearInterval(this.timerInterval);
    this.setState({
      isActive: false,
      timer,
      availableNums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      selectedNums: [],
      randomStars,
      selectedNumsSum: 0,
      gameStatus,
    });
  };

  timerUpdate = () => {
    const { timer, availableNums, selectedNums } = this.state;
    if (availableNums.length === 0 && selectedNums.length === 0)
      this.stopGame(timer, 0, "You Won");
    else if (timer > 0)
      this.setState({
        timer: timer - 1,
      });
    else this.stopGame(0, 0, "You Lost");
  };

  numberStatus = (value) => {
    const {
      selectedNums,
      availableNums,
      randomStars,
      selectedNumsSum,
    } = this.state;
    if (availableNums.includes(value)) return "available";
    else if (selectedNums.includes(value))
      return selectedNumsSum > randomStars ? "wrong" : "selected";
    return "used";
  };

  buttonClick = (val, status) => {
    if (!this.state.isActive || status === "used") return;
    let { selectedNums, availableNums, randomStars } = this.state;
    if (availableNums.includes(val)) {
      selectedNums.push(val);
      availableNums = availableNums.filter(
        (availableVal) => availableVal !== val
      );
    } else {
      availableNums.push(val);
      selectedNums = selectedNums.filter((selectedVal) => selectedVal !== val);
    }
    let selectedNumsSum = mathFunctions.sum(selectedNums);
    if (selectedNumsSum === randomStars) {
      selectedNums = [];
      selectedNumsSum = 0;
      randomStars = mathFunctions.generateStars(availableNums, 9, randomStars);
    }
    this.setState({
      selectedNums,
      availableNums,
      selectedNumsSum,
      randomStars,
    });
  };

  render() {
    return (
      <div className="layout">
        <p>{this.state.test}</p>
        <button onClick={this.update}>Click</button>
        <h1 className="title">iT mAY sTAR aLL oVER yOU </h1>
        <div className="playArea">
          <LeftPlayArea
            gameStatus={this.state.gameStatus}
            onClick={() => this.stopGame(10, 9, "")}
            stars={this.state.randomStars}
          />
          <RightPlayArea
            numberStatus={this.numberStatus}
            onClick={this.buttonClick}
          />
        </div>
        <span className="timer">TIMER : {this.state.timer} sec. . .</span>
        {this.state.gameStatus === "" && !this.state.isActive && (
          <a href="#test">
            <button className="btn btn-md btn-warning" onClick={this.startGame}>
              Start
            </button>
          </a>
        )}
        {this.state.isActive && (
          <button
            className="btn btn-md btn-danger"
            onClick={() => this.stopGame(10, 9, "")}
          >
            Exit
          </button>
        )}
        <Rules />
      </div>
    );
  }
}
