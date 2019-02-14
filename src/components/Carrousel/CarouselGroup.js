import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import { ResponsiveImage,  } from "../index.components";
import BoxTitle from "../HeadTitle/BoxTitle";
const imagesHomeOne = {
  small: './assets/images/home_one_340.jpg',
  medium: './assets/images/home_one_768.jpg',
  large: './assets/images/home_one_1280.jpg',
  xlarge: './assets/images/home_one_3200.jpg'
}

const imagesHomeTwo = {
  small: './assets/images/home_two_340.jpg',
  medium: './assets/images/home_two_768.jpg',
  large: './assets/images/home_two_1280.jpg',
  xlarge: './assets/images/home_two_3200.jpg'
}

const imagesHomeThree = {
  small: './assets/images/home_three_340.jpg',
  medium: './assets/images/home_three_768.jpg',
  large: './assets/images/home_three_1280.jpg',
  xlarge: './assets/images/home_three_3200.jpg'
}

const items = [
  {
    images: imagesHomeOne,
    altText: 'Innovate',
    caption: 'Innovate',
    subtitle: 'we never stop to learn to offer the best for your project'
  },
  {
    images: imagesHomeThree,
    altText: 'Create',
    caption: 'Create',
    subtitle: 'we believe together can create what we want'
  },
  {
    images: imagesHomeTwo,
    altText: 'Build',
    caption: 'Build',
    subtitle: 'we provide for you the best technology in the market'
  }
];
const HeadTitleCarousel = styled(BoxTitle)`
    position: absolute;
    left: 5%;
    top: 80px;
    @media (min-width: 576px) {
      left: 22%;
      top: 200px;
    }
`;
const ResponsiveImageW100 = styled(ResponsiveImage)`
    width: 100vw;
    height: 100vh;
    @media (min-width: 576px) {
      width: 100%;
    }
`;
class CarouselGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, playing: true  };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item, idx) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={idx + 13}
        >
          <HeadTitleCarousel title={item.caption} subtitle={item.subtitle}/>
          <ResponsiveImageW100 images={item.images}/>
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        keyboard={false}
        
        ride="carousel"
        interval={this.state.playing ? 7000 : false}
        slide={true}
      >
        
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselGroup;