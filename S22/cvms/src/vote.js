import React, { Component } from "react";
import axios from 'axios';
import eci from './images/eci.png';
import bjp from './images/bjp.png';
import cong from './images/cong.png';
import time from './images/time.png';
import arrow from './images/arrow.png';
import nota from './images/nota.png';
import tdp from './images/tdp.jpg';
import ycp from './images/ycp.jpg';
import "./vote.css";

// Define getSession function to retrieve the username from the session
const getSession = (sid) => {
  // Implement your session retrieval logic here
  // For example, if you're using sessionStorage:
  return sessionStorage.getItem(sid);
};

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      username: getSession("sid") // Add a state for username
    };
  }

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  };

  castVote = (username, candidate) => {
    const url = "http://localhost:5000/api/castVote";

    const data = JSON.stringify({
      username: username,
      candidate: candidate
    });

    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        console.error('Error casting vote:', error);
        alert('Failed to cast vote. Please try again.');
      });
  };

  handleSubmit = (event, candidate) => {
    event.preventDefault();
    if (!this.state.selectedOption) {
      alert("Your vote is successfully registered for " + candidate);
      return;
    }
  
    const username = getSession("sid");
    this.castVote(username, candidate);
  
    const { history } = this.props; // Destructure history from props
    history.push("/login"); // Use history.push to navigate to login page
  
    this.setState({ selectedOption: "" });
  };
  
  
  
  render() {
    return (
      <div>
        <nav style={{ height: "120px" }}>
          <div className="nav-wrapper orange accent-3">
            <img
              src={eci}
              alt=""
              height="120"
              width="900"
              style={{ paddingLeft: "250px" }}
            />
            <div className="brand-logo center">
              <h3 style={{ color: "black" }}>&nbsp;</h3>
            </div>
          </div>
        </nav>

        <main>
          <div className="container">
            <div id="card-alert" className="card light-blue lighten-5">
              <div className="card-content light-blue-text">
                <p id="loc_info">&nbsp;</p>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Election Symbol</th>
                  <th>Party</th>
                  <th>Candidate Name</th>
                  <th>Vote</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={bjp} alt=" " height="42" width="42" />
                  </td>
                  <td>Bharatiya Janata Party</td>
                  <td id="cand1">Sanat Taori</td>
                  <td>
                    <button
                      id="vote1"
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                      onClick={(event) => this.handleSubmit(event, 'Sanat Taori')}
                    >
                      Vote
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={cong} alt=" " height="42" width="42" />
                  </td>
                  <td>Indian National Congress</td>
                  <td id="cand2">Aniket Narkhede</td>
                  <td>
                    <button
                      id="vote2"
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                      onClick={(event) => this.handleSubmit(event, 'Aniket Narkhede')}
                    >
                      Vote
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={arrow} alt=" " height="42" width="42" />
                  </td>
                  <td>Nationalist Congress Party</td>
                  <td id="cand3">Mandar Patil</td>
                  <td>
                    <button
                      id="vote3"
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                      onClick={(event) => this.handleSubmit(event, 'Mandar Patil')}
                    >
                      Vote
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={time} alt=" " height="42" width="42" />
                  </td>
                  <td>Shiv Sena</td>
                  <td id="cand4">Akshay Motghare</td>
                  <td>
                    <button
                      id="vote4"
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                      onClick={(event) => this.handleSubmit(event, 'Akshay Motghare')}
                    >
                      Vote
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={tdp} alt=" " height="42" width="42" />
                  </td>
                  <td>Telugu Desam Party</td>
                  <td id="cand1">NCBN</td>
                  <td>
                    <button
                      id="vote1"
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                      onClick={(event) => this.handleSubmit(event, 'NCBN')}
                    >
                      Vote
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={ycp} alt=" " height="42" width="42" />
                  </td>
                  <td>YSR Congress Party</td>
                  <td id="cand1">YS Jagan</td>
                  <td>
                    <button
                      id="vote1"
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                      onClick={(event) => this.handleSubmit(event, 'YS Jagan')}
                    >
                      Vote
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={nota} alt=" " height="42" width="42" />
                  </td>
                  <td>Nota</td>
                  <td id="cand5">NONE</td>
                  <td>
                    <button
                      id="vote5"
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                      onClick={(event) => this.handleSubmit(event, 'Nota')}
                    >
                      Vote
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>

        <footer style={{ height: "70px" }} className="page-footer green darken-2">
          <div className="brand-logo center">
            <i className="fa fa-heart" style={{ color: "red" }}></i>
          </div>
        </footer>
      </div>
    );
  }
}


export default Vote; 