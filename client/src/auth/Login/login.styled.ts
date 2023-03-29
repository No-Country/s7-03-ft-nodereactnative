import styled from 'styled-components/native';

interface ButtonProps {
    primary?: boolean;
}

export const View = styled.View`
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 0 20px 0 20px;
`;

export const Form = styled.View`
    margin: 20px;
    width: 100%;
`;

export const Label = styled.Text`
    font-size: 16px;
    margin-bottom: 5px;
`;

export const Input = styled.TextInput`
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
    background-color: ${(props) => (props.primary ? '#007bff' : 'green')};
    padding: 10px;
    border-radius: 4px;
    margin-top: 20px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    text-align: center;
`;
