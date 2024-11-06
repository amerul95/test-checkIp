import React from 'react'

export default async function page() {

    const response = await fetch(`${process.env.HOST_URL}/api/get-ip`,{
        method:'GET',
        headers:{
            'accept':'application/json'
        }
    })

    const ip = await response.json()
  return (
    <div>
      {ip}
    </div>
  )
}
