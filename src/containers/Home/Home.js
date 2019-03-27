import React,{Component} from 'react';
class Home extends Component{
    state={
        token:null
    }
    componentDidMount(){
        let token = localStorage.getItem('token');
        if(token){
            this.setState({
                token
            })
        }
    }
    logout=()=>{
        localStorage.removeItem('token');
        this.props.history.push('/')
        this.setState({
            token:null
        })
    }
    render(){
        if(this.state.token)
        return(
            <div>
                Home
                <button onClick={this.logout}>Logout</button>
            </div>
        );
        else{
            return "Login again"
        }
    }
}
export default Home;