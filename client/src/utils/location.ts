import { Post } from "../../../globalTypes/Post"

export const isDisplayInfoWindow = (post: Post) => {
    if (
        !post.postPic ||
        !post.latitude ||
        !post.longitude ||
        !post.exerciseName ||
        !post.id
    ) {
        return false
    }
    return true
}
