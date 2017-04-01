/**
 * Created by SinceTV on 31.03.17.
 */
import React from 'react';
import { Entity } from 'aframe-react';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export class Slice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: this.props.isOpened,
      color: getRandomColor()
    };
  }

  setChosen() {
    this.props.openSlice(this.props.position);
    this.ref.el.emit('scale', null, false);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      chosen: nextProps.isOpened
    });
  }

  render() {
    let size = 360 / this.props.length;
    return (
      <Entity ref={ref => this.ref = ref}
              geometry={
                {
                  primitive: 'ring',
                  radiusInner: this.props.startFrom,
                  radiusOuter: 0.5,
                  thetaLength: size,
                  thetaStart: this.props.position * (size)
                }
              }
              material={{color: this.state.color, opacity: this.state.chosen ? 1 : 0.8, side: 'double'}}
              position={{x: 0, y: 0, z: this.state.chosen ? 0.1 : 0}}
              events={{click: this.setChosen.bind(this)}}>
      </Entity>
    )
  }
}