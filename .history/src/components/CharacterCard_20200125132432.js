import React from "react";
import styled from 'styled-components';

const Contain = styled.div`
  font-size: 1.5rem;
  color: blue;
  margin-bottom: 1rem;
  border: 1rem solid black;
`
const Div = styled.div`
  display: flex-wrap;
  justify-content: space-between;
`

export default function CharacterCard(props) {
  return (
    <Div>
      <Contain>
        <img src={props.image} alt="Rick and Morty 4L"/>
        <p>Name: {props.name}</p>
        <p>Status: {props.status}</p>
      </Contain>
    </Div>
  );
}
