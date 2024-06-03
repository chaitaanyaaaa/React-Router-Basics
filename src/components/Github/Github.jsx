import React, { useEffect,useState } from 'react'

function Github() {

    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/chaitaanyaaaa')
        .then((res)=>(res.json()))
        .then(data=>setData(data))
    })
  return (
    <div className="text-5xl text-center text-white bg-gray-400 text-pretty">
    Github Followers: {data.followers}
    <img className="center"src={data.avatar_url} alt="myimage" />
    </div>
  )
}

export default Github