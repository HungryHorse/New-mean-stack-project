'use strict';

class Icon extends React.Component{
  render(){
    return <i className={this.props.iconName}></i>;
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

ReactDOM.render(
  <Form />,
  document.getElementById('search_bar_container')
);