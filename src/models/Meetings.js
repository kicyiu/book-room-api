import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Meetings = sequelize.define('meetings', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        type: Sequelize.TEXT
    },
    meeting_date: {
        type: Sequelize.DATE
    },
    init_time: {
        type: Sequelize.TIME
    },
    end_time: {
        type: Sequelize.TIME
    },
    description: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false 
});


export default Meetings;