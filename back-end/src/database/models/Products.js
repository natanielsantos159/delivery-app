module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(9,2),
    urlImage: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });
  return Products;
};