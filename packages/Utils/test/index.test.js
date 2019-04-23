import React from 'react';
import ReactDOM from 'react-dom';
import RimbleUtils from '../src';

it('returns a main for network 1', () => {
  const networkName = RimbleUtils.getEthNetworkNameById(1);
  expect(networkName).toBe('Main');
});
it('returns a main for network 3', () => {
  const networkName = RimbleUtils.getEthNetworkNameById(3);
  expect(networkName).toBe('Ropsten');
});
it('returns a main for network 4', () => {
  const networkName = RimbleUtils.getEthNetworkNameById(4);
  expect(networkName).toBe('Rinkeby');
});
it('returns a main for network 42', () => {
  const networkName = RimbleUtils.getEthNetworkNameById(42);
  expect(networkName).toBe('Kovan');
});
it('returns a main for network 11190', () => {
  const networkName = RimbleUtils.getEthNetworkNameById(11190);
  expect(networkName).toBe('Custom');
});
it('returns a main for network (empty)', () => {
  const networkName = RimbleUtils.getEthNetworkNameById();
  expect(networkName).toBe('None');
});
it('returns a main for network ("")', () => {
  const networkName = RimbleUtils.getEthNetworkNameById('');
  expect(networkName).toBe('None');
});
