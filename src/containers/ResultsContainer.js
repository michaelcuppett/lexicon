import React from 'react';

export class ResultsContainer extends React.Component {
  render() {
    return (
      <div className="results-wrapper">
        <div className="view-button-container">
          <button onClick={this.props.handleView} id="hebrew" className="view-button active">Hebrew</button>
          <button onClick={this.props.handleView} id="english" className="view-button">English</button>
        </div>
        {(this.props.viewLanguage === "english") ? (
          <ResultsBlock resultType={"english"} data={this.props.englishResults} value={this.props.searchInput} handlePin={this.props.handleTogglePin}/>
        ) : (
          <ResultsBlock resultType={"hebrew"} data={this.props.hebrewResults} value={this.props.searchInput} handlePin={this.props.handleTogglePin}/>
        )}
      </div>
    )
  }
}

class Result extends React.Component {
  render() {
    const word = this.props.word;
    return (
      <div className="result-entry-container" key={word.word_id} id={word.word_id}>
        <div className="result-content">
          <div className="result-word">
            <h2>{word.hebrew}</h2>
            <p>{word.english.slice(0,1).toUpperCase() + word.english.slice(1,)}</p>
          </div>
          <div className="result-info">
            <span className="chapter">{word.chapter}</span>
            <span className="part">{word.part}</span>
          </div>
        </div>
        <span className="pin-container">
          <button className="pin-button" onClick={this.props.handlePin} id={word.word_id}>
            +
          </button>
        </span>
      </div>
    )
  }
}

export class ResultsBlock extends React.Component {
  render() {
    if (this.props.resultType === "pinned") {
      return (
        <div className={`results-container ${this.props.resultType}`}>
        {(this.props.data.length > 0) ? (
          this.props.data.map(result => {
            return (
              <Result word={result} handlePin={this.props.handlePin} key={`container_result-${result.word_id}`}/>
            )
          })
        ) : (
          <h2>You haven't pinned anything yet.</h2>
        )}
      </div>
      )
    }

    if (this.props.resultType !== "pinned") {
      return (
        (this.props.data.length > 0) ? (
          <div className={`results-container ${this.props.resultType}`}>
            {this.props.data.map(result => {
              return <Result word={result} handlePin={this.props.handlePin} key={`container_result-${result.word_id}`}/>
            })}
          </div>
        ) : (
          <div className={`results-container ${this.props.resultType}`}>
            <h2>Start searching in Hebrew or English</h2>
            <p>Use the search bar to type an English definition, or lookup a Hebrew word by its consonants.</p>
          </div>
        )
      )
    }
  }
}
