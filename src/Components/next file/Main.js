import React, { Component }  from 'react';
import User from './user'
import './main.css'
import SpinnerLoading from './spinner';




class Main extends Component{

    constructor()
    {
        super();
        this.state = {userdata:null, loading:true, alluser:null, textvalue:""};

    }

    oninputchange(event){

        const inputvalue = event.target.value.toLowerCase();
        // console.log(inputvalue);

        this.setState({textvalue:inputvalue})

        const filteredData = this.state.alluser.filter((i)=>{
            return i.firstName.toLowerCase().startsWith(inputvalue);
        })

        this.setState({userdata:filteredData});
    }

    componentDidMount(){
      fetch("https://dummyapi.io/data/v1/user?limit=90",{
        headers:{
            "app-id":"61ed31db887c0138889d09ee"
        }
      })
      .then((res)=>res.json())
      .then((data)=>this.setState({userdata:data.data, loading:false, alluser:data.data}))
    }
        


    render(){
        // console.log(this.state.userdata)
        return (
            
            <div className="main-div">
                
                <h1 className="main-h1">Hi</h1>
                <input onChange={(e)=>this.oninputchange(e)} placeholder="Search User Name" type="text" value={this.state.textvalue}/>
                {
                    this.state.loading?
                     <SpinnerLoading/>
                    :
                    <div className='main-div-div'>
                    <User userDataProps = {this.state.userdata}/>
                    </div>
                }
                
                

            </div>
            
        
        )
    }
}

export default Main;