import React, { useState, useEffect } from "react";
import axiosInstance from "../pages/api/axios";
import PostCard from "./PostCard";
import styles from "../styles/PostCard.module.scss";

const PostsList = ({ isFavorite = false }) => {
  let values;
  try {
    if (typeof window !== "undefined") {
      values = JSON.parse(localStorage.getItem("favorites")) || [];
    }
  } catch (e) {
    console.error(e);
  }

  const [posts, setPostsList] = useState([]);
  const [favorites, setFavorites] = useState(values);
  const [users, setUsers] = useState([]);


  const getPostsList = async () => {
    try {
      const response = await axiosInstance.get("/products?limit=15");
      setPostsList(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getUsersList = async () => {
    try {
      const response = await axiosInstance.get("/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFavoriteClick = (postId) => {
    if (favorites.includes(postId)) {
      setFavorites(favorites.filter((id) => id !== postId));
    } else {
      setFavorites([...favorites, postId]);
    }
  };

  useEffect(() => {
    getPostsList();
    getUsersList();
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className={styles["posts-list"]}>
      {posts.map((post) => {
        if (isFavorite && !favorites.includes(post.id)) {
          return null;
        }
        const user = users.find((u) => u.id === post.id);
        return (
          <PostCard
            key={post.id}
            post={post}
            user={user}
            favorites={favorites}
            handleFavoriteClick={handleFavoriteClick}
          />
        );
      })}
    </div>
  );
};

export default PostsList;
