import React,{Component} from 'react';
import axios from 'axios';
class CheckFIR extends Component{
    state={
        finalgetresult: [],
        search:{
            fir_no:''
        },
        searchresult: false
    }

    inputchange= e =>{
        const searchdata = this.state.search;
        searchdata[ e.target.name ]= e.target.value;
        this.setState( { search: searchdata } );
       
    }

    onvaluesubmit= e =>{
        e.preventDefault();
        axios.get('http://127.0.0.1:8000/fircomplain/getcomplain/'+this.state.search.fir_no+'/').then(response => {this.setState({ finalgetresult: response.data }); alert("Macth Found...")}).catch(error =>{ alert("No match Found "+error) });
        console.log(this.state);
        this.setState({ searchresult: true});
    }

    render(){
        
        return(
            <center>
                <div className="limiter">
                <div className="classNameName-login100">
                    <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                        <form className="login100-form validate-form flex-sb flex-w" >
                            <span className="login100-form-title p-b-32">
                                Check FIR Status
                            </span>

                            <span className="txt1 p-b-11">
                                FIR No.{this.state.finalgetresult.id}
                            </span>
                            <div className="wrap-input100 m-b-36">
                                <input className="input100" type="text" onChange={this.inputchange} value={this.state.fir_no} name="fir_no" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="classNameName-login100-form-btn">
                                <button onClick={this.onvaluesubmit} type="submit" className="login100-form-btn">
                                    Check!
                                </button>
                            </div>
                           { this.state.searchresult && <div class="card">
                                                            <h1>FIR ID : {this.state.finalgetresult.id} </h1>
                                                            <p class="title"> Name : {this.state.finalgetresult.name} </p>
                                                            <p> Age : {this.state.finalgetresult.age}</p>
                                                            <p> Address : {this.state.finalgetresult.address} </p>
                                                            <p> Date and Time of Incidence : {this.state.finalgetresult.incDT}</p>
                                                            <p> Date of Registration : {this.state.finalgetresult.dateofreg}</p>
                                                            
                                                            <p> Complaint : {this.state.finalgetresult.typeofComplaint} </p>
                                                            <p> Section : {this.state.finalgetresult.section}</p>
                                                            
                                                            <p> Status : {this.state.finalgetresult.status} </p>

                                                            
                                                                    <p>
                                                                    <form>
                                                                    <input type="hidden" name="sno" value="" />
                                                                    <button type="submit" name="dfir">Download FIR</button>
                                                                    </form>
                                                                </p>
                                                            

                                                            </div>}

                        </form>
                    </div>
                </div>
            </div>
            </center>
        );
    }
}

export default CheckFIR;