const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true // Opcionális
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // Kötelező
    }
  }, {
        // Ezzel kikapcsoljuk az automatikus 'createdAt' és 'updatedAt' mezők létrehozását
    timestamps: false 
    // További modell beállítások (pl. tableName: 'users')
  });

  // Hook a jelszó hashelésére mentés előtt
  User.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });

  // Jelszó-összehasonlító metódus
  User.prototype.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
  };

  // Itt definiáljuk a relációt.
  // A Task modellt majd a fő index fájlban kapcsoljuk hozzá.
  User.associate = function(models) {
    // Egy User-hez több Task tartozik (One-to-Many)
    User.hasMany(models.Task, {
      foreignKey: 'userId', // Ez lesz az idegen kulcs a Task táblában
      as: 'tasks'          // Ezt az alias-t használjuk az include-oknál
    });
  };

  return User;
};