import React from "react";
import { userIcon } from "../constants";

const Comments = ({ Comments }) => {
  // Check if Comments object is valid and has required properties

  // Destructure necessary properties from Comments object
  const {
    authorDisplayName,
    likeCount,
    authorProfileImageUrl,
    textDisplay,
    updatedAt,
    authorChannelUrl,
  } = Comments.snippet.topLevelComment.snippet;
  const { totalReplyCount } = Comments.snippet;
  //   console.log(authorDisplayName);

  //   console.log(Comments.snippet);

  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.abs(now - date);
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 7) {
      return date.toLocaleDateString(); // Return full date if more than a week ago
    } else if (days > 0) {
      return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else {
      return "just now";
    }
  }

  const timeAgoString = timeAgo(updatedAt);
  console.log(Comments);

  return (
    <div>
      <div className="flex py-4 gap-5">
        <img
          src={authorProfileImageUrl}
          alt="user icon"
          className="w-10 h-10 rounded-full"
        />
        <div className="">
          <div className="flex gap-4 py-2">
            {/* Display author's display name */}
            <h4>{authorDisplayName}</h4>
            <p>{timeAgoString}</p>
          </div>
          <p>{textDisplay}</p>
          <div className="flex gap-10 py-2">
            <h4>{likeCount} Likes</h4>
            <h4>Dislike </h4>
            <h4>Reply </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
