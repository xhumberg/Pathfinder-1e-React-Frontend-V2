import React from 'react';
import { Pane } from "evergreen-ui";
import StatDisplayComponent from '../StatDisplayComponent';

export default class ACComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="ACComponent">
      <Pane alignItems="center" justifyContent="flex-start" display="flex" flexDirection="column" margin="auto">
        <StatDisplayComponent name="AC" value="25" height={50} width={300} marginTop={8}/>
        <StatDisplayComponent name="Flat-Footed" value="25" height={50} width={300} marginTop={16}/>
        <StatDisplayComponent name="Touch" value="10" height={50} width={300} marginTop={16}/>
      </Pane>
    </div>
  };
}