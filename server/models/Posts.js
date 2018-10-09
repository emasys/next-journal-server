export default (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    name: DataTypes.STRING,
    text: DataTypes.TEXT,
  });
  return Posts;
};
