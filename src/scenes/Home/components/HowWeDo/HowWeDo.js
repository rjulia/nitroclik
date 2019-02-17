import React from 'react';
import './HowWeDo.scss';
import { ResponsiveImage, HeadTitle } from "../../../../components/index.components";
import styled from 'styled-components';
import SquareHow from "./SquareHow";
import { Launch, Idea, Test} from "../../../../components/index.components";


const images = {
  small: './assets/images/how_we_do.jpg',
  medium: './assets/images/how_we_do.jpg',
  large: './assets/images/how_we_do.jpg',
  xlarge: './assets/images/how_we_do.jpg'
}


const ResponsiveImageW100 = styled(ResponsiveImage)`
    width: 100vw;
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    @media (min-width: 576px) {
      width: 100%;
    }
`;


const HowWeDo = () => {
  return (
    <div className="how-we-do justify-content-center d-flex">
        <ResponsiveImageW100 images={images}/>
        <div className="container how-we-do__container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center mb-3 mb-md-5">
              <HeadTitle title={'How we do'} color={'#FFA59E'} lineColor={'#FFA59E'}/>

            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
                <SquareHow 
                  icon={<Idea className={'icon'}/>} 
                  text={'PLANNING AND DESIGNING'}/>
                <div className="how-we-do__commet">
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda</p>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <SquareHow 
                  icon={<Launch className={'icon'}/>}
                  text={'BUILDING AND DEVELOPING'}/>
                <div className="how-we-do__commet">
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda</p>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <SquareHow 
                  icon={<Test className={'icon'}/>}
                  text={'TESTING AND DELIVERY'}/>
                <div className="how-we-do__commet">
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HowWeDo;