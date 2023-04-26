import React from "react";
class Form extends React.Component {
    constructor(props){
        super(props)
        this.state={
            todotitle:"",
            tododesc:""
        }
    }
  render() {
    return (
      <form className="mb-5 fntsty2" onSubmit={(e)=>{e.preventDefault();
        this.props.Add(this.state.todotitle,this.state.tododesc)}}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label bgcolor">
            Title
          </label>
          <div className="col-6">
          <input
            type="text"
            className="form-control bxclr"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="todotitle"
            onChange={(e)=>this.setState({todotitle:e.currentTarget.value})}
          />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label bgcolor">
            description
          </label>
          <div className="col-8">
          <input
            type="text"
            className="form-control bxclr"
            id="exampleInputPassword1"
            name="tododesc"
            onChange={(e)=>this.setState({tododesc:e.currentTarget.value})}
          />
          </div>
        </div>
        <button type="submit" className="btn btn-primary col-1">
          Add
        </button>
      </form>
      
    );
  }
}

export default Form;
