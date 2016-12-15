"use strict";

module.exports = function(sequelize, DataTypes){
  return sequelize.define('sales', {
    stripeId: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    stripeCustomerId: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    product: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    card: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    ref: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  },{
    indexes : [
      {
        name : "stripeCustomerId",
        fields : ["stripeCustomerId"]
      },
      {
        name : "ref",
        fields : ["ref"]
      },
      {
        name : "product",
        fields : ["product"]
      },
      {
        name : "card",
        fields : ["card"]
      },
      {
        name : "email",
        fields : ["email"]
      }
    ]
  });
};
