import React, { useEffect, useState } from "react";
import _ from "lodash";
import "./Carousel.scss";
const Carousel = (images) => {
	const [imgState, setImgState] = useState([]);
	const [currIndex, setIndex] = useState(0);

	const pokeimg = _.values(images)[0];

	const versionImgs = Object.keys(pokeimg.versions).map((img, key) => {
		// console.log("gen:", key+1 , Object.keys(_.values(pokeimg.versions[img])[0]), img)
		// eslint-disable-next-line
		const genImg = Object.keys(_.values(pokeimg.versions[img])[0]).map(
			// eslint-disable-next-line array-callback-return
			(i, key) => {
				if (
					typeof _.values(pokeimg.versions[img])[0][i] != "object" &&
					_.values(pokeimg.versions[img])[0][i] != null
				) {
					// console.log( i, key, _.values(pokeimg.versions[img])[0][i]);
					return _.values(pokeimg.versions[img])[0][i];
				}
			}
		);
		return genImg;
	});
	// console.log('jaja', pokeimg);
	const otherImgs = _.values(pokeimg.other).map((img, key) => {
		// console.log('img' , img, 'key', key, '.value')
		// eslint-disable-next-line
		const otherImg = _.values(img).map((i, key) => {
			if (i != null) {
				// console.log(i, key)
				return i;
			}
		});
		return otherImg;
	});
	// eslint-disable-next-line
	const spriteImg = Object.keys(pokeimg).map((img, key) => {
		// console.log('pokeimg', pokeimg[img]);
		if (pokeimg[img] != null && typeof pokeimg[img] != "object") {
			return pokeimg[img];
		}
	});

	useEffect(() => {
		setImgState((imgState) => [otherImgs, versionImgs, spriteImg]);
		setIndex(0);
		// eslint-disable-next-line
	}, [pokeimg]);
	// console.log('imgState', _.pull(_.flattenDeep(imgState), undefined));

	return (
		<div className="carousel">
			<div
				className="carouselInner"
				style={{
					backgroundImage: `url(${
						_.pull(_.flattenDeep(imgState), undefined)[currIndex]
					})`,
				}}
			>
				{currIndex > 0 ? (
					<div
						className="left"
						onClick={() => {
							setIndex(currIndex - 1);
						}}
					>
						<h1 style={{ fontSize: 20 }}> ◀️ </h1>
					</div>
				) : (
					<div className="left"></div>
				)}
				<div className="center">
					<h1 style={{ fontSize: 15 }}> {currIndex + 1} </h1>
				</div>
				{currIndex < _.pull(_.flattenDeep(imgState), undefined).length - 1 ? (
					<div
						className="right"
						onClick={() => {
							setIndex(currIndex + 1);
						}}
					>
						<h1 style={{ fontSize: 20 }}> ▶️ </h1>
					</div>
				) : (
					<div className="right"></div>
				)}
			</div>
		</div>
	);
};

export default Carousel;
