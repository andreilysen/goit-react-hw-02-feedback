import React, { Component } from "react";
import Section from "./components/Section";
import ButtonFeedback from "./components/ButtonFeedback";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  Increment = (e) => {
    this.setState((prevState) => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
    // if (e.target.name === "good") {
    //   this.setState((prevState) => ({
    //     good: prevState.good + 1,
    //   }));
    // }
    // if (e.target.name === "neutral") {
    //   this.setState((prevState) => ({
    //     neutral: prevState.neutral + 1,
    //   }));
    // }
    // if (e.target.name === "bad") {
    //   this.setState((prevState) => ({
    //     bad: prevState.bad + 1,
    //   }));
    // }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <ButtonFeedback increment={this.Increment} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              total={this.countTotalFeedback()}
              goodPercentage={this.countPositiveFeedbackPercentage()}
              state={this.state}
            />
          ) : (
            <Notification message={"No feedback given"} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
