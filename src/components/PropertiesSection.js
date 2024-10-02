import React from 'react';
import styled from 'styled-components';
import PropertyCard from './PropertyCard';

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px;
  justify-items: center;
`;



const PropertiesSection = () => {
  return (
    <Section>
      <SubTitle>| Latest Property |</SubTitle>
      <Title>Properties for sale in your favorite area</Title>
      <CardsWrapper>
        <PropertyCard
          image={require('../images/modern house.webp')}
          title="Modern House"
          description="A beautiful modern house with a large pool and garden."
          badges={['Hot offer', 'Sale']}
        />
        <PropertyCard
          image={require('../images/luxury villa.avif')}
          title="Luxury Villa"
          description="A luxurious villa with sea view and private beach."
          badges={['Hot offer']}
        />
        <PropertyCard
          image={require('../images/apartment.jpeg')}
          title="Apartment"
          description="A modern apartment in the city center."
          badges={['Sale']}
        />
      </CardsWrapper>
    </Section>
  );
};

export default PropertiesSection;
