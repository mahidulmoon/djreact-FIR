import React,{Component} from 'react';
import SingleComplain from './SingleComplain';
import axios from 'axios';
class Complainlist extends Component {
    state={
        alldata: [],
        token:[],
        
    }
    
    componentDidMount(){
        this.getData();

        
        //localStorage.setItem('token', this.props.location.token.token);
        //const token = localStorage.getItem('token');
        this.setState({ token: localStorage.getItem('token') })
        setInterval(this.getData, 5000);
    }
    getData = () => {
       
        axios.get('http://127.0.0.1:8000/fircomplain/getcomplain/',{
            headers: {
              Authorization: `Token ${this.state.token}`
            }
          } ).then(response => this.setState({ alldata:response.data }));
    }
    // {
    //     headers: {
    //       'Authorization': `Basic ${this.props.location.token}`
    //     }
    //   }
    render() {
        //const token = this.props.location.token.token;
        return (
            <div className="complaintscontainer">
                <div><h1>Pending Complaint Requests</h1></div><br/>
                <table className="table table-hover table-light">
                <thead className="thead">
                    <tr>
                    <th scope="col">Complaint ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                    <th scope="col">Date of Incidence</th>
                    <th scope="col">Date of Registration</th>
                    <th scope="col">Complaint</th>
                    <th scope="col">Section</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>


                    <SingleComplain complains={this.state.alldata} />
                            


                </tbody>
                </table>
            </div>
        );
    }
}

export default Complainlist;