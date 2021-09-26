import React from 'react';
import { Pane, Button, Popover, TextInput } from "evergreen-ui";
import { PageSize } from '../PageSize';

export default class HpButtonsComponent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      damageValue : "",
      healValue: ""
    }
  }

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
          <Popover content={
            <Pane padding={20} display="flex" flexDirection="column" alignItems="center">
              <TextInput autoComplete={false} width={100} value={this.state.damageValue} onChange={e => this.setState({damageValue: e.target.value})} />
              <Button marginTop={10} onClick={() => {
                this.props.character.damage(this.state.damageValue);
                this.setState({damageValue : ""});
              }}>Submit</Button>
            </Pane>
          }>
            <Button marginRight={5} background="rgba(256, 256, 256, 0.4)" color="black">Lethal Damage</Button>
          </Popover>
          <Button background="rgba(256, 256, 256, 0.4)" color="black" disabled>Nonlethal Damage</Button>
        </Pane>
        <Pane>
          <Popover content={
            <Pane padding={20} display="flex" flexDirection="column" alignItems="center">
              <TextInput autoComplete={false} width={100} value={this.state.healValue} onChange={e => this.setState({healValue: e.target.value})} />
              <Button marginTop={10} onClick={() => {
                this.props.character.heal(this.state.healValue);
                this.setState({healValue : ""});
              }}>Submit</Button>
            </Pane>
          }>
            <Button marginRight={5} background="rgba(256, 256, 256, 0.4)" color="black">Heal</Button>
          </Popover>
          <Button background="rgba(256, 256, 256, 0.4)" color="black" disabled>Temp HP</Button>
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


