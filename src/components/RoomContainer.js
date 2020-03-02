import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'
import RoomFilter from './RoomFilter'

function RoomContainer({context}) {
const {loading, sortedRooms, rooms} = context;

if (loading) {
    return <Loading/>;
};

return (
    <>
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
    </>
)
}

export default withRoomConsumer(RoomContainer);










// import React from 'react'
// import RoomsFilter from './RoomFilter'
// import RoomList from './RoomList'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                 const {loading, sortedRooms, rooms} = value;
//                 if (loading) {
//                     return <Loading />
//                 }
//                 return  (
//                 <div>
//                     hello from rooms container
//                     <RoomsFilter rooms={rooms}/>
//                     <RoomList room={sortedRooms}/>
//                 </div>
//                 )
//                     }
//             }
//         </RoomConsumer>
      
//     )
// }
