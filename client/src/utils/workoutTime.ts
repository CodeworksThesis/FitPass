interface GymClassItemProps {
    classDate:Date,
    duration: number,
}


export const calculateWorkoutTime =  (userClasses:GymClassItemProps[]) => {
    let classDuration = 0;
    userClasses.map((item) => {
        classDuration+=item.duration;
    })
    const hours = Math.floor(classDuration / 60);
    const minutes = classDuration % 60;
    return hours + 'H ' + minutes + 'M';
}