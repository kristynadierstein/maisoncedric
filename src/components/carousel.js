import React from "react";

//import imagery
import Arrow from "../../static/images/ic--arrow-wt.svg"

class Carousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			images: [
				"https://picsum.photos/id/1/200/300",
        "https://picsum.photos/id/2/200/300",
        "https://picsum.photos/id/3/200/300",
        "https://picsum.photos/id/4/200/300",
        "https://picsum.photos/id/5/200/300",
        "https://picsum.photos/id/6/200/300",
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
