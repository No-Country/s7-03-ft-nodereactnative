import styled from 'styled-components/native';

export const ShadowBox = styled.View`
    padding: 10px 20px;
    border-radius: 100px;
    overflow: hidden;
    margin: 0 auto;
`;

export const InputUbicacionWrapper = styled.View`
    border-radius: 100px;
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
`;

export const Input = styled.TextInput`
    position: relative;
    width: 100%;
`;

export const FakePlaceholderContainer = styled.View`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
`;

export const FakePlaceholderIcon = styled.View``;

export const FakaPlaceholderText = styled.Text`
    font-size: 25px;
    font-weight: 300;
`;
