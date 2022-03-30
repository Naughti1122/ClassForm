import React, { Component } from 'react';

class Classform extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            password:"",
        };
    }

    handlechange = (e)=> {
        e.preventDefault()
        this.setState({[e.target.name] : e.target.value});
    }

    handlesubmit =(e)=>{
        e.preventDefault()
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.password);
    }

    render() {
        return (
            <form style={{textAlign: 'center', fontSize:'30px'}} onSubmit={this.handlesubmit}>
                <div className='Forms'>
                    <label>Name</label><br/>
                        <input style={{textAlign: 'center', fontSize:'20px'}} 
                            name='name'
                            type='text' 
                            value={this.state.name} 
                            onChange={this.handlechange}>
                        </input>
                        <br/>

                    <label>Email</label><br/>
                        <input style={{textAlign: 'center', fontSize:'20px'}} 
                            name='email'
                            type='email' 
                            value={this.state.email} 
                            onChange={this.handlechange}>
                        </input>
                        <br/>

                    <label>Password</label><br/>
                        <input style={{textAlign: 'center', fontSize:'20px'}} 
                            name='password'
                            type='password' 
                            value={this.state.password} 
                            onChange={this.handlechange}>
                        </input>
                        <br/>

                    <button style={{width:'auto', height:'auto', fontSize:'20px'}} type='submit'>Submit</button>
                </div>
            </form>
        );
    }
}

export default Classform;
