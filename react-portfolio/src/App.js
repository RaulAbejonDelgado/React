import React , {Component}from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

class App extends Component{
    flagState = false;
    state = { displayBio: false};

    // constructor() {
    //     super();
    //     this.flagState = false;
    //     this.state = { displayBio: false};
    //     this.readMore = this.readMore.bind(this);
    // }

    readMore = () => {
        this.flagState = !this.flagState ? this.flagState = true : this.flagState = false;
        this.setState({displayBio: this.flagState});
    }

    render() {
        const bio = this.state.displayBio === false ? (
        <div><button onClick={this.readMore} >Read more</button></div>) : (
            <div>
                <button onClick={this.readMore} >Read less</button>
                <p>I live in Bilbao and i code every day </p>
                <p>Im doing a react couse, and this is the practice</p>
                
            </div>
            
            );

        return(
            <div>
                <img id="profile-img" alt="profile-img" src={profile}/>
                <h1>Hello</h1>
                <p>You are stupid and only know repeat that i look</p>
                <p>blah blabçh</p>
                {bio}
                <hr/>
                <Projects />
                <SocialProfiles/>
            </div>
        )
    }
}
export default App;
