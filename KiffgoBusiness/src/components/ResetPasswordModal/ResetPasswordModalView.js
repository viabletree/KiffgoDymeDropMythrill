// @flow
import React from 'react';
import { css } from 'aphrodite';
import { Images, AppStyles } from '../../theme';
import { TextField, Button, Modal } from '../../components';
import styles from './ResetPasswordModalStyles';
import { PASSWORD_RESET_SUCCESS_MSG } from '../../constants';

export default function ResetPasswordModalView(props) {
  return (
    <div>
      <Modal open={props.open} onClose={props.onCloseModal}>
        <div className={css(styles.wrapper)}>
          {/* LOGO */}
          <img src={Images.logo_green} alt="Kiffgo" width={220} />

          {/* <form> */}
          <div className={css([styles.formWrapper])}>
            <div className="row">
              <div className="col-md-12">
                {props.resetSucceeded && (
                  <div>
                    <p
                      className={`${css(
                        AppStyles.mBottom10,
                        AppStyles.lineHeight22
                      )}`}
                    >
                      {PASSWORD_RESET_SUCCESS_MSG}
                    </p>

                    <div className={`row ${css(AppStyles.mTop20)}`}>
                      <div className="col-md-8 d-flex">
                        <div className={css([styles.buttonWrapper])}>
                          <Button title="Login" onClick={props.loginClick} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {!props.resetSucceeded &&
                  props.formData.map(item => {
                    return (
                      <div className={css([AppStyles.mTop10])} key={item.id}>
                        <TextField
                          {...item}
                          placeholder={item.title}
                          value={props[item.name]}
                          onChange={e => props.onChange(e, item.name)}
                        />
                      </div>
                    );
                  })}

                {!props.resetSucceeded && (
                  <div className={`row ${css(AppStyles.mTop20)}`}>
                    <div className="offset-md-12 col-md-12 d-flex align-items-center justify-content-end">
                      <div className={css([styles.buttonWrapper])}>
                        <Button
                          title="Submit"
                          onClick={props.onSubmitClick}
                          disabled={!props.enableSubmitButton}
                          isLoading={props.isLoading}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* </form> */}
        </div>
      </Modal>
    </div>
  );
}
