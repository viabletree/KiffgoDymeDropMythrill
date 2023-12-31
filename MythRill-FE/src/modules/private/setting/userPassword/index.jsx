import { Col, Form, Row, Space } from 'antd';
import React, { useState } from 'react';
import ProfileImage from '../profileImage';
import { CommonInputField } from '../../../../components';
import {
  CommonButton,
  CommonPasswordInput,
  CommonPhoneInput,
  CommonTextField
} from '../../../../components/common';
import {
  ALERT_TYPES,
  EMAIL_RULE,
  handlePassworMatch,
  handlePassworNotMatch,
  passwordValidation,
  phoneValidation,
  validatorField
} from '../../../../constants';
import { AppStyles } from '../../../../theme';
import { css } from 'aphrodite';
import './styles.scss';
import { userLoginRequest } from '../../../../redux/slicers/user';
import { userChangePasswordRequest } from '../../../../redux/slicers/user';
import { useDispatch, useSelector } from 'react-redux';
import { toastAlert } from '../../../../services/utils';

const UserPassword = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.user);

  const [form] = Form.useForm();
  const { getFieldValue } = form;

  if (data['login_with'] === 'google' || data['login_with'] === 'facebook')
    return '';

  const onFinish = (values) => {
    setLoading(true);

    const { exisitingPassword, confirmPassword } = values;

    const payloadData = {
      old_password: exisitingPassword,
      new_password: confirmPassword
    };

    dispatch(
      userChangePasswordRequest({
        payloadData,
        responseCallback: (res) => {
          setLoading(false);

          if (res.status) {
            toastAlert(res.message, ALERT_TYPES.success);
            form.resetFields();
            console.log(res, 'res');
          } else {
            console.log(res.errors, 'error');
          }
        }
      })
    );
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="user-password-main">
      <CommonTextField
        fontSize={'16px'}
        text={'Change Password'}
        fontWeight={600}
        className={css(AppStyles.mBottom15)}
      />
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={[20, 10]}>
          <Col
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <Space direction="vertical" className={css(AppStyles.w100)}>
              <CommonTextField text={'Exisiting Password'} />
              <CommonPasswordInput
                name={'exisitingPassword'}
                placeholder={'**************'}
                rules={[
                  {
                    required: true,
                    message: 'Field is required.'
                  }
                ]}
              />
            </Space>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <Space direction="vertical" className={css(AppStyles.w100)}>
              <CommonTextField text={'New Password'} />
              <CommonPasswordInput
                name={'newPassword'}
                placeholder={'**************'}
                rules={[
                  {
                    validator: (_, value) => {
                      return handlePassworNotMatch(
                        _,
                        value,
                        getFieldValue('exisitingPassword')
                      );
                    }
                  }
                ]}
              />
            </Space>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <Space direction="vertical" className={css(AppStyles.w100)}>
              <CommonTextField text={'Confirm Password'} />
              <CommonPasswordInput
                name={'confirmPassword'}
                placeholder={'**************'}
                rules={[
                  {
                    validator: (_, value) => {
                      return handlePassworMatch(
                        _,
                        value,
                        getFieldValue('newPassword')
                      );
                    }
                  }
                ]}
              />
            </Space>
          </Col>
        </Row>

        <Space
          className={css(
            AppStyles.w100,
            AppStyles.justifyEnd,
            AppStyles.mTop10
          )}
        >
          <CommonButton
            width="180px"
            loading={loading}
            text={'change'}
            htmlType="submit"
          />
        </Space>
      </Form>
    </div>
  );
};

export default UserPassword;
