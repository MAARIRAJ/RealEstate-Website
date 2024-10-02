import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  background-color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-around;
  margin-top: -50px; /* Overlap with Hero section */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Dropdown = styled.select`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <Dropdown>
        <option>Select your city</option>
        <option>New York</option>
        <option>Los Angeles</option>
        <option>San Francisco</option>
      </Dropdown>

      <Dropdown>
        <option>Select property type</option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>House</option>
      </Dropdown>

      <Dropdown>
        <option>Select rent range</option>
        <option>$500 - $1000</option>
        <option>$1000 - $1500</option>
        <option>$1500 - $2000</option>
      </Dropdown>

      <SearchButton>Search</SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
