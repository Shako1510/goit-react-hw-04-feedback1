import PropTypes from "prop-types";
import React from "react";
import { FeedbackList, ListItem, ListButton } from './FeedbackOptionsStyled'


const FeedbackOptions = ({ options, onBtnClick }) => {

    return <FeedbackList>
        {options.map((option, index) => {
            return (
                <ListItem key={index}>
                    <ListButton type='button' onClick={() => onBtnClick(option)}>{option}</ListButton>
                </ListItem>
            )
        })
        }
    </FeedbackList>
};

FeedbackOptions.propTypes = {
    onBtnClick: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default FeedbackOptions; 