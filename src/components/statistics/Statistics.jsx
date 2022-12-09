import PropTypes from 'prop-types';
import React from 'react';
import { StatisticsText, StatisticsTitle } from './StatisticsStyled';


const Statistics = ({ goodValue, neutralValue, badValue, total, percentage }) => (
    <div>
        <StatisticsTitle >Statistics</StatisticsTitle >
        <StatisticsText>Good: {goodValue}</StatisticsText>
        <StatisticsText>Neutral: {neutralValue}</StatisticsText>
        <StatisticsText>Bad: {badValue}</StatisticsText>
        <StatisticsText>Total: {total}</StatisticsText>
        <StatisticsText>Positive feedback: {percentage} % </StatisticsText>
    </div>
);


Statistics.propTypes = {
    goodValue: PropTypes.number,
    neutralValue: PropTypes.number,
    badValue: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.number,
};

export default Statistics;