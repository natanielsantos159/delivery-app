module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' }
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' }
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 2),
    },
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  });

  Sale.associate = (models) => {
    models.Sale.belongsTo(models.User, {
      as: 'seller', foreignKey: 'sellerId',
    });
    models.Sale.belongsTo(models.User, {
      as: 'user', foreignKey: 'userId',
    });
  }

  return Sale;
};
