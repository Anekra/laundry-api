'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var _require = require('sequelize'),
  Model = _require.Model;
module.exports = function (sequelize, DataTypes) {
  var Order = /*#__PURE__*/function (_Model) {
    _inherits(Order, _Model);
    var _super = _createSuper(Order);
    function Order() {
      _classCallCheck(this, Order);
      return _super.apply(this, arguments);
    }
    _createClass(Order, null, [{
      key: "associate",
      value: function associate(models) {
        Order.belongsTo(models.User, {
          foreignKey: {
            name: 'customer_id',
            allowNull: false
          },
          as: 'order-customer',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
        Order.belongsToMany(models.Apparel, {
          through: models.OrderItem,
          foreignKey: 'order_id',
          otherKey: 'apparel_id',
          as: 'order-apparel',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
        Order.belongsToMany(models.Service, {
          through: models.OrderItem,
          foreignKey: 'order_id',
          otherKey: 'service_id',
          as: 'order-service',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
      }
    }]);
    return Order;
  }(Model);
  Order.init({
    customer_id: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    pickup_date: DataTypes.DATE,
    delivery_date: DataTypes.DATE,
    total_amount: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {
    sequelize: sequelize,
    modelName: 'Order',
    underscored: true,
    hooks: {
      beforeCreate: function beforeCreate(order) {
        console.log('Before creating Order:', order.id);
      },
      afterCreate: function afterCreate(order) {
        console.log('After creating Order:', order.id);
      },
      beforeUpdate: function beforeUpdate(order) {
        console.log('Before updating Order:', order.id);
      },
      afterUpdate: function afterUpdate(order) {
        console.log('After updating Order:', order.id);
      },
      beforeDestroy: function beforeDestroy(order) {
        console.log('Before deleting Order:', order.id);
      },
      afterDestroy: function afterDestroy(order) {
        console.log('After deleting Order:', order.id);
      }
    }
  });
  return Order;
};