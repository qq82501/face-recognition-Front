import React from "react";

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      entries:''
    }
  }


  onNameChange = (event) =>{
    this.setState({name: event.target.value})
  }
  
  onEmailChange = (event) =>{
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) =>{
    this.setState({password: event.target.value})
  }

  onSubmit = () =>{
    fetch('https://face-recognition-api-heroku.herokuapp.com/register',{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        entries: this.state.entries
      })
    })
    .then(res => res.json())
    .then(user => {
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }else {
        console.log ('please fill all of field')
      }
      }
        // this.props.onLogOut(false);
      )
  }
  
  render(){
    return(
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="rg_sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" 
                name="name"  
                id="name"
                onChange={this.onNameChange}/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="rg-email-address"  
                id="rg-email-address"
                onChange={this.onEmailChange}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="rg-password"  
                id="rg-password"
                onChange={this.onPasswordChange} />
            </div>
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"  onClick={this.onSubmit} type="submit" value="submit" />
          </div>
        </div>
      </main>
    </article>
    )

  }

}

export default Register;