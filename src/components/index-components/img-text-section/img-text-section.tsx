import React from 'react';
import './img-text-section.css';

// Importe a imagem que você deseja usar
import correndoImage from '../../../assets/correndo.jpg';

// Valores padrão para o componente
const defaultTitle = "Título Padrão";
const defaultDescription = "Descrição padrão do conteúdo exibido.";
const defaultImage = correndoImage;

const ImageTextSection: React.FC = () => {
  return (
    <div className="image-text-section">
      <div className="text-content">
        <h2 className="title">{defaultTitle}</h2>
        <p className="description">{defaultDescription}</p>
      </div>
      <div className="image-content">
        <img src={defaultImage} alt={defaultTitle} className="image" />
      </div>
    </div>
  );
};

export default ImageTextSection;
