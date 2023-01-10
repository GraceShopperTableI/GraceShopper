const sequelize = require("sequelize");
const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
  // product_id
  // order_id
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  cartSession: {
    type: Sequelize.FLOAT,
    unique: true,
    allowNull: false,
  },
});

module.exports = Cart;