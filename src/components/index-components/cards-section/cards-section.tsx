import React from 'react';
import './cards-section.css';

interface CardProps {
  image: string;
  title: string;
  description: string;
}


import correndoImage from '../../../assets/correndo.jpg'

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

const CardSection: React.FC = () => {
  const cards = [
    {
      image:  correndoImage,
      title: 'Card 1',
      description: 'This is the description for card 1.',
    },
    {
      image:  correndoImage,
      title: 'Card 2',
      description: 'This is the description for card 2.',
    },
    {
    image:  correndoImage,
      title: 'Card 3',
      description: 'This is the description for card 3.',
    },
  ];

  return (
    <div className="card-section">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardSection;
