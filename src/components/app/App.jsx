import { ContainerApp } from './AppStyled';
import React, { Component } from "react";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Section from "../sectionFeedback/Section";
import Statistics from "../statistics/Statistics";
import Notification from '../notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };



  handleIncrement = (e) => {
    this.setState(prevState => {
      return {
        [e]: prevState[e] + 1,
      };
    });
  };


  calculateTotal = () => Object.values(this.state).reduce((acc, value) => acc + value, 0);


  countPercentage() {
    const { good } = this.state;
    const total = this.calculateTotal();
    return Math.round((good * 100) / total);
  }

  render() {
    const total = this.calculateTotal();
    const percentage = this.countPercentage();

    return (
      <ContainerApp>
        <Section title="Please leave feedback">

          <FeedbackOptions
            onBtnClick={this.handleIncrement}
            options={[...Object.keys(this.state)]}
          />


          {this.calculateTotal() === 0 ? <Notification message="There is no feedback" /> :
            <Statistics
              goodValue={this.state.good}
              neutralValue={this.state.neutral}
              badValue={this.state.bad}
              total={total}
              percentage={percentage}
            />
          }

        </Section>
      </ContainerApp>
    )
  }
};
