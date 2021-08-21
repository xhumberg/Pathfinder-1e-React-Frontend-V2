import React from 'react';
import { Pane, Heading } from "evergreen-ui";
import { PageSize } from '../PageSize';

export default class SpecialDefensesComponent extends React.Component {

  render() {
    if (this.props.windowWidth !== PageSize.MOBILE) {
      return <Pane background="rgba(0, 0, 0, 0.4)" width={700} margin="auto" marginTop={8} borderRadius={3} height={50} border={true}>
          <Heading size={500} color="white">Special Defenses</Heading>
          <Pane display="flex" justifyContent="space-evenly" marginTop={8}>
            {this.props.character.specialDefenses?.map((special) => <Heading size={400} color="white">{special}</Heading>)}
          </Pane>
      </Pane>
    } else {
      return <Pane width="100%" display="flex" flexDirection="column" background="rgba(0, 0, 0, 0.4)" paddingTop={12} paddingBottom={12} marginTop={12}>
        <Heading size={700} color="white">Special Defenses</Heading>
        <hr width="90%"/>
        {this.props.character.specialDefenses?.map((special) => <Heading size={400} color="white">{special}</Heading>)}
      </Pane>
    }
  };
}