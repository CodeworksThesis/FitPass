export interface Post {
    id: string,
    studioName: string,
    exerciseName: string,
    desc: string,
    duration: number, // minutes
    longitude: number,
    latitude: number,
    classDate: Date,
    exerciseType: string,
    price: string,
    postPic: string
}