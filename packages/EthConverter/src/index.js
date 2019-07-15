import React from 'react';
import PropTypes from 'prop-types';

import { Box, Tooltip } from 'rimble-ui';

import Currencies from './CurrencyMap';

class EthConverter extends React.Component {
  state = {
    loading: true,
    results: null,
    symbols: null,
    currencyCode: null,
    currencyDetails: null,
  };

  getTicker = async () => {
    if (this.props.currency === null) {
      console.log('No currencyCode to update');
      return;
    }

    const infuraConversion = 'eth' + this.props.currency;

    const url = 'https://api.infura.io/v1/ticker/' + infuraConversion;
    try {
      const results = await fetch(url)
        .then(response => {
          return response.json();
        })
        .then(results => {
          // console.log(JSON.stringify(results));
          this.setState({ results: results, loading: false }, () => {
            this.updateTimeAgo(results.timestamp);
            this.updateConvertedValue();
            this.getCurrencyDetails();
          });
          return results;
        });
      return results;
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  getCurrencyDetails = () => {
    if (this.state.results === null) {
      return;
    }
    const currencyDetails = Currencies.filter(
      currency => currency.code === this.state.results.quote.toLowerCase(),
    );
    // console.log(currencyDetails[0]);
    this.setState({ currencyDetails: currencyDetails[0] });

    return currencyDetails[0];
  };

  updateConvertedValue = () => {
    if (this.state.results === null) {
      return false;
    }
    const convertedValue = (this.props.value * this.state.results.bid).toFixed(
      2,
    );
    this.setState({ convertedValue });
    return convertedValue;
  };

  updateTimeAgo = () => {
    if (this.state.results === null) {
      return;
    }
    const now = Date.now();

    let diff = now / 1000 - this.state.results.timestamp;
    diff = Math.abs(Math.floor(diff));

    const days = Math.floor(diff / (24 * 60 * 60));
    let leftSec = diff - days * 24 * 60 * 60;

    const hrs = Math.floor(leftSec / (60 * 60));
    leftSec = leftSec - hrs * 60 * 60;

    const min = Math.floor(leftSec / 60);
    leftSec = leftSec - min * 60;

    const timeAgoString = 'Last updated ' + leftSec + ' seconds ago';

    this.setState({
      lastUpdated: timeAgoString,
    });

    return timeAgoString;
  };

  async componentDidMount() {
    console.log('Initial mount', this.props.currency, this.props.value);
    this.getTicker();

    this.interval = setInterval(() => this.updateTimeAgo(), 1000);
    this.tickerInterval = setInterval(() => this.getTicker(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.tickerInterval);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currency !== this.props.currency) {
      console.log('Fetching new currency', this.props.currency);
      this.getTicker();
    } else if (prevProps.value !== this.props.value) {
      this.updateConvertedValue();
    }
  }

  render() {
    return (
      <Box {...this.props}>
        {this.state.loading === false
          ? this.state.results && (
              <Tooltip
                message={
                  this.state.lastUpdated +
                  ' from ' +
                  this.state.results.exchange
                }
              >
                {this.state.currencyDetails && !this.props.noCurrencySymbol && (
                  <>
                    {String.fromCharCode(
                      this.state.currencyDetails.unicodeDecimal,
                    )}
                  </>
                )}
                {this.state.convertedValue}
                {!this.props.noCurrencyCode && <> {this.state.results.quote}</>}
              </Tooltip>
            )
          : 'Loading...'}
      </Box>
    );
  }
}

EthConverter.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  noCurrencyCode: PropTypes.bool,
  noCurrencySymbol: PropTypes.bool,
};

export default EthConverter;
