import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
  padding: 50px 20px;
  background-color: #fff;
  text-align: left;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SearchButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
  display: block;
`;

const InputSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const InfoSection = styled.div`
  margin-top: 50px;
  text-align: left;
`;

const SubTitle = styled.h4`
  color: #6c63ff;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  margin-top: 30px;
`;

const LargeImage = styled.img`
  width: 100%;
  border-radius: 10px;
  grid-row: span 2;
`;

const SmallImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const PropertiesSection = () => {
  return (
    <Section>
      {/* Search Bar Section */}
      <SearchBar>
        <div>
          <Label>Locations</Label>
          <InputSelect>
            <option>Select your city</option>
            <option>City 1</option>
            <option>City 2</option>
          </InputSelect>
        </div>
        <div>
          <Label>Property Type</Label>
          <InputSelect>
            <option>Select property type</option>
            <option>Type 1</option>
            <option>Type 2</option>
          </InputSelect>
        </div>
        <div>
          <Label>Rent Range</Label>
          <InputSelect>
            <option>Select rent range</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </InputSelect>
        </div>
        <SearchButton>Search</SearchButton>
      </SearchBar>

      {/* Who We Are Section */}
      <InfoSection>
        <SubTitle>Who We Are</SubTitle>
        <Title>Assisting individuals locating the appropriate real estate.</Title>
        <Description>
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
        </Description>

        {/* Image Grid Section */}
        <ImageGrid>
          <LargeImage src={require('../images/building.jpg')} alt="Modern House" />
          <SmallImage src={require('../images/resorts.jpg')} alt="Apartment" />
          <SmallImage src={require('../images/city.jpg')} alt="Luxury Living" />
        </ImageGrid>
      </InfoSection>
    </Section>
  );
};

export default PropertiesSection;
