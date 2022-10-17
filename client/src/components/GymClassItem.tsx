import React, { useState, useEffect } from "react";
import { formatDate, formatTime } from "../utils/time";
import { Link } from "react-router-dom";
import { Post } from "../../../globalTypes/Post";
import { addFavorites, deleteFavorite, getGymClass, getFavoritesDetails } from "../utils/api.service";
import { FavoritesType, useGymClass } from "../hooks/useGymClass";
import { isFavorite } from "../utils/LikeButton";

// copy this
export default function GymClassItem(post: Post) {
  const [toggle, setToggle] = useState(false);
  const { exerciseName, id, studioName, postPic, classDate } = post;

  const { favorites, userId, favoriteGymClassDetails, setFavorites,  setFavoriteGymClassDetails } =
    useGymClass();

    // console.log({favorites})

  //setFavorites()

  // const newFavorites = favorites.favorited[0].gymClassId.push(id)
  // console.log(newFavorites)

  const handleClick =  () => {
    if (userId) {
      const newFavorites = { ...favorites } as FavoritesType;
      console.log(isFavorite(favoriteGymClassDetails, id));

      if (!isFavorite(favoriteGymClassDetails, id)) {
        // double check that isFavorite is working as expected

        //newFavorites.favorited[0].gymClassId.push(id)
        addFavorites(userId, id) // check what is happening here is correct
          .then((data) => {
            setFavorites(data);
          }) // check this is working as expected
          .catch((e) => console.log(e));
          getFavoritesDetails(userId)
            .then(data=> setFavoriteGymClassDetails(data))
            .catch(e=> console.log(e))

      } else {
        // newFavorites?.favorited[0]?.gymClassId.filter((item) => item !== id);
        const newFavorited = {...favorites} as FavoritesType // we tell typescript favorites can not be undefined
        newFavorited.favorited[0].gymClassId = newFavorited?.favorited[0]?.gymClassId.filter(
          (item) => item !== id
        );
        console.log({newFavorited});
        if (newFavorited) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
          setFavorites(newFavorited);
          deleteFavorite(userId, id)
            .then((data) => {console.log('deleteFavorited', data)
             setFavorites(data);
            //  if(data.favorited[0].gymClassId.length === 0 ){
            //     setFavoriteGymClassDetails([])
            //   }
            //   // @ts-nocheck
            //   data.favorited[0].gymClassId.forEach(item => {
            //    getGymClass(item)
            //      .then(data => {
            //        if(!favoriteGymClassDetails.filter(item => item.id === data.id).length){
            //        console.log('line 102')
            //        setFavoriteGymClassDetails(prev => [...prev, data])
            //        }
            //      })
            //      .catch((error) => console.log(error))
            //     })
            })

            getFavoritesDetails(userId)
            .then(data=> setFavoriteGymClassDetails(data))
            .catch(e=> console.log(e))


            // console.log({newFavorited});
      }
    }
  }
}



  console.log(isFavorite(favoriteGymClassDetails, id));

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
function item(item: any, arg1: (any: any) => void) {
    throw new Error("Function not implemented.");
}

