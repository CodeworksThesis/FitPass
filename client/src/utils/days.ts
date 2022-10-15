export const tomorrow = () => {
    const day = new Date().setHours(0, 0, 0)
    const tomorrow = new Date(day)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow
}
export const dayAfterTomorrow = () => {
    const dayAfterTomorrow = new Date(tomorrow())
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1)
    return dayAfterTomorrow
}
export const nextMonday = () => {
    const day = new Date().setHours(0, 0, 0)
    const nextMonday = new Date(day)
    nextMonday.setDate(
        nextMonday.getDate() + ((8 - nextMonday.getDay()) % 7 || 7)
    )
    return nextMonday
}
export const secondMonday = () => {
    const secondMonday = new Date(nextMonday())
    secondMonday.setDate(secondMonday.getDate() + 7)
    return secondMonday
}
