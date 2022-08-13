module.exports = (sequelize, DataTypes) => {
  const Practices = sequelize.define("Practices", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    practice_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Practices.associate = (models) => {
    Practices.hasMany(models.Patients, {
      onDelete: "cascade",
      foreignKey: "practice_id",
    });
  };

  return Practices;
};
