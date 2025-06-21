import React from 'react';
import { Star } from 'lucide-react';
import './Rating.scss';

interface RatingProps {
    rating: number;
    maxRating?: number;
    size?: 'small' | 'medium' | 'large';
    showNumber?: boolean;
    readonly?: boolean;
    onRatingChange?: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({
    rating,
    maxRating = 5,
    size = 'medium',
    showNumber = false,
    readonly = true,
    onRatingChange
}) => {
    const handleStarClick = (starRating: number) => {
        if (!readonly && onRatingChange) {
            onRatingChange(starRating);
        }
    };

    const stars = Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= rating;
        const isHalfFilled = !isFilled && starValue - 0.5 <= rating;

        return (
            <Star
                key={index}
                className={`star ${size} ${isFilled ? 'filled' : isHalfFilled ? 'half-filled' : 'empty'} ${!readonly ? 'clickable' : ''}`}
                onClick={() => handleStarClick(starValue)}
                size={size === 'small' ? 16 : size === 'medium' ? 20 : 24}
            />
        );
    });

    return (
        <div className="rating">
            <div className="stars">
                {stars}
            </div>
            {showNumber && (
                <span className="rating-number">
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
};

export default Rating; 