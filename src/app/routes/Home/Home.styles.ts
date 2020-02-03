import styled, { boxShadow } from 'styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
`;

export const Description = styled.h3`
  font-size: 1.4rem;
  text-align: center;
  margin: auto 0;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  margin: 0 0.5rem;
  box-shadow: ${boxShadow(2)};
  color: ${({theme}) => theme.colors.text};
`;
