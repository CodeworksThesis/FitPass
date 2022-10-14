
export interface Booking {
  userId: string,
  gymClassId: string[],
}
export default interface Bookings {
  booked: Booking[],
}