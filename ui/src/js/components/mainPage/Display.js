import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export default class Display extends Component {

  displayName: 'Display';
  props: any;
  constructor(props){
    super(props);
  }

  render () {

    const divStyle = {
      background: this.props.background
    }
    return (


      <Card className = 'displayCard'>
        <div
          className = "titleCard"
          style={
            divStyle
          }
        >{this.props.name}</div>
      </Card>
    );
  }

}
