import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Badge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${(props) => (props.sale ? '#ff3860' : '#3273dc')};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const InfoWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const PropertyCard = ({ image, title, description, badges }) => {
  return (
    <Card>
      <ImageWrapper>
        <Image src={image} alt={title} />
        {badges.map((badge, index) => (
          <Badge key={index} sale={badge === 'Sale'}>
            {badge}
          </Badge>
        ))}
      </ImageWrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoWrapper>
    </Card>
  );
};

export default PropertyCard;
