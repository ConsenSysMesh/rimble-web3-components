'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var RimbleUtils = _interopDefault(require('rimble-utils'));
var rimbleUi = require('rimble-ui');

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bannerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  backgroundColor: "white"
};

var WrongNetwork = function WrongNetwork(_ref) {
  var currentNetwork = _ref.currentNetwork,
      requiredNetwork = _ref.requiredNetwork;

  return React__default.createElement(
    rimbleUi.Box,
    { style: bannerStyle, p: 3 },
    React__default.createElement(
      rimbleUi.Flex,
      { alignItems: "center" },
      React__default.createElement(
        rimbleUi.Box,
        { p: 4 },
        React__default.createElement(rimbleUi.Icon, { name: "Warning", color: "gold", size: "30" })
      ),
      React__default.createElement(
        rimbleUi.Flex,
        { flexDirection: "column" },
        React__default.createElement(
          rimbleUi.Text,
          { fontWeight: "bold" },
          "Switch to the ",
          RimbleUtils.getEthNetworkNameById(requiredNetwork),
          " ",
          "Ethereum network in MetaMask"
        ),
        React__default.createElement(
          rimbleUi.Text,
          null,
          "Change your network in your MetaMask extension. You're currently on",
          " ",
          RimbleUtils.getEthNetworkNameById(currentNetwork)
        )
      )
    )
  );
};

var NoNetwork = function NoNetwork() {
  return React__default.createElement(
    rimbleUi.Box,
    { style: bannerStyle, p: 3 },
    React__default.createElement(
      rimbleUi.Flex,
      { alignItems: "center", justifyContent: "space-between" },
      React__default.createElement(
        rimbleUi.Flex,
        { alignItems: "center" },
        React__default.createElement(
          rimbleUi.Box,
          { p: 4 },
          React__default.createElement(rimbleUi.Icon, { name: "Warning", color: "gold", size: "30" })
        ),
        React__default.createElement(
          rimbleUi.Flex,
          { flexDirection: "column" },
          React__default.createElement(
            rimbleUi.Text,
            { fontWeight: "bold" },
            "Install MetaMask to use our blockchain features"
          ),
          React__default.createElement(
            rimbleUi.Text,
            null,
            "This will let you connect using an Ethereum public address"
          )
        )
      ),
      React__default.createElement(
        rimbleUi.MetaMaskButton,
        null,
        "Install MetaMask"
      )
    )
  );
};

var NotWeb3Browser = function NotWeb3Browser() {
  return React__default.createElement(
    rimbleUi.Box,
    { style: bannerStyle, p: 3 },
    React__default.createElement(
      rimbleUi.Flex,
      { alignItems: "center" },
      React__default.createElement(
        rimbleUi.Box,
        { p: 4 },
        React__default.createElement(rimbleUi.Icon, { name: "Warning", color: "gold", size: "30" })
      ),
      React__default.createElement(
        rimbleUi.Flex,
        { flexDirection: "column" },
        React__default.createElement(
          rimbleUi.Text,
          { fontWeight: "bold" },
          "Your browser doesn't support our blockchain features"
        ),
        React__default.createElement(
          rimbleUi.Text,
          null,
          "Switch to either Brave, FireFox, Opera, or Chrome to continue"
        )
      )
    )
  );
};

var ConnectionBanner = function (_Component) {
  _inherits(ConnectionBanner, _Component);

  function ConnectionBanner() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, ConnectionBanner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ConnectionBanner.__proto__ || Object.getPrototypeOf(ConnectionBanner)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      isCorrectNetwork: null
    }, _this.checkCorrectNetwork = function () {
      var isCorrectNetwork = _this.props.currentNetwork === _this.props.requiredNetwork;
      if (isCorrectNetwork !== _this.state.isCorrectNetwork) {
        _this.setState({ isCorrectNetwork: isCorrectNetwork });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ConnectionBanner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var browserIsWeb3Capable = RimbleUtils.browserIsWeb3Capable();
      this.setState({ browserIsWeb3Capable: browserIsWeb3Capable });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.currentNetwork && this.props.requiredNetwork && this.state.isCorrectNetwork === null) {
        this.checkCorrectNetwork();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(
        "div",
        null,
        this.state.isCorrectNetwork === false ? React__default.createElement(WrongNetwork, {
          currentNetwork: this.props.currentNetwork,
          requiredNetwork: this.props.requiredNetwork
        }) : this.state.browserIsWeb3Capable === false ? React__default.createElement(NotWeb3Browser, null) : this.props.onWeb3Fallback === true || this.props.currentNetwork === null ? React__default.createElement(NoNetwork, null) : null
      );
    }
  }]);

  return ConnectionBanner;
}(React.Component);

ConnectionBanner.propTypes = {
  currentNetwork: PropTypes.number,
  requiredNetwork: PropTypes.number,
  onWeb3Fallback: PropTypes.bool
};

exports.ConnectionBanner = ConnectionBanner;
//# sourceMappingURL=index.js.map
