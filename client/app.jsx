import { ApiContext } from './utils/api_context';
import { useApi } from './utils/use_api';
import { Question1 } from './components/question1/_question_1';
import { Question2 } from './components/question2/_question_2';
import { Question3 } from './components/question3/_question_3';
import { Question4 } from './components/question4/_question_4';
import { Question5 } from './components/question5/_question_5';
import { Wrapper } from './components/common/wrapper';
import { Question } from './components/common/question';
import './app.css';

export const App = () => {
  // api instance
  const api = useApi();

  return (
    <ApiContext.Provider value={api}>
      <Wrapper>
        <Question title="Question 1: React Basics">
          <Question1 />
        </Question>
        <Question title="Question 2: Lists of Data">
          <Question2 />
        </Question>
        <Question title="Question 3: Simple API Calls">
          <Question3 />
        </Question>
        <Question title="Question 4: Basic Controller Endpoints">
          <Question4 />
        </Question>
        <Question title="Question 5: Creating and Updating">
          <Question5 />
        </Question>
      </Wrapper>
    </ApiContext.Provider>
  );
};
