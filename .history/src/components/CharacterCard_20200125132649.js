import React from "react";
import styled from 'styled-components';

const Contain = styled.div`
  font-size: 1.5rem;
  color: black;
  margin-bottom: 2rem;
  border: 0.25rem solid black;
`
const Div = styled.div`
  display: flex;
  justify-content: center;
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
