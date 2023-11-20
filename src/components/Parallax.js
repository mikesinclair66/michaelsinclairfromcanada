import '../style/components/parallax.css';
//import { useState } from 'react';
import React from 'react';

class Parallax extends React.Component {
    constructor(props){
        super(props);
        //const [top, setTop] = useState();
        this.uniqueId = props.uniqueId;
        this.state = {
            top: 0,
            bgPos: [50, 50]
        };
    }

    render(){
        return (
            <div className="parallax" id={ this.uniqueId } style={{ backgroundPosition:
                `${this.state.bgPos[0]}% ${this.state.bgPos[1]}%` }}></div>
        );
    }

    /*
    componentDidMount(){
        window.addEventListener("resize")
    }

    componentWillUnmount(){

    }
    */
}

export default Parallax;