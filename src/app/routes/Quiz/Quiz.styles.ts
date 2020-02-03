import styled, { boxShadow } from 'styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding: 1rem 0 4rem;
`;

export const Label = styled.h2`
  padding: 1rem 0;
  text-align: center;
`;


export const Card = styled.div`
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${boxShadow(4, true)};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
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

  &.checked {
    box-shadow: ${boxShadow(2, true)};
  }
`;
