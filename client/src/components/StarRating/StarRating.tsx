import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native'
import { colors } from '../../constants';

export interface StarRatingProps {
	rating: number
}

const StarRating : React.FC<StarRatingProps> = ({rating}) => {
	const fullStars = Math.floor(rating);

    const halfStars = Math.ceil(rating - fullStars);

    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FontAwesome key={i} name="star" size={15} color={colors.primary} />);
    }

    for (let i = 0; i < halfStars; i++) {
        stars.push(
            <FontAwesome
                key={fullStars + i}
                name="star-half-empty"
                size={15}
                color={colors.primary}
            />
        );
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <FontAwesome
                key={fullStars + halfStars + i}
                name="star-o"
                size={15}
                color={colors.grey}
            />
        );
    }

	return <View  style={{display: 'flex', flexDirection: 'row'}}>{stars.map((star) => star)}</View>;
};

export default StarRating;
