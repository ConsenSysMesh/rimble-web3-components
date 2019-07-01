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
  };

  log = symbol => {
    console.log('Symbol', symbol);
  };

  getTicker = async symbol => {
    const url = 'https://api.infura.io/v1/ticker/' + symbol;
    try {
      const results = await fetch(url)
        .then(response => {
          return response.json();
        })
        .then(results => {
          console.log(JSON.stringify(results));
          this.setState({ results: results });
          this.updateTimeAgo(results.timestamp);
          this.updateConvertedValue();
          return results;
        });
      return results;
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  buildCurrencyList = () => {
    let currencyList = [];

    currencyList = this.state.conversions.map(currency => {
      console.log(currency);
      return currency;
    });

    return currencyList;
  };

  updateConvertedValue = () => {
    const convertedValue = this.state.baseValue * this.state.results.bid;
    this.setState({ convertedValue });
    return convertedValue;
  };

  updateTimeAgo = () => {
    console.log('timestamp', this.state.results.timestamp);
    const now = Date.now();

    console.log('now', now);

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
      days +
      ' days ' +
      hrs +
      ' hours ' +
      min +
      ' minutes and ' +
      leftSec +
      ' seconds ago';

    console.log('timeAgoString', timeAgoString);

    this.setState({
      lastUpdated: timeAgoString,
    });

    return timeAgoString;
  };

  onDropdownSelected = e => {
    e.preventDefault();

    const symbol = e.target.value;
    console.log('THE VAL', symbol);
    this.getTicker(symbol);
  };

  onInputChange = e => {
    e.preventDefault();
    console.log('baseValue', e.target.value);
    this.setState({ baseValue: e.target.value });
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
    this.setState({ conversions: values, loading: false }, () => {
      this.buildCurrencyList();
    });
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
            <Field label={'Choose currency'} mr={4}>
              <Select
                name="country"
                onChange={this.onDropdownSelected}
                value={this.state.convert}
                items={this.state.conversions}
                required
              />
            </Field>
            <Field label={'Converted value'} mr={2}>
              <Input type="number" value={this.state.convertedValue} required />
            </Field>
            {this.state.results && (
              <Heading.h3 pt={2}>{this.state.results.quote}</Heading.h3>
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
              <Text>{this.state.results.bid}</Text>
            </Flex>
            <Flex>
              <Text width={'100px'}>Ask:</Text>{' '}
              <Text>{this.state.results.ask}</Text>
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
