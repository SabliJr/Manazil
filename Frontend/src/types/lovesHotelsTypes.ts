export interface iLovedHotels {
  thumbnail: string;
  title: string;
  location: string;
  distanceFromCenter: number;
  preferredBadge: boolean;
  promotedBadge: boolean;
  price: {
    currency: string;
    value: number;
  };
  rating: {
    score: number;
    scoreDescription: string;
    reviews: number;
  };
  link: string;
}