import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li className={css.list}>Good: {good}</li>
      <li className={css.list}>Neutral: {neutral}</li>
      <li className={css.list}>Bad: {bad}</li>
      <li className={css.list}>Total: {total}</li>
      <li className={css.list}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

// export const countTotalFeedback = (good, neutral, bad) => {
//       return good + neutral + bad;
//     };

//     export const countPositiveFeedbackPercentage = (good, total) => {
//       let summ = Math.round((good * 100) / total);
//       if (!summ) {
//         summ = 0;
//       }
//       return summ;
//     };

//  export const Statistics = ({ state }) => {
//   const { good, neutral, bad } = state;

//   const total = countTotalFeedback(good, neutral, bad);
//   const positivePercentage = countPositiveFeedbackPercentage(good, total);

//     return <ul>
//     <Feedback>Good:<Count>{good}</Count></Feedback>
//     <Feedback>Neutral:<Count>{neutral}</Count></Feedback>
//     <Feedback>Bad:<Count>{bad}</Count></Feedback>
//     <Feedback>Total feedbacks:<Count>{total}</Count></Feedback>
//     <Feedback>Positive percentage:<Count>{positivePercentage}%</Count></Feedback>
// </ul>
// };
