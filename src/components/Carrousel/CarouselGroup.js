import React, { Component } from 'react';
import styled from 'styled-components'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { ResponsiveImage } from "../index.components";

const imagesHome = {
  small: './assets/images/home_one_300.jpg',
  medium: './assets/images/home_one_768.jpg',
  large: './assets/images/home_one_1280.jpg',
  xlarge: './assets/images/home_one_3200.jpg'
}

const items = [
  {
    images: imagesHome,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    images: imagesHome,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    images: imagesHome,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];
const ResponsiveImageW100 = styled(ResponsiveImage)`
    width: 100%;
`;
class CarouselGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
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
          key={idx}
        >
          <ResponsiveImageW100 images={item.images}/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
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