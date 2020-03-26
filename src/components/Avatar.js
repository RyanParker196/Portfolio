import React from 'react'
import Image from 'react-bootstrap/Image'

export default function Avatar(props) {
    return (
        <div>
          <Image src={ props.me } alt="error loading img" roundedCircle />
        </div>
    )
}
