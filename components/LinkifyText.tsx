import React from "react";
import Link from "next/link";

const LinkifyText = ({textWithLink}: {textWithLink: string}) => {
	const urlRegex = /www\.\w+\.\w{2,}/g;
	const splitText = textWithLink.split(urlRegex);


	const textWithLinkElement = splitText.map((text, index) => {
		// if (text.match(urlRegex)) {
		// 	return <span key={index}>{text}</span>;
		// }
		return <span key={index}>{text}</span>;
	});

	return <p>{textWithLinkElement}</p>;
};

export default LinkifyText;
