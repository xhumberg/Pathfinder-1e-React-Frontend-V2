import React from 'react';
import { Table, Button, Dialog } from "evergreen-ui";
import SmallLabelledValueComponent from '../SmallLabelledValueComponent';

export default class ClickForDescriptionSpellComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nameOnDisplay: props.name,
          descriptionOnDisplay: props.description,
          displayDialog: false
        }
      }


    render() {

        var castButton = <Button onClick={() => this.props.onButtonClick()}>Cast</Button>
        if (this.props.cast) {
            castButton = <Button onClick={() => this.props.onButtonClick()}>Uncast</Button>
        }

        return <Table.Row alignItems="center" height="auto" padding={2}>
            <Dialog hasFooter={false} isShown={this.state.displayDialog} title={this.state.nameOnDisplay} onCloseComplete={() => this.setState({displayDialog: false})}>
                <div dangerouslySetInnerHTML={{__html: this.state.descriptionOnDisplay}} />
            </Dialog>
            {castButton}
            <SmallLabelledValueComponent label={this.props.name} onClick={() => this.setState({displayDialog: true})} used={this.props.cast}/>
        </Table.Row>
    };
}