function openNav() {
  document.getElementById("sideBar").style.width = "250px";
  document.getElementById("mainContent").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("mainContent").style.marginLeft= "0";
}

class SideBar extends React.Component{
  render(){
    return <a href="" class="closebtn" onClick={closeNav()}>×</a>;
  }
}

class SearchButton extends React.Component {
  render(){
    return <button type="submit"><i class="fa fa-search"></i></button>;
  }
}

class SearchBar extends React.Component {
  render(){
    return <input type="text" placeholder="Search.." name="search"></input>;
  }
}

class Form extends React.Component {
  render(){
    return <form class="searchBarForm" action=""><SearchBar /><SearchButton /></form>;
  }
}

class NavBarIcon extends React.Component{
  render(){
    return <button type="button" class="navButtonIcon"><i class={this.props.iconName}></i></button>
  }
}

class NavBarWords extends React.Component{
  render(){
    return <button type="button" class="navButtonText">{this.props.name}</button>;
  }
}

class NavBar extends React.Component{
  render(){
    return <div class="navBar"><NavBarWords name="Test" /></div>
  }
}

class Header extends React.Component{
  render(){
    return (
      <NavBar />
    );
  }
}

ReactDOM.render(
  <SideBar />,
  document.getElementById('side_bar')
);

ReactDOM.render(
  <Form />,
  document.getElementById('search_bar_container')
);

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

