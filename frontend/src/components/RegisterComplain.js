import React,{Component} from 'react';
import axios from 'axios';

class RegisterComplain extends Component{
    state={
        formdata:{
            name:'',age:'',address:'',incDT:'',typeComplaint:''
        },
        returndata: []
    }

    inputchange = e =>{
        const data = this.state.formdata;
        data[e.target.name] = e.target.value;
        //console.log(e.target.value);
        this.setState({formdata: data});
    }
    onsubmit = e =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/fircomplain/register/',this.state.formdata).then((response) => { //console.log(response.data);
    alert("Saved Successfully...");}, (error) => {
            console.error(error);
            alert("Please Check Your Input again!!!");
        });
        //console.log(this.state);
    }
    render(){
        return(
            <div className="card registerform">
                <form >
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" id="inputName" value={this.state.formdata.name} onChange={this.inputchange} placeholder="Enter name" name="name"/>
                </div>
                <div className="form-group">
                    <label >Age</label>
                    <input type="number" className="form-control" id="inputAge" value={this.state.formdata.age} onChange={this.inputchange} placeholder="Enter Age" name="age"/>
                </div>
                <div className="form-group">
                    <label >Address</label>
                    <textarea className="form-control" id="inputAddress" rows="3" value={this.state.formdata.address} onChange={this.inputchange} placeholder="Enter Address" name="address"></textarea>
                </div>
                <div className="form-group">
                    <label >Date and Time of Incidence</label>
                    <input type="datetime-local" className="form-control" id="inputIncDT" value={this.state.formdata.incDT} onChange={this.inputchange} placeholder="Enter Incedent Date" name="incDT"/>
                </div>

                <div className="form-group">
                    <label >Select Complaint Type</label>
                    <select className="form-control" onChange={this.inputchange} id="inputComplaint" name="typeComplaint">
                    <option value="Attempt to Mureder">Attempt to Murder</option>
                    <option value="Theft">Theft</option>
                    <option value="Domestic Violence">Domestic Violence</option>
                    <option value="Others">Others</option>
                    </select>
                </div>
                <button type="submit" onClick={this.onsubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default RegisterComplain;