interface Props {
    latitude1: number;
    longitude1: number;
    latitude2: number;
    longitude2: number;
}

export const calculateDistance = ({
    latitude1,
    longitude1,
    latitude2,
    longitude2,
}: Props) => {
    const toRadian = (n: number) => (n * Math.PI) / 180;

    let lat2 = latitude2;
    let lon2 = longitude2;
    let lat1 = latitude1;
    let lon1 = longitude1;

    let R = 6371; // km
    let x1 = lat2 - lat1;
    let dLat = toRadian(x1);
    let x2 = lon2 - lon1;
    let dLon = toRadian(x2);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadian(lat1)) *
            Math.cos(toRadian(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return d;
};
