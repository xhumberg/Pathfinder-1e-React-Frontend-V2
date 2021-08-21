import React from 'react';
import { Pane, Button } from "evergreen-ui";
import { PageSize } from '../PageSize';

export default class HpButtonsComponent extends React.Component {

  render() {
    if (this.props.windowWidth !== PageSize.MOBILE) {
      return <Pane 
        display="flex"
        padding={10}
        paddingBottom={0}
        borderRadius={3}
        margin="auto"
        marginBottom={0}
        width={664}
      >
        <Pane flex={1} marginLeft={0} alignItems="flex-start" display="flex">
          <Button marginRight={5} background="rgba(256, 256, 256, 0.4)" color="black">Lethal Damage</Button>
          <Button background="rgba(256, 256, 256, 0.4)" color="black">Nonlethal Damage</Button>
        </Pane>
        <Pane>
          <Button marginRight={5} background="rgba(256, 256, 256, 0.4)" color="black">Heal</Button>
          <Button background="rgba(256, 256, 256, 0.4)" color="black">Temp HP</Button>
        </Pane>
      </Pane>
    } else {
      return <Pane display="flex" flexDirection="column" width="100%">
        <Button margin="auto" width="90%" height={40} marginTop={4} background="rgba(256, 256, 256, 0.4)" color="black">Lethal Damage</Button>
        <Button margin="auto" width="90%" height={40} marginTop={4} background="rgba(256, 256, 256, 0.4)" color="black">Nonlethal Damage</Button>
        <Button margin="auto" width="90%" height={40} marginTop={4} background="rgba(256, 256, 256, 0.4)" color="black">Heal</Button>
        <Button margin="auto" width="90%" height={40} marginTop={4} background="rgba(256, 256, 256, 0.4)" color="black">Temp HP</Button>
      </Pane>
    }
  };
}


