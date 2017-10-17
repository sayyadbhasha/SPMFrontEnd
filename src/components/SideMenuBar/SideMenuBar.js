import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import './SideMenuBar.scss';

class SideMenuBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-menu" >
          <ul>
            <li>
              <Link className="transition sidebar-item  sidebar-item--active " to="/">
                <div className="sidebar-item-icon sidebar-icon-home" />
                <span className="sidebar-title">{this.props.translate('Home')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="MyTeam">
                <div className="sidebar-item-icon sidebar-icon-my-team" />
                <span className="sidebar-title">{this.props.translate('MyTeam')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="CompanyInfo">
                <div className="sidebar-item-icon sidebar-icon-comapny" />
                <span className="sidebar-title">CompanyInformation</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="PersonalInfo">
                <div className="sidebar-item-icon sidebar-icon-personal-information" />
                <span className="sidebar-title">{this.props.translate('PersonalInformation')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="JobInfo">
                <div className="sidebar-item-icon sidebar-icon-job-info" />
                <span className="sidebar-title">{this.props.translate('JobInformation')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Compensation">
                <div className="sidebar-item-icon sidebar-icon-compensation" />
                <span className="sidebar-title">{this.props.translate('Compensation')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Benefits">
                <div className="sidebar-item-icon sidebar-icon-benefits" />
                <span className="sidebar-title">{this.props.translate('Benefits')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="TimeOff">
                <div className="sidebar-item-icon sidebar-icon-time-off" />
                <span className="sidebar-title">{this.props.translate('TimeOff')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Organisation">
                <div className="sidebar-item-icon sidebar-icon-org-chart" />
                <span className="sidebar-title">{this.props.translate('OrgChart')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Workers">
                <div className="sidebar-item-icon sidebar-icon-comparison" />
                <span className="sidebar-title">{this.props.translate('WorkersComparison')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Development">
                <div className="sidebar-item-icon sidebar-icon-development" />
                <span className="sidebar-title">{this.props.translate('Development')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Expenses">
                <div className="sidebar-item-icon sidebar-icon-expenses" />
                <span className="sidebar-title">{this.props.translate('Expenses')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Reports">
                <div className="sidebar-item-icon sidebar-icon-documentation" />
                <span className="sidebar-title">{this.props.translate('Reports')}</span>
              </Link>
            </li>
            <li>
              <Link className="transition sidebar-item " to="Audit">
                <div className="sidebar-item-icon sidebar-icon-audit" />
                <span className="sidebar-title">{this.props.translate('Audit')}</span>
              </Link>
            </li>
          </ul>
          <div className="sidebar-toggler js-sidebar-toggle">
            <svg enableBackground="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" space="preserve" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" fill="#175d9d" /></svg>
          </div>

        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code };
}

export default connect(mapStateToProps)(SideMenuBar);
