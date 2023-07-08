
import React from "react"
// grab any of the parameters we have in our url
import {useParams} from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    console.log(params)
    return <h1>Van detail page goes here</h1>
}
