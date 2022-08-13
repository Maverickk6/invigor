module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define("Patients", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patient_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    practice_id: {
      type: DataTypes.STRING,
      
      references: {
        model: 'practices',
        key: 'practice_id'
      },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.Practices, { foreignKey: 'practice_id'});
  };

  return Patients;
};
