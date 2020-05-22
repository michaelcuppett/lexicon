import React from 'react';
import initialState from './initialState.json';
import { findEnglishResults, findHebrewResults } from './functions/search';
import { translateToHebrew } from './utilities';

import { Header } from './ui/Header';
import { Footer } from './ui/Footer';
import { PinContainer } from './containers/PinContainer';
import { SearchContainer } from './containers/SearchContainer';
import { ResultsContainer } from './containers/ResultsContainer';

import { addPin, removePin, applyPinStyles } from './functions/pins.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleTogglePin = this.handleTogglePin.bind(this);
  }

  state = initialState

  setResultState(data, state) {
    var stateObject = {
      [state]: data
    }
    this.setState(stateObject);
  }

  handleView = (e) => {
    const element = e.target;
    const id = element.id;
    element.classList.add("active");
    const nextSibling = element.nextSibling;
    const prevSibling = element.previousSibling;
    if (nextSibling) {nextSibling.classList.remove('active')}
    if (prevSibling) {prevSibling.classList.remove('active')}

    this.setState({
      viewLanguage: `${id}`
    })
  }

  getResults = (e) => {
    const input = e.target.value;
    const translatedInput = translateToHebrew(input);
    // const url = "http://localhost:1337/words?";
    const limit = 10;
    var matches;

    // Add input query in the state.
    this.setState({
      searchInput: input,
    })

    if (this.state.viewLanguage === "english") {
      matches = findEnglishResults(input, limit);
      this.setResultState(matches, "englishResults");
    }

    if (this.state.viewLanguage === "hebrew") {
      matches = findHebrewResults(translatedInput, limit);
      this.setResultState(matches, "hebrewResults");
      this.setState({
        searchInput: translatedInput
      })
    }

    // // Fetch English results and add results to state
    // fetch(url + "English_contains=" + input + "&_limit=" + limit)
    //   .then (response => response.json())
    //   .then(data => this.setResultState(data, "englishResults"))
    //   .catch(err => console.log(err));

    // Fetch Hebrew results and add results to state
    // fetch(url + "Simplified_Hebrew_contains=" + translatedInput + "&_limit=" + limit)
    // .then (response => response.json())
    // .then(data => this.setResultState(data, "hebrewResults"))
    // .catch(err => console.log(err));
    //
    // if (this.state.viewLanguage === "hebrew") {
    //   this.setState({
    //     searchInput: translatedInput
    //   })
    // }
  }

  openHelpbox = () => {
    this.setState(prevState => ({
      toggleHelpbox: !prevState.toggleHelpbox
    }))
  }

  openPins = () => {
    this.setState(prevState => ({
      togglePins: !prevState.togglePins
    }))
  }

  async handleTogglePin(e) {
    var currentPins = this.state.pinnedEntryIds;
    var pin = e.target;
    var pinId = pin.id;

    var newPins = {};

    if (currentPins !== undefined && currentPins.includes(pinId)) {
      newPins = await removePin(pinId, currentPins, this.state.pinnedObjects);
      pin.classList.remove('pinned');
    } else {
      newPins = await addPin(pinId, currentPins);
    }

    // Set state with new array
    await this.setState({
      pinnedEntryIds: newPins.ids,
      pinnedObjects: newPins.objects
    })

    applyPinStyles();
  }

  componentDidMount() {
    if (document.documentElement.clientWidth < 720) {
      this.setState({
        viewType: "narrow",
        loading: false
      })
    } else {
      this.setState({
        viewType: "wide",
        loading: false
      })
    }
  }

  componentDidUpdate() {
    // console.log(this.state.viewLanguage);
    applyPinStyles(this.state.pinnedEntryIds, this.state.englishResults, this.state.hebrewResults);
  }

  render() {
    return (
      (this.state.loading) ? (
        <div className="app">
          <div className="loading">
            <h1>Just a second.</h1>
          </div>
        </div>
      ) : (
        <div className="app">
          <Header />

          <div className="app-body">
            <div className="desktop-flex">
              <SearchContainer value={this.state.searchInput} handler={this.getResults} toggleHelpbox={this.state.toggleHelpbox} openHelpbox={this.openHelpbox}/>
              <PinContainer viewType={this.state.viewType} togglePins={this.state.togglePins} pinnedObjects={this.state.pinnedObjects} openPins={this.openPins} handleTogglePin={this.handleTogglePin}/>
            </div>
            <ResultsContainer viewType={this.state.viewType} viewLanguage={this.state.viewLanguage} handleView={this.handleView} englishResults={this.state.englishResults} hebrewResults={this.state.hebrewResults} handleTogglePin={this.handleTogglePin}/>
          </div>

          <Footer />
        </div>
      )

    );
  }
}
