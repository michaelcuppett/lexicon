import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div className="searchBox">
      <label>
        <input type="text" id="searchField" value={this.props.value} onChange={this.props.handler} />
        Search for a word or definition
      </label>
      </div>
    );
  }
}

function Helpbox() {
  return(
    <div className="helpbox">
      <h2>Using the Search</h2>
      <h3>Find English definitions</h3>
      <p>Start searching by typing a key word or phrase. Matching results should show up instantly.</p>
      <h3>Find Hebrew words</h3>
      <p>Try searching in Hebrew with the English equivalents below. Vowels don't matter; just start typing consonants to find a word.</p>
      <div id="shortcuts">
        <span>a<br/>א</span>
        <span>A<br/>ע</span>
        <span>b<br/>ב</span>
        <span>d<br/>ד</span>
        <span>g<br/>ג</span>
        <span>h<br/>ה</span>
        <span>H<br/>ח</span>
        <span>k<br/>כ</span>
        <span>l<br/>ל</span>
        <span>m<br/>מ</span>
        <span>n<br/>נ</span>
        <span>p<br/>פ</span>
        <span>q<br/>ק</span>
        <span>r<br/>ר</span>
        <span>s<br/>ס</span>
        <span>S<br/>ש</span>
        <span>T<br/>ת</span>
        <span>t<br/>ט</span>
        <span>v<br/>ו</span>
        <span>y<br/>י</span>
        <span>z<br/>ז</span>
        <span>Z<br/>צ</span>
      </div>
      <h3>Other tips</h3>
      <p>There's no need to specify whether you are searching in Hebrew or English. It's also important to note that the search input is punctuation-sensitive.</p>
    </div>
  );
}

export class SearchContainer extends React.Component {

  render() {

    return (
      <div className="search">
        <Search value={this.props.value} translation={this.props.translation} handler={this.props.handler}/>
        {(this.props.toggleHelpbox === true) ? (
          <React.Fragment>
            <button onClick={this.props.openHelpbox} className="help-button">Close help</button>
            <Helpbox />
          </React.Fragment>
        ) : (
          <button onClick={this.props.openHelpbox} className="help-button">Need help?</button>
        )}
      </div>
    );
  }
}
