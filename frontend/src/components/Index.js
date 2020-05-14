import React,{Component} from 'react';
import HomeBody from './HomeBody';
import RegisterComplain from './RegisterComplain';
import CheckFIR from './CheckFIR';
import Login from './Login';
import Updatecomplain from './Updatecomplain';
import Complainlist from './Complainlist';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Index extends Component{
    render(){
        return(
            <div>
                <center>
                    <Router>
                        <HomeBody>
                            <div className="btn-group btn-group-lg homebtns" role="group" aria-label="Basic example">
                                <a href="/registercomplaint"><button type="button" className="btn btn-lg btn-secondary">Register a Complaint</button></a>
                                <a href="/checkfir"><button type="button" className="btn btn-lg btn-secondary">Check your FIR Status</button></a>
                                <a href="/login"><button type="button" className="btn btn-lg btn-secondary">Login</button></a>
                            </div>
                            <Switch>
                                <Route path="/registercomplaint" exact component={RegisterComplain} />
                                <Route path="/checkfir" exact component={CheckFIR} />
                                <Route path="/login" exact component={Login} />
                                <Route path="/complainlist" exact component={Complainlist} />
                                <Route path="/updatecomplain/:id" exact component={Updatecomplain} />
                            </Switch>
                        </HomeBody>
                    </Router>
                </center>
            </div>
        );
    }
}

export default Index;