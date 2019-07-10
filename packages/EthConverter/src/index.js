import React from 'react';
import ReactDOM from 'react-dom';
import {
  Heading,
  Box,
  Flex,
  Field,
  Input,
  Select,
  Card,
  Text,
} from 'rimble-ui';

import Currencies from './CurrencyMap';

class EthConverter extends React.Component {
  state = {
    baseValue: 1,
    loading: true,
    conversion: [],
    lastUpdate: '',
    results: null,
    symbols: null,
    currencyCode: null,
    currencyDetails: null,
  };

  getTicker = async () => {
    if (this.state.currencyCode === null) {
      console.log('No currencyCode to update');
      return;
    }

    const infuraConversion = 'eth' + this.state.currencyCode;

    console.log('Fetching results for ' + infuraConversion);

    const url = 'https://api.infura.io/v1/ticker/' + infuraConversion;
    try {
      const results = await fetch(url)
        .then(response => {
          return response.json();
        })
        .then(results => {
          console.log(JSON.stringify(results));
          this.setState({ results: results }, () => {
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

  buildCurrencyTypeList = () => {
    const currencyTypes = [...new Set(Currencies.map(item => item.type))];

    console.log(currencyTypes);
    this.setState({ currencyTypes });
  };

  getCurrencyDetails = () => {
    if (this.state.results === null) {
      return;
    }
    const currencyDetails = Currencies.filter(
      currency => currency.code === this.state.results.quote.toLowerCase(),
    );
    console.log(currencyDetails[0]);
    this.setState({ currencyDetails: currencyDetails[0] });

    return currencyDetails[0];
  };

  updateConvertedValue = () => {
    if (this.state.results === null) {
      return false;
    }
    const convertedValue = this.state.baseValue * this.state.results.bid;
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

    const timeAgoString =
      'Last updated ' +
      // days +
      // ' days ' +
      // hrs +
      // ' hours ' +
      // min +
      // ' minutes and ' +
      leftSec +
      ' seconds ago';

    this.setState({
      lastUpdated: timeAgoString,
    });

    return timeAgoString;
  };

  onCurrencyTypeSelected = e => {
    e.preventDefault();
    // find currencies that match and create new array of only name and code
    // Need to wait for rimble-ui version that supports this - 0.9.5
    // const currencyDropdown = Currencies.filter(currency => currency.type === e.target.value).map(currency => ({label: currency.name, value: currency.code}));
    const currencyDropdown = [
      ...new Set(
        Currencies.filter(currency => currency.type === e.target.value).map(
          currency => currency.code,
        ),
      ),
    ];
    console.log('currencyDropdown', currencyDropdown);
    this.setState({ currencyDropdown, results: null, currencyCode: null });
  };

  onCurrencySelected = e => {
    e.preventDefault();

    const currencyCode = e.target.value;
    console.log('Currency code: ', currencyCode);
    this.setState({ currencyCode }, () => {
      this.getTicker();
    });
  };

  onInputChange = e => {
    e.preventDefault();
    console.log('baseValue', e.target.value);
    this.setState({ baseValue: e.target.value }, () => {
      this.updateConvertedValue();
    });
  };

  populateDropdown = async () => {
    const values = await fetch('https://api.infura.io/v1/ticker/symbols')
      .then(response => {
        return response.json();
      })
      .then(results => {
        return results.symbols;
      });

    return values;
  };

  async componentDidMount() {
    const values = await this.populateDropdown();
    console.log('values', values);
    this.setState({ conversions: values }, () => {
      this.buildCurrencyTypeList();
      this.setState({ loading: false });
    });

    this.interval = setInterval(() => this.updateTimeAgo(), 1000);
    this.tickerInterval = setInterval(() => this.getTicker(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.tickerInterval);
  }

  render() {
    return (
      <Box className="App" m={5}>
        <Heading.h1>Infura Conversion API</Heading.h1>
        {this.state.loading === false ? (
          <Flex alignItems={'center'} mt={4} mx={'auto'}>
            <Field label={'Eth Amount'} mr={4}>
              <Input
                type="number"
                required
                value={this.state.baseValue}
                onChange={this.onInputChange}
              />
            </Field>
            <Field label={'Currency Type'} mr={4}>
              <Select
                name="type"
                onChange={this.onCurrencyTypeSelected}
                value={this.state.currentCurrencyType}
                items={this.state.currencyTypes}
                required
              />
            </Field>
            {this.state.currencyDropdown && (
              <Field label={'Currency'} mr={4}>
                <Select
                  name="symbol"
                  onChange={this.onCurrencySelected}
                  value={this.state.convert}
                  items={this.state.currencyDropdown}
                  required
                />
              </Field>
            )}

            {this.state.results && (
              <Heading.h3 pt={2}>
                {this.state.currencyDetails && (
                  <Text.span>
                    {String.fromCharCode(
                      this.state.currencyDetails.unicodeDecimal,
                    )}
                  </Text.span>
                )}{' '}
                {this.state.convertedValue} {this.state.results.quote}
              </Heading.h3>
            )}
          </Flex>
        ) : (
          'Loading...'
        )}

        {this.state.convert && <div>Value: {this.state.convert}</div>}

        {this.state.results && (
          <Card>
            <Heading.h2>Conversion Details</Heading.h2>
            <Flex mt={3}>
              <Text width={'100px'}>Base:</Text>{' '}
              <Text>{this.state.results.base}</Text>
            </Flex>
            <Flex>
              <Flex />
              <Text width={'100px'}>Quote:</Text>{' '}
              <Text>{this.state.results.quote}</Text>
            </Flex>
            <Flex>
              <Text width={'100px'}>Bid:</Text>{' '}
              <Text>
                {this.state.currencyDetails && (
                  <Text.span>
                    {String.fromCharCode(
                      this.state.currencyDetails.unicodeDecimal,
                    )}
                  </Text.span>
                )}
                {this.state.results.bid}
              </Text>
            </Flex>
            <Flex>
              <Text width={'100px'}>Ask:</Text>{' '}
              <Text>
                {this.state.currencyDetails && (
                  <Text.span>
                    {String.fromCharCode(
                      this.state.currencyDetails.unicodeDecimal,
                    )}
                  </Text.span>
                )}
                {this.state.results.ask}
              </Text>
            </Flex>
            <Flex>
              <Text width={'100px'}>Exchange:</Text>{' '}
              <Text>{this.state.results.exchange}</Text>
            </Flex>
            <Text>{this.state.lastUpdated}</Text>
          </Card>
        )}
      </Box>
    );
  }
}

export default EthConverter;
