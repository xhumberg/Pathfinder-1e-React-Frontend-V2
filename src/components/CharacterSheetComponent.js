import React from 'react';
import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';

export default class CharacterSheetComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return <div className="CharacterSheetComponent">
        <HeaderComponent character={this.props.character}/>
        <BodyComponent character={this.props.character}/>
      </div>
  };
}