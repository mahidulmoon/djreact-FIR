import React,{Component} from 'react';
import axios from 'axios';
import { Redirect} from 'react-router-dom';
class Login extends Component{
    state={
        login:{
            username:'',password:''
        },
        token:[],
        isSignedup: false
    }
    inputchange= e =>{
        const cred = this.state.login;
        cred[ e.target.name ] = e.target.value;
        this.setState({ login: cred });
    }

    submitbutton= e =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/auth/',this.state.login).then(response => {
            this.setState({ isSignedup: true, token: response.data }); 
            localStorage.setItem('token', this.state.token.token);
        }).catch( error => alert("Username And Password isnot matched!!!"))
        
    }

    render(){
        if (this.state.isSignedup) {
            // redirect to home if signed up
            return <Redirect to = {{ pathname: "/complainlist",token:this.state.token }} />;
          }
        return(
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                        <form class="login100-form validate-form flex-sb flex-w" >
                            <span class="login100-form-title p-b-32">
                                Account Login
                            </span>

                            <span class="txt1 p-b-11">
                                Username
                            </span>
                            <div class="wrap-input100 validate-input m-b-36" data-validate = "Email is required">
                                <input class="input100" type="text" name="username" value={this.state.username} onChange={this.inputchange} />
                                <span class="focus-input100"></span>
                            </div>

                            <span class="txt1 p-b-11">
                                Password
                            </span>
                            <div class="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
                                <span class="btn-show-pass">
                                    <i class="fa fa-eye"></i>
                                </span>
                                <input class="input100" type="password" name="password"value={this.state.password} onChange={this.inputchange} />
                                <span class="focus-input100"></span>
                            </div>
                            
                            <div class="container-login100-form-btn">
                                <button type="submit" class="login100-form-btn" onClick={this.submitbutton}>
                                    Login
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


            
        );
    }
}

export default Login;