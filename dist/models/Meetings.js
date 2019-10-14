"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Meetings = _database.sequelize.define('meetings', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  title: {
    type: _sequelize["default"].TEXT
  },
  meeting_date: {
    type: _sequelize["default"].DATE
  },
  init_time: {
    type: _sequelize["default"].TIME
  },
  end_time: {
    type: _sequelize["default"].TIME
  },
  description: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

var _default = Meetings;
exports["default"] = _default;