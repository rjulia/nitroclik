import React, {useEffect, useState} from 'react'


export default  function ResponsiveImage(props) {
  const [width, setWidth] = useState(0);
  const { small, medium, large, xlarge } = props.images; 
  let sizeImge;
  useEffect(() => {
    // creamos una función para actualizar el estado con el clientWidth
    const updateWidth = () => {
      const width = document.body.clientWidth
      setWidth(width)
    }
    // actualizaremos el width al montar el componente
    updateWidth()
    // nos suscribimos al evento resize de window
    window.addEventListener("resize", updateWidth)
  })
  switch (true) {
    case (width > 1280):
      sizeImge = xlarge
      break;
    case (width > 768):
      sizeImge = large
      break;
    case (width > 376):
      sizeImge = medium
      break;
    default:
      sizeImge = small
      break;
  }

  return (
      <img {...props} src={sizeImge} alt="nothing"/>
  );
  
}

