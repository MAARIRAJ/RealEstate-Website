import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const PropertyCard = ({ image, title, description }) => (
  <CardWrapper>
    <Image src={image} alt={title} />
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Content>
  </CardWrapper>
);

export default PropertyCard;
