import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setLanguage } from '../../Services/Actions/LanguageActions';


class Buttonslanguage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      languageButtonText: 'ENG'
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setLanguageButtonText(nextProps)
  }

  setLanguageButtonText(nextProps) {
    if (nextProps.settings.language === 'en') {
      this.setState({ languageButtonText: "繁" })
    } else if (nextProps.settings.language === 'zht') {
      this.setState({ languageButtonText: 'ENG' })
    }
  }

  onLanguageButtonPress = () => {
    if (this.props.settings.language === 'en') {
      this.props.dispatch(setLanguage('zht'))

    } else if (this.props.settings.language === 'zht') {
      this.props.dispatch(setLanguage('en'))
    }
  }

  render() {
    return (
      <div>
        <h1 onClick={this.onLanguageButtonPress}> {this.state.languageButtonText}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttonslanguage)
