import React, { Component } from "react";
import Moment from "react-moment";
import "./userProfile.css";
import GoalsList from "../components/profile_page/goalsList";
import AuthContext from "../contexts/auth";
import Axios from "axios";

class UserProfile extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        id: "1",
        username: "Taq",
        email: "taq@email.com"
      },
      isGoal: false,
      name: "",
      expires_at: "",
      goals: [
        {
          id: "1",
          target: "$500",
          user_id: "1",
          name: "Save to Buy A Tesla",
          balance: "$350",
          created_at: "05/05/2019",
          expires_at: "01/07/2019"
        }
      ]
    };
  }

  componentDidMount = async () => {
    const userId = this.context.id;
    try {
      const userInfo = await this.getUser();
      const goals = await this.getGoals(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  getUser = () => {
    const userEmail = this.context.user.email;

    Axios.get(`http://localhost:11235/user/email/${userEmail}`).then(
      userData => {
        return userData.data.id;
      }
    );
  };

  getGoals = async userId => {
    try {
      const goalsData = Axios.get(`http://localhost:11235/goal/${userId}`);
      const newGoals = goalsData.data.map((e, i) => {
        if (i === 0) {
          const currentUser = {
            username: e.first_name + e.last_name
          };
        }

        const goal = {
          id: e.id,
          name: e.name,
          target: e.target,
          user_id: e.user_id,
          balance: e.balance,
          created_at: e.created_at,
          income: e.income,
          expires_at: e.expires_at
        };
        return goal;
      });

      this.setState({ goals: newGoals });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addAGoal = () => {
    this.setState({ isGoal: true });
  };

  handleSubmit = e => {
    e.preventDefault();

    const {
      name,
      expires_at,
      target,
      currentUser: { id }
    } = this.state;

    // let goals = [...this.state.goals];
    // const newGoal = {
    //   target: target,
    //   user_id: id,
    //   name: name,
    //   balance: "500",
    //   expires_at: expires_at
    // };

    // goals.unshift(newGoal);
    // console.log("goals: ", goals);

    // this.setState({
    //   goals: goals
    // });

    Axios.post(`http://localhost:11235/goal/`, {
      target: target,
      user_id: id,
      name: name,
      balance: "",
      expires_at: expires_at
    }).then(this.getGoals());
  };

  addGoalForm = () => {
    return (
      <form>
        <div class="row">
          <div class="col">
            <input
              name="name"
              onChange={this.handleChange}
              type="text"
              class="form-control"
              placeholder="Goal Name"
            />
          </div>
          <div class="col">
            <input
              name="target"
              onChange={this.handleChange}
              type="text"
              class="form-control"
              placeholder="Target"
            />
          </div>
          <div class="col">
            <input
              name="expires_at"
              onChange={this.handleChange}
              type="text"
              class="form-control"
              placeholder="Due Date format 01/10/2019"
            />
          </div>
        </div>

        <button
          type="button"
          class="btn btn-success"
          onClick={this.handleSubmit}
        >
          Add
        </button>
      </form>
    );
  };

  render() {
    // const timeLeft = <Moment durationFromNow>{"2019-05-05 01:00:00"}</Moment>;

    const timetogoal = (
      <Moment diff="2019-05-27" unit="days">
        "2019-04-27 "
      </Moment>
    );

    // console.log("context: ", this.context);
    const {
      currentUser: { username, email },
      goals
    } = this.state;

    return (
      <>
        <div className="container profile-page">
          <div class="card text-center">
            <div class="card-header" />
            <div class="card-body">
              <h5 class="card-title">
                <h2> {username} </h2>
                <h4> {email} </h4>
                <h3>{timetogoal}</h3>
              </h5>
              <p class="card-text" />
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
                    class="card-img"
                    alt="..."
                  />
                </div>
              </div>

              <div className="btn btn-warning my-3" onClick={this.addAGoal}>
                + Set New Goal
              </div>
              {!this.state.isGoal ? <></> : this.addGoalForm()}
            </div>
            <div class="row justify-content-center">
              <div className="col-md-8">
                <div class="list-group">
                  {!goals ? (
                    <></>
                  ) : (
                    goals.map((e, i) => {
                      console.log("e", e);
                      return <GoalsList goal={e} />;
                    })
                  )}
                </div>
              </div>
            </div>
            <div class="card-footer text-muted" style={{ marginTop: "50px" }}>
              last logged in: 2 days ago
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserProfile;
