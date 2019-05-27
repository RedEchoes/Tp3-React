import React, {Component} from 'react'
import Header from './component/Header'
import Footer from './component/Footer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/> 
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
export default App