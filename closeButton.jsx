'use strict';

class CloseButton extends React.Component{
  constructor(props) {
    super(props);

    this.closeNav = this.closeNav.bind(this);  
  }

  closeNav() {
    document.getElementById("side_bar").style.width = "0";
    document.getElementById("page_container").style.marginLeft= "0";
  }

  render(){
    return <span  href="" className="closebtn" onClick={this.closeNav}>×</span>;
  }
}

ReactDOM.render(
  <CloseButton />,
  document.getElementById('close_button')
);