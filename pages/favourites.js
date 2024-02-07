import React from "react";
import PostsList from "@/components/PostsList";

const FavoritesPage = () => {
  return (
    <div>
      <PostsList isFavorite={true} />
    </div>
  );
};

export default FavoritesPage;
