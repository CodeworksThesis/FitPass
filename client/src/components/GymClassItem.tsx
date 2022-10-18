import React from "react";
import { formatDate, formatTime } from "../utils/time";
import { Link } from "react-router-dom";
import { Post } from "../../../globalTypes/Post";
import { addFavorites, deleteFavorite } from "../utils/api.service";
import { useGymClass } from "../hooks/useGymClass";
import { isFavorite } from "../utils/LikeButton";

// copy this
export default function GymClassItem(post: Post) {
  const { exerciseName, id, studioName, postPic, classDate } = post;

  const { userId, favoriteGymClassDetails, setFavorites,  setFavoriteGymClassDetails } =
    useGymClass();

  const handleClick =  () => {
    if (userId) {
      if (!isFavorite(favoriteGymClassDetails, id)) {
        // update favoritegymclassdetails
        if(!favoriteGymClassDetails.filter(item => item.id === id)) {
          setFavoriteGymClassDetails([...favoriteGymClassDetails, post]) 
        }
        addFavorites(userId, id) // check what is happening here is correct
          .then((data) => {
            setFavorites(data);
          }) // check this is working as expected
          .catch((e) => console.log(e));

      } else {
        // newFavorites?.favorited[0]?.gymClassId.filter((item) => item !== id);
        setFavoriteGymClassDetails(favoriteGymClassDetails.filter(item => item.id != id))
        deleteFavorite(userId, id)
          .then((data) => {
            setFavorites(data);
          })
      }
    }
}


  return (
    <article className="rounded-2xl flex w-full overflow-hidden mt-[3%] h-[15rem]  hover:scale-105 transition delay-150 duration-300">
      <Link
        className="w-[40%] overflow-hidden cursor-pointer"
        to={`/gymclass/${id}`}
      >
        <img
          src={postPic}
          alt={exerciseName}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="flex flex-col gap-5 bg-[#6F87F5] w-[60%]">
        <header className="flex flex-1 bg-red flex-col text-white pt-4 pl-4 gap-2">
          <h2 className="text-2xl font-bold">{exerciseName}</h2>
          <p className="text-md">{studioName}</p>
          <p className="text-md">{formatDate(classDate)}</p>
          <p className="text-md">{formatTime(classDate)}</p>
        </header>
        {/* based on User Data */}
        <div className="flex justify-between mb-4">
          <div></div>
          <button className="flex w-10 h-10 mr-4" onClick={handleClick}>
            <img
              src={
                isFavorite(favoriteGymClassDetails, id)
                  ? "/heart-red.svg"
                  : "/heart-white.svg"
              }
              alt="heart"
            />
          </button>
        </div>
      </div>
    </article>
  );
}


