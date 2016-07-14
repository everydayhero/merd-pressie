import React from 'react'

export const Pin = ({
  color = '#00a044',
  dotColor = 'white',
  shadowColor = 'rgba(0, 0, 0, 0.125)',
  image
}) => (
  <div style={{
    transform: 'translate(0, -20%)',
    width: '100%',
    height: '100%'
  }}>
    <div style={{
      background: shadowColor,
      borderRadius: '50%',
      height: '60%',
      width: '60%',
      position: 'absolute',
      left: '50%',
      bottom: '-50%',
      transformOrigin: '50% 50%',
      transform: 'rotateX(55deg) translate(-50%, 0)'
    }} />
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: '50% 50% 50% 0',
      backgroundColor: color,
      position: 'absolute',
      transform: 'rotate(-45deg)',
      transformOrigin: '50% 50%'
    }}>
      <div style={{
        width: '60%',
        height: '60%',
        backgroundColor: dotColor,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        position: 'absolute',
        left: '50%',
        top: '50%',
        border: '0.25em solid white',
        transform: 'translate(-50%, -50%) rotate(45deg)',
        borderRadius: '50%'
      }} />
    </div>
  </div>
)
