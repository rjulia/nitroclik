import React from 'react'
import MtSvgLines from 'react-mt-svg-lines';
import InViewMonitor from '../../../Components/InViewMonitor/InViewMonitor';
import '../Services.scss';

const ScrollAnimateInLineSvg = ({ SvgElement }) => (
  <InViewMonitor
    classNameNotInView='vis-hidden services__iconbox--icon'

    classNameInView="services__iconbox--icon"
    childPropsInView={{ animate: true }}
  >
    <MtSvgLines
      duration={1500}
      stagger={50}
      timing="ease-in"
      fade
      jsOnly={false}
    >
      {SvgElement}
    </MtSvgLines>
  </InViewMonitor>
)

export default ScrollAnimateInLineSvg;