import styled from '@emotion/styled';

export const FeedbackList = styled.ul` 
display: flex;
padding-left: 0;
margin: 0px 0px 24px 0px;
list-style: none;
`;

export const ListItem = styled.li` 
margin-right: 10px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
&:last-child {
    margin-right: 0px;
}
`;

export const ListButton = styled.button` 
padding: 8px 24px;
font-size: 16px;
font-weight: 600;
background-color: #ffffff;
min-width: 160px;
border-radius: 6px;
&:hover,
&:focus {
    background-color: blue;
    color: #ffffff;
}
`;