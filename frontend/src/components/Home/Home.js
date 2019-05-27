import React, { Component } from 'react';
import './home.scss';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
          active:false
        }
      }
      toggleClass=(e)=>{
        const currentState = this.state.active;
        this.setState({active:!currentState});
      }

    render() {
        return (
            <div className='home'>
                <h3 id="welcome">
                    Welcome to <a href='https://socialdetection.com/' target="_blank" rel="noopener noreferrer">Social Detector</a>. Forget Stakeout, Start Searching!
                    <br/>
                </h3>

                <a className='button start'  href='/login'>Login to Get started</a>

                <div className="note">
                    <div className="container">
                        <h4><b>Note</b></h4> 
                        {/* <br/> */}
                        <p>This website is part of a mini project created for Social Detection and is used for demonstration purposes only.</p> 
                        <p>Check the <a href="https://github.com/ambitiousbird/hibersense-dash" id="source">source code</a> for more information.</p>
                    </div>
                </div>
            </div>
        );
    }
}