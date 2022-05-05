module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'users', key: 'id' },
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'products', key: 'id' },
    },
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,
  });

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products', through: SaleProduct, foreignKey: 'saleId', otherKey: 'productId',
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales', through: SaleProduct, foreignKey: 'productId', otherKey: 'saleId',
    });
  }

  return SaleProduct;
};