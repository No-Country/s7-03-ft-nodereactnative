import styled from 'styled-components/native';

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${props => (props.primary ? '#007bff' : 'red')};
  padding: 10px;
  border-radius: 5px;
`;