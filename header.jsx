'use strict';

class Icon extends React.Component{
  render(){
    return <i className={this.props.iconName}></i>;
  }
}

class SideBarOpenButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.openNav = this.openNav.bind(this);  
  }

  openNav() {
    document.getElementById("side_bar").style.width = "250px";
    document.getElementById("page_container").style.marginLeft = "250px";
  }

  render(){
    return <button className="openbtn" onClick={this.openNav}>☰ Open Sidebar</button>
  }
}



class NavBarIcon extends React.Component{
  render(){
    return <button type="button" className="navButtonIcon"><Icon iconName={this.props.iconName}/></button>
  }
}


class NavBarWords extends React.Component{
  render(){
    return <button type="button" className="navButtonText">{this.props.name}</button>;
  }
}

class NavBar extends React.Component{
  render(){
    return <div className="navBar"><NavBarWords name="Test" /></div>
  }
}

class Header extends React.Component{
  render(){
    return (
      <div className="headerReact"> <SideBarOpenButton /><NavBar /> </div>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);
