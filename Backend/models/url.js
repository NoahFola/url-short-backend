const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const dotenv = require("dotenv")
dotenv.config()

const sequelize = new Sequelize(process.env.POSTGRESQL_URI,  {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Set to false if using a self-signed certificate
        },
      },
})

const URL = sequelize.define(
    "URL",
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        long_url:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        short_code: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true,
          },
          created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
          },
    },
    {
        schema: "shortener_schema", // Define the schema
        tableName: "urls", // Custom table name
        timestamps: false, // Disable createdAt & updatedAt
    }
    
)

const dbSync = async () => {
    try {
        await sequelize.createSchema("shortener_schema").catch(() => {}); // Ignore if already exists
        await URL.sync();
        console.log("Database synced successfully");
    } catch (error) {
        console.error("Error syncing database:", error);
    }
}

dbSync()

module.exports = URL; 