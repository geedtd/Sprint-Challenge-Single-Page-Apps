import React from 'react';
import { Link } from 'react-router-dom';    
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-around;
width: 200px;
`
const Button = styled.button`
text-decoration: none;
border-radius: 3px;
height: 40px;

color: black;
background-color: lightblue;
`
export default function TabBar() {
    return (
        <Container>
            <Link to='/'><Button>Welcome</Button></Link>
            <Link to='/character'><Button>Characters</Button></Link>
        </Container>
    )
}