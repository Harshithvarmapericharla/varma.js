import { DataTypes, Model, Optional } from "sequelize";
import sequelizeconnection from "../config";

interface StudentAttributes {
    studentId: number;
    studentName: string;
    age: number;
}

export interface StudentInput extends Optional<StudentAttributes, 'studentId'> {}
export interface StudentOutput extends Required<StudentAttributes> {}

class Student extends Model<StudentAttributes, StudentInput> implements StudentAttributes {
    public studentId!: number;
    public studentName!: string;
    public age!: number;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Student.init(
    {
        studentId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        studentName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        tableName: 'students',
        timestamps: true,
        paranoid: true,
        sequelize: sequelizeconnection
    }
);

export default Student;
