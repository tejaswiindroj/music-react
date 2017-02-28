import React, {Component} from 'react'
import Header from './Header'

class App extends Component {
    render = () => {
        const {children} = this.props;
        return (
            <div style={{marginTop:'20px', marginBottom:'20px'}}>
                <Header/>
                <div className="ui container">
                    { children }
                </div>
            </div>
        )
    };
}

export default App;
