import React from 'react';

const CircleImg = (props) => {
  const style = {
    width: props.width ? props.width : '24px',
    height: props.height ? props.height : '24px',
    borderRadius: '50%',
    borderWidth: props.borderWidth ? props.borderWidth : '1px',
    borderStyle: props.borderStyle ? props.borderStyle : 'solid',
    borderColor: props.borderColor ? props.borderColor : '#c7d1d8',
  }
  return (
    <img
      style={style}
      className={["img-fluid", props.className].join(' ')}
      src={props.src}
      alt={props.alt}
      />
  )
}
export default CircleImg;