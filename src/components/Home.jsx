import React from 'react';
import styled from 'styled-components';
import imgHome from '../assets/img-home3.jpg';
import nono from '../assets/artnono.png'

const Container = styled.div`
  background-image: url(${imgHome});
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
  padding-top: 1rem;
`;

const Desc = styled.p`
  color: white;
  padding: 2rem;
  font-size: 1.5rem;
`;

const Image = styled.img `
width: 30rem;
`

const Home = () => {
  return (
    <Container>
      <Title>Bonjour à tous</Title>
      <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus delectus
        mollitia, velit autem rerum labore architecto! Beatae provident
        aspernatur adipisci vel architecto in ipsa quod consectetur. Blanditiis
        quo quidem dolor. Quidem ipsa distinctio dolores accusantium esse?
        Ducimus deleniti blanditiis voluptatem aliquam maxime, earum praesentium
        sed expedita, minima culpa rerum officiis!
      </Desc>
      <Image src={nono} alt='nono' />
    </Container>
  );
};

export default Home;
