import React from 'react';
import '../scss/Header.scss';

const LogoN = (props) => {
  return (
    <svg {...props} id="logo_n" className="logo_n"  x="0px" y="0px" viewBox="0 0 60 60" >
      <g>
        <g>
          <path className="logo__line--one" d="M12.2,45.9V12.4h7.9l16.5,22.4V12.4h7.6v33.5H36L19.7,24.1v21.8H12.2z"/>
        </g>
        <rect x="5" y="6" className="logo__line--two" width="46.5" height="46.5"/>
      </g>
    </svg>
  );
};

export default LogoN;