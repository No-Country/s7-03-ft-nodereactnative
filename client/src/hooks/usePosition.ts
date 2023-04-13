import { Accuracy, getLastKnownPositionAsync, getCurrentPositionAsync, requestForegroundPermissionsAsync, reverseGeocodeAsync } from 'expo-location';
import { useDispatch } from 'react-redux';
import { setPosition } from '../reduxFeature/user/userPositionSlice';

const usePosition = () => {
    const dispatch = useDispatch();

    const getLocationPermission = async () => {
        const { status } = await requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permiso denegado');
            return;
        }
        await getLastKnownPositionAsync().then(
            async (pos) => {
                if (pos){

                    console.log('pos',pos);                
                    await reverseGeocodeAsync({
                        longitude: pos.coords.longitude,
                    latitude: pos.coords.latitude,
                })
                .then( (geo)=>
                {console.log('geo', geo);
                    if (geo) {
                        dispatch(setPosition({
                            city: geo[0].city,
                            longitude: pos.coords.longitude,
                            latitude: pos.coords.latitude
                        }))    
                        
                    }}
                    )
                }
                    
            }
        );
    };
    return {getLocationPermission}
}

export default usePosition