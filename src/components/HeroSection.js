import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/download.jpg'

const HeroWrapper = styled.div`
  position: relative;
  text-align: center;
  background-image: url(${backgroundImage}); 
  background-size: cover;
  background-position: center;
  height: 500px;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroText = styled.div`
  position: relative;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
`;

const MainText = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: inline-block;
  button {
    margin: 0 0.5rem;
    padding: 0.7rem 1.5rem;
    border: none;
    background-color: purple;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;

    &:first-child {
      background-color: #4CAF50; /* Rent Button */
    }
  }
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Overlay />
      <HeroText>
        <MainText>Discover Your New Home</MainText>
        <SubText>Find your dream property easily with HomeHaven</SubText>
        <ButtonGroup>
          <button>Rent</button>
          <button>Sale</button>
        </ButtonGroup>
      </HeroText>
    </HeroWrapper>
  );
};

export default HeroSection;
