import { ContainerApp } from './AppStyled';
import { useState } from "react";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Section from "../sectionFeedback/Section";
import Statistics from "../statistics/Statistics";
import Notification from '../notification/Notification';


export function App() {


  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = (feedbackName) => {
    switch (feedbackName) {
      case "good":
        return setGood((prev) => prev + 1);
      case "neutral":
        return setNeutral((prev) => prev + 1);
      case "bad":
        return setBad((prev) => prev + 1);
      default:
        return;
    }
  };


  const countPercentage = () => {
    const total = calculateTotal();
    return Math.round((good * 100) / total);

  }

  const calculateTotal = () => {
    return good + neutral + bad
  };

  const options = ['good', 'neutral', 'bad'];

  return (

    <ContainerApp>
      <Section title="Please leave feedback">

        <FeedbackOptions
          onBtnClick={handleIncrement}
          // onBtnClick={() => handleIncrement()}
          options={options}
        />
        {calculateTotal() === 0 ? <Notification message="There is no feedback" /> :
          <Statistics
            goodValue={good}
            neutralValue={neutral}
            badValue={bad}
            total={calculateTotal()}
            percentage={countPercentage()}
          />
        }
      </Section>
    </ContainerApp >
  )
};

export default App;

  // export class App extends Component {
  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0
  //   };

  //   handleIncrement = (e) => {
  //     this.setState(prevState => {
  //       return {
  //         [e]: prevState[e] + 1,
  //       };
  //     });
  //   };

  //   calculateTotal = () => Object.values(this.state).reduce((acc, value) => acc + value, 0);

  //   countPercentage() {
  //     const { good } = this.state;
  //     const total = this.calculateTotal();
  //     return Math.round((good * 100) / total);
  //   }
