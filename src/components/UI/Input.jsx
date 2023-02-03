import React from 'react';
import styled from 'styled-components';

const Input = ({...rest}) => {
    return (
       <StyledInput {...rest} type="number" />
    );
};

export default Input;

const StyledInput = styled.input`
    min-width: 200px;
    height: 50px;
    border: 2px solid #351c75;
    padding: 5px;
    margin-bottom: 20px;
    font-size: 20px;
`