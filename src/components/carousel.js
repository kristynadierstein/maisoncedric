import React from "react";

//import imagery
import Arrow from "../../static/images/ic--arrow-wt.svg"

class Carousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			images: [
				"https://dl.airtable.com/.attachments/6980bb650e703889360017209af08d86/e3b89a6f/mc-item-371-1.jpg",
        "https://dl.airtable.com/.attachments/16067542013f6aa1e071ca3c7338d04d/31c7ddbc/mc-item-371-2.jpg",
        "https://dl.airtable.com/.attachments/1f30f7cf79e0fd6e75c92d40afe6097e/de47bba5/mc-item-371-3.jpg",
			],
			currentIndex: 0,
			translateValue: 0
		}
	}

	goToPrevSlide = () => {
		if(this.state.currentIndex === 0)
			return;

		this.setState(prevState => ({
			currentIndex: prevState.currentIndex - 1,
			translateValue: prevState.translateValue + this.slideWidth()
		}))
	}

	goToNextSlide = () => {
			if(this.state.currentIndex === this.state.images.length - 1) {
					return this.setState({
							currentIndex: 0,
							translateValue: 0
					})
			}

			this.setState(prevState => ({
					currentIndex: prevState.currentIndex + 1,
					translateValue: prevState.translateValue + -(this.slideWidth())
			}));
	}

	slideWidth = () => {
			return document.querySelector('.slide').clientWidth
	}

	render() {
		const Slide = ({ image }) => {
			const styles = {
				backgroundImage: `url(${image})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: '50% 60%'
			}
			return <div className="slide" style={styles}></div>
		}

		const LeftArrow = (props) => {
			return (
				<div className="backArrow arrowLeft" onClick={props.goToPrevSlide}>
					< Arrow  />
				</div>
			);
		}

		const RightArrow = (props) => {
			return (
				<div className="nextArrow arrow" onClick={props.goToNextSlide}>
					< Arrow />
				</div>
			);
		}

		return (
				<div className="slider">
				<div className="slider-wrapper"
					style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: 'transform ease-out 0.45s'
					}}>
						{
							this.state.images.map((image, i) => (
								<Slide key={i} image={image} />
							))
						}
				</div>
				<div className="mb-carousel-arrows">
					<LeftArrow
					goToPrevSlide={this.goToPrevSlide}
					/>
					<RightArrow
					goToNextSlide={this.goToNextSlide}
					/>
				</div>
				</div>
		);
	}
}

export default Carousel
