import React from 'react';
import { ResultsBlock } from './ResultsContainer';

export class PinContainer extends React.Component {
  render() {
    if (this.props.viewType === "narrow") {
      return (
        (this.props.togglePins === true) ? (
          <div className="floating-div-container active">
            <div className="floating-div">
              <button onClick={this.props.openPins}>&#10005;</button>
            </div>
            <div className="content">
              <h1>Pinned Results</h1>
              <ResultsBlock resultType={"pinned"} data={this.props.pinnedObjects} handlePin={this.props.handleTogglePin}/>
            </div>
          </div>
        ) : (
          <div className="floating-div-container">
            <div className="floating-div">
              <button onClick={this.props.openPins}>Pins</button>
            </div>
          </div>
        )
      )
    } else {
      return (
        <div className="floating-div-container active">
          <div className="content">
            <h1>Pinned Results</h1>
            <ResultsBlock resultType={"pinned"} data={this.props.pinnedObjects} handlePin={this.props.handleTogglePin}/>
          </div>
        </div>
      )
    }
  }
}
