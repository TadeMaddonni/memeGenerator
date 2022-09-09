import meme from "../assets/memeimg.png";
import memesData from "../data/data.js";
import React from "react";
function Form() {
	const [meme, setMeme] = React.useState({
		topText: " ",
		bottomText: " ",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

	function handleTextChange(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				[name]: value,
			};
		});
	}

	function getMemeImage() {
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	return (
		<div className="container">
			<div className="formContainer">
				<div action="" className="form">
					<div className="inputsContainer">
						<input
							type="text"
							className="formInput"
							placeholder="Top text"
							name="topText"
							value={meme.topText}
							onChange={handleTextChange}
						/>
						<input
							type="text"
							className="formInput"
							placeholder="Bottom text"
							name="bottomText"
							value={meme.bottomText}
							onChange={handleTextChange}
						/>
					</div>

					<button onClick={getMemeImage} className="formBtn">
						{" "}
						Get a new meme image
					</button>
				</div>

				<div className="memeContainer">
					<img src={meme.randomImage} alt="" />
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</div>
			</div>
		</div>
	);
}

export default Form;
