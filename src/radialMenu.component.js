/**
 * Created by SinceTV on 31.03.17.
 */
import React from 'react';
import { Slice } from './slice.component';
export class RadialMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
      menuIsOpen: false,
      radius: 0.1,
      currentlyOpenedSlice: 1,
    };
    this.toggleMenu  = this.toggleMenu.bind(this);
    this.toggleSlice = this.toggleSlice.bind(this);
  }

  toggleMenu() {
    this.setState({menuIsOpen: !this.state.menuIsOpen});
    console.log(this.state.menuIsOpen);
  }

  toggleSlice(i) {
    this.setState({currentlyOpenedSlice: this.state.currentlyOpenedSlice === i ? -1 : i});
  }

  render() {
    const slices = [];
    for (let i = 0, l = 6; i < l; i++) {
      slices.push(<Slice key={i}
                         position={i}
                         length={l}
                         startFrom={this.state.radius}
                         isOpened={this.state.currentlyOpenedSlice === i}
                         openSlice={this.toggleSlice}/>);
    }
    return (
      <a-circle position="0 1.5 -1" radius={this.state.radius}
                onClick={this.toggleMenu}
                ref={entity => this.entity = entity}>
        {slices}
      </a-circle>
    )
  }

}