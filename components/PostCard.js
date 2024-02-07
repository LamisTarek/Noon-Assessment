import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/PostCard.module.scss";

const PostCard = ({ post, user, favorites, handleFavoriteClick }) => {
  return (
    <div className={styles["post-card"]} key={post.id}>
      <div className={styles["post-user"]}>
        <img src={user?.image} alt={user?.name} />
        <span>
          {user?.firstName} {user?.lastName}
        </span>
      </div>
      <div className={styles["post-image-wrapper"]}>
        <img src={post.images[0]} alt={post.title} />
        <div className={styles["post-overlay"]}>
          <p>{post.title}</p>
          <h4>$ {post.price}</h4>
          <div className={styles["heart-icon"]}>
            <FontAwesomeIcon
              icon={faHeart}
              color={favorites.includes(post.id) ? "red" : "#045cc0"}
              onClick={() => handleFavoriteClick(post.id)}
            />
          </div>
        </div>
      </div>
      <div className={styles["post-details"]}>
        <div className={styles["actions"]}>
          <FontAwesomeIcon icon={faHeart} />
          <span className={styles["likes-count"]}> 43 Likes</span>
        </div>
        <p>{post.description}</p>
        <div className={styles["hashtags"]}>
          <span className={styles["hashtag"]}>
            #{post.brand} #{post.category}
          </span>
        </div>
        {/* Input field for viewing comments */}
        <div className={styles["comments-section"]}>
          <span>View all 29 comments</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
