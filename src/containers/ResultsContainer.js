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

class PlusIcon extends React.Component {
 render() {
   return (
     <svg className="plus-symbol" xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" aria-labelledby="resultType">
	     <resultType id="resultType">Plus symbol</resultType>
       <path d="M92.5,247.5A2.5,2.5,0,0,1,90,245V172.5A12.52,12.52,0,0,0,77.5,160H5a2.5,2.5,0,0,1-2.5-2.5v-65A2.5,2.5,0,0,1,5,90H77.5A12.52,12.52,0,0,0,90,77.5V5a2.5,2.5,0,0,1,2.5-2.5h65A2.5,2.5,0,0,1,160,5V77.5A12.52,12.52,0,0,0,172.5,90H245a2.5,2.5,0,0,1,2.5,2.5v65A2.5,2.5,0,0,1,245,160H172.5A12.52,12.52,0,0,0,160,172.5V245a2.5,2.5,0,0,1-2.5,2.5Z"/><path d="M157.5,5V77.5a15,15,0,0,0,15,15H245v65H172.5a15,15,0,0,0-15,15V245h-65V172.5a15,15,0,0,0-15-15H5v-65H77.5a15,15,0,0,0,15-15V5h65m0-5h-65a5,5,0,0,0-5,5V77.5a10,10,0,0,1-10,10H5a5,5,0,0,0-5,5v65a5,5,0,0,0,5,5H77.5a10,10,0,0,1,10,10V245a5,5,0,0,0,5,5h65a5,5,0,0,0,5-5V172.5a10,10,0,0,1,10-10H245a5,5,0,0,0,5-5v-65a5,5,0,0,0-5-5H172.5a10,10,0,0,1-10-10V5a5,5,0,0,0-5-5Z"/>
     </svg>
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
            <h2>{word.Hebrew}</h2>
            <p>{word.English.slice(0,1).toUpperCase() + word.English.slice(1,)}</p>
          </div>
          <div className="result-info">
            <span className="chapter">{word.Chapter}</span>
            <span className="part">{word.Part}</span>
          </div>
        </div>
        <button onClick={this.props.handlePin} className="pin-container"><span className="pin-button"><PlusIcon /></span></button>
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
              <Result word={result} handlePin={this.props.handlePin} key={`container_result-${result.id}`}/>
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
              return <Result word={result} handlePin={this.props.handlePin} key={`container_result-${result.id}`}/>
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
