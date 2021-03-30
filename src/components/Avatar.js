import React from 'react'
import Image from 'react-bootstrap/Image'

export default function Avatar(props) {
    return (
        <div>
          <Image style ={{height: "125px"}} src={ props.me } alt="error loading img" roundedCircle />
        </div>
    )
}
