import React from 'react';
import { Pane } from "evergreen-ui";
import StatDisplayComponent from '../StatDisplayComponent';
import { PageSize } from '../PageSize';

export default class SavesComponent extends React.Component {

    render() {
      if (this.props.windowWidth !== PageSize.MOBILE) {
        return <Pane alignItems="center" justifyContent="flex-start" display="flex" flexDirection="column" margin="auto">
          <StatDisplayComponent name="Fort" value={this.props.character.fortitude} height={50} width={300} marginTop={8}/>
          <StatDisplayComponent name="Ref" value={this.props.character.reflex} height={50} width={300} marginTop={16}/>
          <StatDisplayComponent name="Will" value={this.props.character.will} height={50} width={300} marginTop={16}/>
        </Pane>
      } else {
        return <Pane display="flex" flexDirection="column" width="100%">
          <StatDisplayComponent name="Fort" value={this.props.character.fortitude} width="100%" marginTop={10}/>
          <StatDisplayComponent name="Ref" value={this.props.character.reflex} width="100%"/>
          <StatDisplayComponent name="Will" value={this.props.character.will} width="100%"/>
        </Pane>
      }
    };
}