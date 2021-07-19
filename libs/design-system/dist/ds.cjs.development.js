'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var MenuItem = function MenuItem(_ref) {
  var text = _ref.text;
  return React.createElement("span", {
    style: {
      marginLeft: 20
    }
  }, text);
};

var Header = function Header() {
  return React.createElement("div", {
    style: {
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: 'aqua'
    }
  }, React.createElement("div", null, "logo"), React.createElement("div", null, ['home', 'about', 'login'].map(function (t) {
    return React.createElement(MenuItem, {
      text: t
    });
  })));
};

var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React.createElement("div", null, children || "testing comp");
};

var Sidebar = function Sidebar() {
  return React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 200,
      height: '100%',
      padding: 10,
      backgroundColor: 'greenyellow'
    }
  }, "sidebar");
};

var Card = function Card() {
  return React.createElement("div", null, "Card comp - 2");
};

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return React.createElement("div", null, React.createElement(Header, null), React.createElement("div", {
    style: {
      position: 'relative',
      height: 'calc(100vh - 60px)',
      padding: 10
    }
  }, React.createElement(Sidebar, null), children, React.createElement("div", null, "4")));
};

exports.Card = Card;
exports.Header = Header;
exports.Layout = Layout;
exports.Sidebar = Sidebar;
exports.Thing = Thing;
//# sourceMappingURL=ds.cjs.development.js.map
