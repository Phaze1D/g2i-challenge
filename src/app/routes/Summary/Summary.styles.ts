import styled, { boxShadow } from 'styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 1rem;
`;


export const Title = styled.h1`
  text-align: center;
`;


export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
  word-break: break-word;
  box-shadow: ${boxShadow(2, true)};
`;


export const ItemInfo = styled.div`
  margin-top: 1rem;
`;


export const Button  = styled(Link)`
  display: block;
  text-align: center;
  padding: 0.5rem 2rem;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  margin: 2rem 0.5rem 0;
  box-shadow: ${boxShadow(2)};
  color: ${({theme}) => theme.colors.text};
`;
