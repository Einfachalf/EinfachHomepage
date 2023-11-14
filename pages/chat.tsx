// pages/NeueSeite.tsx
import React from 'react';
import Container from 'components/Container'; 

const NeueSeite: React.FC = () => {
  return (
    <Container>
      <h1>Hallo von der neuen Seite!</h1>

      <iframe src="https://togetherai-einfachllamistral.hf.space" style={{
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    border: 0
}}></iframe>
      
    </Container>
  );
};

export default NeueSeite;
