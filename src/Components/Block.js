import React from 'react';

class Block extends React.Component {
   
  constructor(props) {
    super(props);
}
    
  render() {

  const mystyle = {
      // ADD CODE HERE
      
    };

  return (
    <>
      <div class = "blockers" style={
        // ADD CODE HERE
        this.props.mystyle
        }>
      </div>
      
      <div className="bottom">
          <div className="white"></div>
      </div>


    </>
      );
    }
  }


  export default Block;