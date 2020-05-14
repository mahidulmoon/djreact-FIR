import React,{Component} from 'react';


class HomeBody extends Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default HomeBody;