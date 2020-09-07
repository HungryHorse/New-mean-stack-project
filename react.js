'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(e){
    if(e.keyCode == 13){
      console.log('value', e.target.value);
    }
  }

  render() {
    return e(
      'input', 
      {placeholder:"Search...", class:'searchBar', onKeyDown:this.keyPress}
    );
  }

}

var domContainer = document.querySelector('#search_bar_container');
ReactDOM.render(e(SearchBar), domContainer);

domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);