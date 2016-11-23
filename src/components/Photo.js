import React, { Component } from 'react'

const Photo = (props) => {
	const caption = (props.photo.quote) ? (
		<figcaption>
			{props.photo.caption}<br/>
			{props.photo.location}<br/>
			{props.photo.quote.text}<br/>
			{props.photo.quote.author}<br/>
		</figcaption>
		) : (
		<figcaption>
		{props.photo.caption}<br/>
		{props.photo.location}
		</figcaption>
		)

	return (
		<figure>
			<img src={props.photo.imgSrc}/>
			{caption}
		</figure>
)}

	export default Photo
