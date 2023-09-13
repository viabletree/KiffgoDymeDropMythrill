// @flow
import _ from 'lodash';
import React from 'react';
import { css } from 'aphrodite';
import {
  faPlus,
  faMinus,
  faPencilAlt,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { DMHubListing } from '../../..';
import styles from './DmHubSettingStyles';
import { DM_MODULES, ROUTES } from '../../../../constants';

export default class DmHubSettingView extends React.PureComponent {
  render() {
    return (
      <div className={`${css(styles.wrapper)}`}>
        <div className={`${css(styles.body)}`}>
          <DMHubListing
            {...this.props}
            isLoading={
              this.props.hubListing.length === 0 && this.props.isLoading
            }
            isDetailListing
          />
        </div>
        <div className={`${css(styles.footer)}`}>
          <div className={'d-flex'}>
            <div
              className={`${css(styles.footerLeft)}`}
              onClick={() => alert('import')}
            ></div>
            <div className={`${css(styles.footerCenter)}`}>
              <div
                className={`${css([
                  !this.props.selectedHubId && styles.disabledContainer
                ])}`}
                onClick={this.props.onEdit}
              >
                <FontAwesomeIcon
                  className={`${css(styles.editIcon)}`}
                  icon={faPencilAlt}
                />
                <span>Edit</span>
              </div>

              <FontAwesomeIcon
                className={`${css([
                  styles.plusIcon,
                  !this.props.selectedHubId && styles.disabledContainer
                ])}`}
                icon={faMinus}
                onClick={this.props.onDelete}
              />
            </div>
            <div className={`${css(styles.footerRight)}`}>
              <div onClick={this.props.onCreate}>
                <FontAwesomeIcon
                  className={`${css(styles.plusIcon)}`}
                  icon={faPlus}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
