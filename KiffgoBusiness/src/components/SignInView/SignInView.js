// @flow
import React from 'react';
import { css } from 'aphrodite';
import { TextField, Button, Modal } from '../../components';
import styles from './SignInStyles';
import { Images, AppStyles } from '../../theme';
import { NavLink } from 'react-router-dom';
import { USER_LOGIN_THEME, ROUTES } from '../../constants';
import Util from '../../services/Util';

export default function SignUpModalView(props) {
  return (
    <div className={`${css(styles.loginBgColor, AppStyles.container)}`}>
      <div className={`${css(styles.loginWraper)}`}>
        <div className={`row`}>
          <div className={`col-lg-12 col-md-12 col-sm-12`}>
            <div className={css(styles.loginHeadContainer)}>
              <h6 className={css(styles.loginHead)}>Log in</h6>
              <h4 className={css(styles.loginSubHead)}>
                Log into your account
              </h4>
            </div>
          </div>
        </div>

        <div className={`row`}>
          <div className={`col-lg-12 col-md-12 col-sm-12`}>
            <form
              className={css(styles.fomrContainer)}
              onSubmit={props.onSigninClick}
            >
              <div className={`row mb-2`}>
                <div className={`form-group col-md-6`}>
                  <label className={`mb-2 ${css(styles.labelForm)}`}>
                    Company email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${css(styles.inputControl)}`}
                    name="email"
                    value={props.email}
                    onChange={props.onChange}
                    placeholder="contact@mybusiness.com"
                  ></input>
                  <span className={`${css(AppStyles.formError)}`}>
                    {props.emailError}
                  </span>
                </div>
                <div className={`form-group col-md-6`}>
                  <div className={css(styles.passwordLabelContainer)}>
                    <label className={`mb-2 ${css(styles.labelForm)}`}>
                      Password
                    </label>
                    <p
                      className={`mb-2 ${css(
                        styles.labelForm,
                        styles.forgotPswd
                      )}`}
                      onClick={props.onForgotPasswordClick}
                    >
                      Forgot your password ?
                    </p>
                  </div>

                  <input
                    type="password"
                    className={`form-control ${css(styles.inputControl)}`}
                    name="password"
                    value={props.password}
                    onChange={props.onChange}
                    placeholder="******"
                    onKeyDown={e => {
                      if (e.key === 'Enter') props.onSigninClick();
                    }}
                  ></input>
                  <span className={`${css(AppStyles.formError)}`}>
                    {props.passwordError}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={`row`}>
          <div className={`col-lg-4 col-md-4 col-sm-12`}></div>
          <div className={`col-lg-8 col-md-8 col-sm-12`}>
            <div className={css(styles.loginBtnContainer)}>
              <NavLink className={css(styles.loginText)} to={ROUTES.SIGN_UP}>
                You don’t have an account ?
              </NavLink>
              <Button
                title="Next"
                isLoading={props.isLoading}
                ripple={false}
                className={css(styles.loginBtn)}
                onClick={() => {
                  // Util.getReq();
                  // Util.getReq();
                  props.onSigninClick();
                }}
              />
              {/* <button
                className={css(styles.loginBtn)}
                onClick={() => {
                  props.onSigninClick();
                }}
              >
                Next
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
