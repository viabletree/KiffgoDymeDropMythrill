// @flow
import React from 'react';
import { css } from 'aphrodite';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DMTextField, Checkbox } from '../../../components';
import { AppStyles } from '../../../theme';
import styles from './DMDriverListingStyles';
import { DRIVER_FIELDS_NAME } from '../../../constants';
import Util from '../../../services/Util';
import { CHECKBOX_THEME } from '../../Checkbox/CheckboxController';
import { indexOf } from 'lodash';

export default class DMDriverListingView extends React.PureComponent {
  render() {
    const {
      multiSelect,
      isLoading,
      onAllPress,
      onNonePress,
      searchValue,
      onSearchChange,
      searchedList,
      hasFixedHeight,
      selectedDriverIds,
      itemClick,
      isDetailListing,
      showNoneAll
    } = this.props;

    return (
      <div className={`whiteTextWrapper ${css(styles.wrapper)}`}>
        {isLoading && (
          <p className={`${css([styles.para1, AppStyles.textAlignCenter])}`}>
            Loading...
          </p>
        )}
        {!isLoading && (
          <>
            <div>
              <DMTextField
                value={searchValue}
                placeholder="Search"
                icon={faSearch}
                onChange={onSearchChange}
              />
            </div>

            {searchedList.length === 0 && (
              <p
                className={`mt-3 ${css([
                  styles.para1,
                  AppStyles.textAlignCenter
                ])}`}
              >
                No Drivers Available
              </p>
            )}
            {searchedList.length > 0 && showNoneAll && (
              <div className={`d-flex ${css([styles.allNoneWrapper])}`}>
                <button
                  className={`${css([
                    styles.allNoneButton,
                    AppStyles.heading61
                  ])}`}
                  onClick={onAllPress}
                >
                  All
                </button>
                <button
                  className={`${css([
                    styles.allNoneButton,
                    AppStyles.heading61
                  ])}`}
                  onClick={onNonePress}
                >
                  None
                </button>
              </div>
            )}
            <div
              className={`grey_scrollbar ${css([
                styles.listSection,
                hasFixedHeight && styles.fixedHeight,
                multiSelect && AppStyles.mTop0 // removing margins with all / none buttons
              ])}`}
            >
              {searchedList.length > 0 &&
                searchedList.map((item, index) => {
                  const isSelected = selectedDriverIds.includes(item.id);

                  const isInvited =
                    item[DRIVER_FIELDS_NAME.STATUS] === 'INVITED';

                  return (
                    <div
                      className={`${css([
                        styles.item,
                        isSelected && !multiSelect && styles.selectedItem,
                        multiSelect && index === 0 && AppStyles.mTop0,
                        isInvited && styles.invitedItem
                      ])}`}
                      key={item[DRIVER_FIELDS_NAME.ID]}
                      onClick={() => {
                        itemClick(item);
                      }}
                    >
                      {multiSelect && (
                        <Checkbox
                          title={item[DRIVER_FIELDS_NAME.DRIVER_NAME]}
                          isChecked={isSelected}
                          theme={CHECKBOX_THEME.THEME3}
                          onClick={() => {}}
                        />
                      )}

                      {!multiSelect && (
                        <p
                          className={`${css([
                            styles.leftItem,
                            styles.para1,
                            isSelected && AppStyles.fontBold
                          ])}`}
                        >
                          {item[DRIVER_FIELDS_NAME.DRIVER_NAME]}{' '}
                          {isDetailListing && isInvited ? '(Invited)' : ''}
                        </p>
                      )}
                      {isDetailListing && (
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
                      )}
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
