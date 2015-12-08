import React from 'react';
import Title from './components/Title';

export default class AppComponent extends React.Component {

    constructor(props) {

        super(props)

        console.log( this.props )

        this.state = {
            titleString: 'lunes'
        }

    }

    render() {
        return (
            <div>
                <h2> Estamos en App {this.props.uno} </h2>
                <Title titleString={this.state.titleString} />
            </div>
        );
    }


}
