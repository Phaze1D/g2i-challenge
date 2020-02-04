import styled, { boxShadow } from 'styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100vh;
  margin: 0 auto;
  max-width: 500px;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  text-align: center;
  padding: 1rem 0 4rem;
  opacity: 0.7;
`;

export const Label = styled.h2`
  padding: 1rem 0;
  text-align: center;
`;


export const Card = styled.div`
  padding: 1.5rem;
  word-break: break-word;
  border-radius: 8px;
  box-shadow: ${boxShadow(4, true)};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  margin: 0 0.5rem;
  box-shadow: ${boxShadow(2)};
  color: ${({theme}) => theme.colors.text};

  &:disabled {
    box-shadow: none;
    opacity: 0.5;
  }

  &:active {
    box-shadow: ${boxShadow(2, true)};
  }
`;
