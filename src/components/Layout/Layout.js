import React from 'react';
import { connect } from 'react-redux';
// import { Col } from 'react-bootstrap';
import { initialize, addTranslationForLanguage, setActiveLanguage } from 'react-localize-redux';
import SideMenuBar from '../SideMenuBar/SideMenuBar';
import NavBar from '../NavBar/NavBar';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ChatBot from '../ChatBot/ChatBot';
import Help from '../Help/Help';
import './Layout.scss';
import English from '../../data/en.json';
import German from '../../data/de.json';
import French from '../../data/fr.json';

class Layout extends React.Component {

  componentWillMount() {
    const languages = ['en', 'fr', 'de'];
    this.props.dispatch(initialize(languages));
    this.props.dispatch(addTranslationForLanguage(English, 'en'));
    this.props.dispatch(addTranslationForLanguage(French, 'fr'));
    this.props.dispatch(addTranslationForLanguage(German, 'de'));
    this.props.dispatch(setActiveLanguage('en'));
  }

  render() {
    const { location } = this.props;
    const mypath = location.pathname;
    console.log(location.pathname);
    return (
      <div>
        {mypath === '/Login' ? this.props.children :
        <div>
          <SideMenuBar />
          <main className="app">
            <div className="app-wrapper">
              <NavBar />
              <div className="app-container">
                <ChatBot />
                {mypath === '/' ? '' :
                <div className="container">
                  <div className="page-nav">
                    <BreadCrumbs />
                    <Help />
                  </div>
                </div>
                }
                {this.props.children}
              </div>
            </div>
          </main>
        </div>
        }
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { locale: state.locale };
}

export default connect(mapStateToProps)(Layout);
