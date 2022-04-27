module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    urlImage: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'Products',
    underscored: true,
  });
  return Products;
};