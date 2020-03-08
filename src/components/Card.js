import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function MyCard(props) {
    var sty = { minHeight: "286px", maxHeight: "286px"}

    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: 'darkslategrey', color: 'white' }}>
                <Card.Img style={ sty } variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{ props.title }</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <Button
                        target="_blank"
                        variant="success"
                        style={{ alignContent: "Center" }}
                        href={props.link} >
                        {props.btn}
          </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
