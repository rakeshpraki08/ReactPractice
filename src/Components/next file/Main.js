import { Component } from "react";
import User from './user'
import './main.css'



class Main extends Component{

    constructor()
    {
        super();
        this.state = {userdata:null};

    }

    componentDidMount(){
      fetch("https://dummyapi.io/data/v1/user?limit=90",{
        headers:{
            "app-id":"61ed31db887c0138889d09ee"
        }
      })
      .then((res)=>res.json())
      .then((data)=>this.setState({userdata:data.data}))
    }
        


    render(){
        // console.log(this.state.userdata)
        return (
            <div className="main-div">
                <h1 className="main-h1">Hi</h1>
                <input placeholder="Search User Name" type="text"/>
                <div className='main-div-div'>
                    <User userDataProps = {this.state.userdata}/>
                </div>

            </div>
        
        )
    }
}

export default Main;