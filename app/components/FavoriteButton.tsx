"use client";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

import { apiService } from "../services/apiService";

interface FavoriteButtonProps {
  id: string;
  is_favorite: boolean;
  markFavorite: (is_favorite: boolean) => void;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  id,
  is_favorite,
  markFavorite,
}) => {
  const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const response = await apiService.post(
      `/api/properties/${id}/toggle_favorite/`,
      {}
    );
    markFavorite(response.is_favorite);
  };

  return (
    <div
      onClick={toggleFavorite}
      className={`absolute top-2 right-2 ${is_favorite ? "text-airbnb" : "text-black/50"} hover:text-airbnb`}
    >
      {is_favorite ? <GoHeartFill size={30} /> : <GoHeart size={30} />}
    </div>
  );
};
