// @flow
import React from 'react';
import { css } from 'aphrodite';
import _ from 'lodash';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DMTextField } from '../../../components';
import { AppStyles } from '../../../theme';
import styles from './DMHubListingStyles';
import { DRIVER_FIELDS_NAME, HUB_FIELDS_NAME } from '../../../constants';
import Util from '../../../services/Util';

export default class DMHubListingView extends React.PureComponent {
  render() {
    return (
      <div className={`whiteTextWrapper ${css(styles.wrapper)}`}>
        {this.props.isLoading && (
          <p className={`${css([styles.para1, AppStyles.textAlignCenter])}`}>
            Loading...
          </p>
        )}
        {!this.props.isLoading && (
          <>
            {this.props.hubListing.length === 0 && (
              <p
                className={`mt-3 ${css([
                  styles.para1,
                  AppStyles.textAlignCenter
                ])}`}
              >
                No Hubs Available
              </p>
            )}
            <div
              className={`grey_scrollbar ${css([
                styles.listSection,
                this.props.hasFixedHeight && styles.fixedHeight
              ])}`}
            >
              {this.props.hubListing.length > 0 &&
                this.props.hubListing.map(item => {
                  const isSelected = item.id === this.props.selectedHubId;

                  return (
                    <div
                      className={`${css([
                        styles.item,
                        isSelected && styles.selectedItem
                      ])}`}
                      key={item[HUB_FIELDS_NAME.ID]}
                      onClick={() => {
                        this.props.itemClick(item);
                      }}
                    >
                      <div>
                        <p
                          className={`${css([
                            styles.leftItem,
                            styles.para1,
                            isSelected && AppStyles.fontBold
                          ])}`}
                        >
                          {item[HUB_FIELDS_NAME.NAME]}{' '}
                        </p>
                        {!_.isEmpty(item[HUB_FIELDS_NAME.ADDRESS]) && (
                          <p
                            className={`mt-1 ${css([
                              styles.leftItem,
                              styles.para2,
                              isSelected && AppStyles.fontBold
                            ])}`}
                          >
                            {item[HUB_FIELDS_NAME.ADDRESS]}
                            {' , '}
                            {item[HUB_FIELDS_NAME.BUILDING]}
                          </p>
                        )}
                        {_.isEmpty(item[HUB_FIELDS_NAME.ADDRESS]) && (
                          <p
                            className={`mt-1 ${css([
                              styles.leftItem,
                              styles.para2,
                              isSelected && AppStyles.fontBold
                            ])}`}
                          >
                            {item[HUB_FIELDS_NAME.LOCATION].latitude}
                            {' , '}
                            {item[HUB_FIELDS_NAME.LOCATION].longitude}
                          </p>
                        )}
                      </div>

                      {/* {this.props.isDetailListing && (
                        <p
                          className={`${css([
                            styles.rightItem,
                            styles.para1,
                            isSelected && AppStyles.fontBold
                          ])}`}
                        >
                          {Util.getFormattedPhone(
                            item[DRIVER_FIELDS_NAME.DRIVER_PHONE]
                          )}
                        </p>
                      )} */}
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    );
  }
}
