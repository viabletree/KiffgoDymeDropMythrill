// @flow
import React from 'react';
import { css } from 'aphrodite';
import { Images, AppStyles } from '../../theme';
import { TextField, Button, Modal } from '../../components';
import styles from './ForgotPasswordModalStyles';

export default class ForgotPasswordModalView extends React.PureComponent {
  render() {
    const { enableSubmitButton } = this.props;
    return (
      <div>
        <Modal
          open={this.props.open}
          onClose={this.props.onCloseModal}
          showCloseIcon={false}
          className={`${css(styles.modal)}`}
        >
          <div className={css([styles.wrapper])}>
            {/* FORM SECTION */}
            {/* <form> */}
            <div className={css([styles.formWrapper])}>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  {this.props.requestSent && (
                    <div>
                      <p
                        className={`${css(
                          AppStyles.mBottom10,
                          AppStyles.lineHeight22
                        )}`}
                      >
                        Thanks! If there's an account associated with{' '}
                        <span className={css(AppStyles.linkStyle1)}>
                          {this.props.email}
                        </span>
                        , we'll send the password reset instructions
                        immediately.
                      </p>
                    </div>
                  )}

                  {!this.props.requestSent && (
                    <div>
                      <p
                        className={`${css(
                          AppStyles.strong,
                          AppStyles.fontBold,
                          styles.heading,
                          AppStyles.mBottom15
                        )}`}
                      >
                        Enter your email address
                      </p>
                      <p
                        className={`${css(
                          AppStyles.strong,
                          AppStyles.mBottom30,
                          AppStyles.lineHeight22
                        )}`}
                      >
                        We will sent you a link via email and you can use to
                        reset your password
                      </p>
                      <p
                        className={`${css(
                          AppStyles.strong,
                          AppStyles.mBottom20,
                          AppStyles.lineHeight22,
                          AppStyles.fontBold
                        )}`}
                      >
                        Email
                      </p>
                      <form onSubmit={this.props.onSubmitClick} method="post">
                        <div className={`d-flex align-items-center`}>
                          <div
                            className={`flex-grow-1 ${css(AppStyles.mRight10)}`}
                          >
                            <TextField
                              placeholder="Email"
                              value={this.props.email}
                              onChange={e => this.props.onChange(e, 'email')}
                              maxLength={50}
                            />
                          </div>
                          <div className="">
                            <Button
                              title="Send Link"
                              disabled={!this.props.enableSubmitButton}
                              isLoading={this.props.isLoading}
                              ripple={false}
                              className={`${css([
                                styles.sendLink,
                                enableSubmitButton && styles.btnBg
                              ])}`}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
            {/* </form> */}
          </div>
        </Modal>
      </div>
    );
  }
}
