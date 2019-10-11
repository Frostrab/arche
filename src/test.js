import React, { useState } from 'react'
const List = () => {
  const [data] = useState([
    { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
  ])
  return (
    <ul>
      {data.map((item, id) => (
        <li key={id}>NAME : {item.name}</li>
      ))}
    </ul>
  )
}
export default List
