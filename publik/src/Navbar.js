import React, { Component } from 'react';
import {
  Person,
  lookupProfile
} from 'blockstack';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      person: {
        name() {
          return 'Anonymous';
        },
        avatarUrl() {
          return avatarFallbackImage;
        },
      },
      username: "",
      newStatus: "",
      statuses: [],
      statusIndex: 0,
      isLoading: false
    };
  }

  render() {
    const { handleSignOut, userSession } = this.props;
    const { person } = this.state;
    const { username } = this.state;


    /*
    //insert picture 
    const realFileBtn = document.getElementById("real-file");
    const customBtn = document.getElementById("custom-button");
    const customTxt = document.getElementById("custom-text");

    if(customBtn){
      customBtn.addEventListener("click", function() {
        realFileBtn.click();
      });
    }

    if(realFileBtn){
      realFileBtn.addEventListener("change", function() {
        if (realFileBtn.value) {
          customTxt.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
          )[1];
        } else {
          customTxt.innerHTML = "No file chosen, yet.";
        }
      });
    }
    */

    return (

      <div className="container">
        <div  style={{zIndex: "1000"}}>
            <textarea className="input-status-find"
            value={this.state.findProfile}
            onChange={e => this.handleFindProfile(e)}
            placeholder="Find a profile"
              />
            <button
                className="btn-find btn-primary-find btn-lg-find"
                onClick={e => this.handleFindProfileSubmit(e)}
              >
                Submit
            </button>
          </div>
            {/* <div className="new-status">
              <div className="col-md-12">

              
                <div className="avatar-con">
                  <img
                    src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage }
                    className="img-rounded avatar"
                    id="avatar-image"
                  />
                  <div className="username">
                    <h1>
                      <span id="heading-name">{ person.name() ? person.name()
                        : 'Nameless Person' }</span>
                    </h1>
                    <span>{username}</span>
                    {this.isLocal() &&
                      <span>
                        &nbsp;|&nbsp;
                        <a onClick={ handleSignOut.bind(this) }>(Logout)</a>
                      </span>
                    }
                  </div>
                </div>
              </div>
            </div>
            {this.isLocal() &&
              <div className="new-status">
                <div className="col-md-12">
                
                  <textarea className="input-status"
                    value={this.state.newStatus}
                    onChange={e => this.handleNewStatusChange(e)}
                    placeholder="What's on your mind?"
                  />
                </div>
                <div className="col-md-12 text-right">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={e => this.handleNewStatusSubmit(e)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            }
            <div className="col-md-12 statuses">
            {this.state.isLoading && <span>Loading...</span>}
            {this.state.statuses.map((status) => (
                <div className="status" key={status.id}>
                  {status.text}
                </div>
                )
            )}
            </div>

            <div>
              <a className="Nav-brand-logo"></a>
            </div> */}


      </div> 
    );
    }

  componentWillMount() {
    // const { userSession } = this.props
    // this.setState({
    //   person: new Person(userSession.loadUserData().profile),
    //   username: userSession.loadUserData().username
    // });
  }

  handleNewStatusChange(event) {
    this.setState({newStatus: event.target.value})
  }


  handleFindProfile(event) {
    this.setState({findProfile: event.target.value})
  }
 

  handleNewStatusSubmit(event) {
    this.saveNewStatus(this.state.newStatus)
    this.setState({
      newStatus: ""
    })
  }


  handleFindProfileSubmit(event) {
    //window.location.href = "https://thirsty-roentgen-965c99.netlify.com/" + this.findProfile + ".id.blockstack";
    //window.location.href = "https://www.google.com";
    //document.write.getElementById("inputFindProfile");
    //window.print.getElementById("inputFindProfile");
    //window.location.href = "http://127.0.0.1:3000/" + this.state.findProfile + ".id.blockstack";
    window.location.href = "https://thirsty-roentgen-965c99.netlify.com/" + this.state.findProfile + ".id.blockstack";
  }


  saveNewStatus(statusText) {
    const { userSession } = this.props
    let statuses = this.state.statuses
 
    let status = {
      id: this.state.statusIndex++,
      text: statusText.trim(),
      created_at: Date.now()
    }
 
    statuses.unshift(status)
    const options = { encrypt: false }
    userSession.putFile('statuses.json', JSON.stringify(statuses), options)
      .then(() => {
        this.setState({
          statuses: statuses
        })
      })
  }

  fetchData() {
    const { userSession } = this.props
    this.setState({ isLoading: true })
    if (this.isLocal()) {
      const options = { decrypt: false }
      userSession.getFile('statuses.json', options)
        .then((file) => {
          var statuses = JSON.parse(file || '[]')
          this.setState({
            person: new Person(userSession.loadUserData().profile),
            username: userSession.loadUserData().username,
            statusIndex: statuses.length,
            statuses: statuses,
          })
        })
        .finally(() => {
          this.setState({ isLoading: false })
        })
    } else {
      const username = this.props.match.params.username
 
      lookupProfile(username)
        .then((profile) => {
          this.setState({
            person: new Person(profile),
            username: username
          })
        })
        .catch((error) => {
          console.log('could not resolve profile')
        })

      const options = { username: username, decrypt: false }
      userSession.getFile('statuses.json', options)
        .then((file) => {
          var statuses = JSON.parse(file || '[]')
          this.setState({
            statusIndex: statuses.length,
            statuses: statuses
          })
        })
        .catch((error) => {
          console.log('could not fetch statuses')
        })
        .finally(() => {
          this.setState({ isLoading: false })
        })
    }
  }
  

}
