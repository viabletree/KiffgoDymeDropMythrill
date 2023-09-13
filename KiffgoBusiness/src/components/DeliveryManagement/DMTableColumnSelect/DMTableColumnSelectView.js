import _ from 'lodash';
import React from 'react';
import styles from './DMTableColumnSelectStyles';
import { css } from 'aphrodite';
import { Button } from '../../../components';
import { Images } from '../../../theme';
import OutsideClickHandler from 'react-outside-click-handler';

export default class DMTableColumnSelectView extends React.PureComponent {
  render() {
    const {
      showSelector,
      onColumnSelectorClickShow,
      onColumnSelectorClickHide,
      tableSettings,
      onColumnSelect
    } = this.props;
    return (
      <div className={`${css(styles.selectContainer)}`}>
        <OutsideClickHandler onOutsideClick={onColumnSelectorClickHide}>
          <div onClick={onColumnSelectorClickShow}>
            <img
              src={Images.tableViewSelectColumnsButton}
              className={`${css(styles.buttonIcon)}`}
            />
          </div>

          {showSelector && (
            <div className={`${css(styles.selectOptions)}`}>
              <div className={`${css(styles.optionHeadingContainer)}`}>
                <span className={`${css(styles.optionHeading)}`}>
                  Select Table Columns
                </span>
              </div>
              <div className={`${css(styles.optionContainer)}`}>
                {Object.keys(tableSettings).map(function(keyName, keyIndex) {
                  return (
                    <div
                      className={`${css(styles.option)}`}
                      key={keyName}
                      onClick={() => {
                        if (!tableSettings[keyName].default) {
                          onColumnSelect(
                            tableSettings[keyName].selector,
                            !tableSettings[keyName].visible
                          );
                        }
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={!tableSettings[keyName].visible}
                        disabled={tableSettings[keyName].default}
                      />
                      <span className={`${css(styles.optionText)}`}>
                        {tableSettings[keyName].name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </OutsideClickHandler>
      </div>
    );
  }
}
