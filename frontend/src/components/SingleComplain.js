import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class SingleComplain extends Component {
    deletebutton = (e,complain) =>{
        e.preventDefault();
        axios.delete('http://127.0.0.1:8000/fircomplain/getcomplain/'+complain+'/').then(response=> alert("done"));
    }
    render() {
        const complains = this.props.complains;
        return (
            
                complains.map(complain =>(
                    <tr>
                            
                            <td>{complain.id}</td>
                            <td>{complain.name}</td>
                            <td>{complain.age}</td>
                            <td>{complain.address}</td>
                            <td>{complain.incDT}</td>
                            <td>{complain.dateofreg}</td>
                            <td>{complain.typeComplaint}</td>
                            <td>{complain.section}</td>
                            <td>{complain.status}</td>
                            <td>
                                <form  >
                                    <input type="hidden" name="sno" value="" />
                                    <input type="hidden" name="cat" value="" />
                                    <Link to={`/updatecomplain/${complain.id}/`}><button type="submit" name="approve" class="btn btn-outline-success" >Approve</button></Link>
                                    <button type="submit" name="reject"  class="btn btn-outline-danger" onClick={e => this.deletebutton(e, complain.id)}>Reject</button>
                                </form>
                            </td>
                            </tr>
                ))
            
        );
    }
}

export default SingleComplain;