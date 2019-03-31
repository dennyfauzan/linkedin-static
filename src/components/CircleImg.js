import React from 'react';

const CircleImg = (props) => {
  const style = {
    width: props.width ? props.width : '24px',
    height: props.height ? props.height : '24px',
    borderRadius: '50%',
    border: props.border ? '1px solid' : 'none',
    borderColor: props.borderCcolor ? props.borderColor : '#c7d1d8',
  }
  return (
    <img
      style={style}
      className={["img-fluid", props.className]}
      src={props.src}
      alt={props.alt}
      />
  )
}
export default CircleImg;