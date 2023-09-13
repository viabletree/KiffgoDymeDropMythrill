// @flow
import React from 'react';
import {
  CURRENCY_KEYS,
  EUROPEAN_COUNTRIES,
  GEOLOCATION_BASE_URL
} from '../../constants';
import _ from 'lodash';
import PricingView from './PricingView';

export default class PricingController extends React.Component {
  state = {
    yearly: false,
    usagePricing: true,
    selectedCurrencyKey: CURRENCY_KEYS.USD
  };
  static propTypes = {};

  static defaultProps = {};
  onChangeYearly = () => {
    const { yearly } = this.state;
    this.setState({ yearly: !yearly });
  };
  onChangePricing = () => {
    const { usagePricing } = this.state;
    this.setState({ usagePricing: !usagePricing });
  };

  componentDidMount() {
    GEOLOCATION_BASE_URL &&
      fetch(`${GEOLOCATION_BASE_URL}`)
        .then(response => response.json())
        .then(data => {
          if (
            data &&
            data.country_name &&
            data.country_name === 'United Kingdom'
          ) {
            return this.setState({
              selectedCurrencyKey: CURRENCY_KEYS.GBP
            });
          }
          if (data && data.country_name && data.country_name === 'Australia') {
            return this.setState({
              selectedCurrencyKey: CURRENCY_KEYS.AUD
            });
          }
          if (
            _.some(
              EUROPEAN_COUNTRIES,
              key => data && data.country_name && data.country_name === key.name
            )
          ) {
            return this.setState({
              selectedCurrencyKey: CURRENCY_KEYS.EUR
            });
          } else {
            return this.setState({
              selectedCurrencyKey: CURRENCY_KEYS.USD
            });
          }
        })
        .catch(err => {
          console.log(err.message);
        });
  }

  onCurrencyClick = key => {
    this.setState({ selectedCurrencyKey: key });
  };
  render() {
    const { yearly, selectedCurrencyKey, usagePricing } = this.state;
    return (
      <PricingView
        {...this.props}
        yearly={yearly}
        usagePricing={usagePricing}
        selectedCurrencyKey={selectedCurrencyKey}
        onChangeYearly={this.onChangeYearly}
        onChangePricing={this.onChangePricing}
        onCurrencyClick={this.onCurrencyClick}
      />
    );
  }
}
