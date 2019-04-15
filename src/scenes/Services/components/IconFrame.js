import React from 'react'
import SvgLines from 'react-mt-svg-lines';
import InViewMonitor from '../../../Components/InViewMonitor/InViewMonitor';
import '../Services.scss';

const ScrollAnimateInLineSvg = ({ SvgElement }) => (
  <InViewMonitor
    classNameNotInView='vis-hidden services__iconbox--icon'

    classNameInView="services__iconbox--icon"
    childPropsInView={{ animate: true }}
  >
    <SvgLines
      duration={1500}
      fade
    >
      {SvgElement}
    </SvgLines>
  </InViewMonitor>
)

export default ScrollAnimateInLineSvg;