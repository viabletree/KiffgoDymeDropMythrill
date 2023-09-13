// @flow
import React from 'react';
import { css } from 'aphrodite';

import styles from './RequirementsSectionStyles';
import { DMTextField, Checkbox } from '../../../../components';
import { AppStyles } from '../../../../theme';
import { CHECKBOX_THEME } from '../../../Checkbox/CheckboxController';
import { TASK_FIELDS_NAME, TASK_PROOF_LIST } from '../../../../constants';

export default class RequirementsSectionView extends React.PureComponent {
  render() {
    return (
      <div className={'mt-5'}>
        <div className={css(styles.headWrapper)}>
          <span className={css(AppStyles.heading60)}>ReQUIREMENTS</span>
        </div>
        <div className={'mt-3'}>
          {Object.keys(TASK_PROOF_LIST).map((data, id) => {
            return (
              <div className={'mt-2 mb-3'} key={id}>
                <Checkbox
                  name={TASK_PROOF_LIST[data].title}
                  isDisabled={this.props.disabled}
                  title={TASK_PROOF_LIST[data].title}
                  isChecked={this.props.taskInput[
                    TASK_FIELDS_NAME.PROOF
                  ].includes(TASK_PROOF_LIST[data].type)}
                  theme={CHECKBOX_THEME.THEME3}
                  onClick={() => {
                    this.props.checkboxClick(TASK_PROOF_LIST[data].type);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
