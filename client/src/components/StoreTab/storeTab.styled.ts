import styled from 'styled-components/native';

export const TabContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: 15px;
    margin: 20px;
    shadow-opacity: 1;
    shadow-radius: 5px;
    shadow-color: #000;
    shadow-offset: 10px 10px;
    border: 1px solid #a1a1a1;
    border-radius: 5px;
    background-color: #fff;
`;

export const LogoStore = styled.Image`
    flex: 1;
    aspect-ratio: 1/1;
    object-fit: contain;
    background-color: #fff;
    border-radius: 5px;
    margin-right: 15px;
`;

export const DataStoreWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 5;
    font-size: 0px;
`;

export const MainData = styled.View``;

export const StoreName = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const OtherData = styled.Text`
    color: #474747;
`;

export const SecondaryData = styled.View`
  display: flex;
  align-items: flex-end;
`;

export const StoreRatingWrapper = styled.View`
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;

export const StoreRatingNumber = styled.Text`
  margin-left: 5px;
  font-weight: bold;
  font-size: 15px;
`;

export const FavoriteIcon = styled.Text``;
