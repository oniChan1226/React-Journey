import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/oniChan1226')
    //     .then((res) => res.json())
    //     .then((res) => setData(res));
    // }, []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4 flex justify-center items-center flex-col gap-4'>Github Followers: {data.followers ? data.followers : "API issue"}
    <img src={data.avatar_url ? data.avatar_url : "API issue"} alt="GitPic" width={300} className='' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/oniChan1226');
    return response.json();
}