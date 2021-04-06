import React from 'react';

class SignUPForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.signup(this.state);
  }

  updateInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div onSubmit={this.handleSubmit} className="create-user-div">
        <h1>Create an account</h1>
        <form>
          <label>EMAIL
            <input type="text" value={this.state.email} onClick={this.updateInput('email')}/>
          </label>

          <label>USERNAME
            <input type="text" value={this.state.username} onClick={this.updateInput('username')}/>
          </label>

          <label>PASSWORD
            <input type="password" value={this.state.password} onClick={this.updateInput('password')}/>
          </label>

          <input type="submit" value="Continue"/>
        </form>
        <footer>
          <p>{this.props.navLink}</p>
        </footer>
      </div>
    );
  }
}

export default SignUPForm;