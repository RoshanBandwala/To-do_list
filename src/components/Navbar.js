import React from "react";
class Navbar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fntsty3 ">
        
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TodoList
          </a>
            <form className="d-flex" role="search">
            
              <button className='btn btn-outline-success mx-3' onClick={()=>{this.props.Reset()}}>Reset</button>
            </form>
          </div>
      </nav>
    );
  }
}

export default Navbar;
