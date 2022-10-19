import { Post } from "../../../globalTypes/Post"

export const sortByDate = (gymClassDetails:Post[]) => {
    return gymClassDetails.slice().sort((a,b) => {
       return new Date(a.classDate).getTime() - new Date(b.classDate).getTime()
    })
}

export const removeExpiredClasses = (gymClassDetails:Post[]) => {
    return gymClassDetails.filter(item => new Date(item.classDate) >= new Date(Date.now()))
}