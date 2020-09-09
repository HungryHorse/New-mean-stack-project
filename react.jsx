class Icon extends React.Component{
  render(){
    return <i className={this.props.iconName}></i>;
  }
}

class CloseButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.closeNav = this.closeNav.bind(this);  
  }

  closeNav() {
    document.getElementById("side_bar").style.width = "0";
    document.getElementById("page_container").style.marginLeft= "0";
  }

  render(){
    return <a href="" className="closebtn" onClick={this.closeNav}>×</a>;
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

class SearchButton extends React.Component {
  render(){
    return <button type="submit"><Icon iconName="fa fa-search" /></button>;
  }
}

class SearchBar extends React.Component {
  render(){
    return <input type="text" placeholder="Search.." name="search"></input>;
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);  
  }

  submit(){
    console.log(document.getElementsByClassName("searchBarForm").value);
    return false;
  }

  render(){
    return <form className="searchBarForm" onSubmit={this.submit}><SearchBar /><SearchButton /></form>;
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
  <Form />,
  document.getElementById('search_bar_container')
);

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <CloseButton />,
  document.getElementById('close_button')
);