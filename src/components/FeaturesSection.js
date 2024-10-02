import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import { FaPiggyBank, FaHome } from 'react-icons/fa';

const Section = styled.section`
  background-color: #f5f5f5;
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #6c63ff;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  gap: 20px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  }
`;

const FeaturesSection = () => {
  return (
    <Section>
      <SubTitle>| Why Choose Us |</SubTitle>
      <Title>Why Choose Our Properties Of Real Estate Industries</Title>
      <CardsWrapper>
        <FeatureCard
          icon={<FaPiggyBank />}
          title="Budget Friendly"
          description="Distinctively re-engineer revolutionary meta-services and premium."
        />
        <FeatureCard
          icon={<FaHome />}
          title="Property Insurance"
          description="Distinctively re-engineer revolutionary meta-services and premium."
        />
        <FeatureCard
          icon={<FaPiggyBank />}
          title="High ROI"
          description="Distinctively re-engineer revolutionary meta-services and premium."
        />
      </CardsWrapper>
    </Section>
  );
};

export default FeaturesSection;


































