import styled from 'styled-components/native';
import Constants from 'expo-constants';

const safeSpace = Constants.statusBarHeight + 5;

export const TabBarContainer = styled.View`
    width: 100%;
    margin: ${safeSpace}px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const TabBarIcon = styled.View``;
export const TabBarLogo = styled.Image``;
