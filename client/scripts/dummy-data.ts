
module.exports.Post = [
{
  id: 'kcskqkvekcekqmvk',
  studioName: 'Sebs Crib',
  exerciseName: 'Working out Back',
  desc: { type: String, required: true },
  duration: 60,
  location: 'Berlin',
  longitude: 988,
  latitude: 567,
  classDate: Date.now(),
  exerciseType: 'Back',
  price: '$10',
  postPic: 'cisnviefnivnjenktvn.png',
},

  {id: { type: String, required: true },
  studioName: { type: String, required: true },
  exerciseName: { type: String, required: true },
  desc: { type: String, required: true },
  duration: { type: Number, required: true },
  location: { type: String, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  classDate: { type: Date, required: false },
  exerciseType: { type: String, required: true },
  price: { type: String, required: true },
  postPic: { type: String, required: true },
  },
]

// module.exports.Favorites =[{
//   favorited:[userId:'jdsc', gymClassId:""]
// },

// {
//   favorited:[userId:'', gymClassId:""]
// },

// {
//   favorited:[userId:'', gymClassId:""]
// },

// ]

// module.exports.Bookings =[{
//   booked:[userId:'jdsc', gymClassId:""]
// },

// {
//   booked:[userId:'', gymClassId:""]
// },

// {
//   booked:[userId:'', gymClassId:""]
// },

// ]