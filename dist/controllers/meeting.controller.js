"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMeeting = createMeeting;
exports.getMeetings = getMeetings;
exports.getOneMeeting = getOneMeeting;
exports.updateMeeting = updateMeeting;
exports.deleteMeeting = deleteMeeting;

var _Meetings = _interopRequireDefault(require("../models/Meetings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createMeeting(_x, _x2) {
  return _createMeeting.apply(this, arguments);
}

function _createMeeting() {
  _createMeeting = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, title, meeting_date, init_time, end_time, description, newMeeting;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('request body: ', req);
            _req$body = req.body, title = _req$body.title, meeting_date = _req$body.meeting_date, init_time = _req$body.init_time, end_time = _req$body.end_time, description = _req$body.description;
            _context.prev = 2;
            _context.next = 5;
            return _Meetings["default"].create({
              title: title,
              meeting_date: meeting_date,
              init_time: init_time,
              end_time: end_time,
              description: description
            }, {
              fields: ['title', 'meeting_date', 'init_time', 'end_time', 'description']
            });

          case 5:
            newMeeting = _context.sent;

            if (!newMeeting) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.json({
              statusCode: 200,
              message: 'Meeting created successfully',
              data: newMeeting
            }));

          case 8:
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            console.error('createMeeting Error: ', _context.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));
  return _createMeeting.apply(this, arguments);
}

function getMeetings(_x3, _x4) {
  return _getMeetings.apply(this, arguments);
}

function _getMeetings() {
  _getMeetings = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var meetings;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Meetings["default"].findAll();

          case 2:
            meetings = _context2.sent;

            try {
              if (meetings.length > 0) {
                res.json({
                  statusCode: 200,
                  data: meetings
                });
              } else {
                res.json({
                  meesage: 'Meetings not found'
                });
              }
            } catch (e) {
              console.error('getMeetings Error: ', e);
            }

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getMeetings.apply(this, arguments);
}

function getOneMeeting(_x5, _x6) {
  return _getOneMeeting.apply(this, arguments);
}

function _getOneMeeting() {
  _getOneMeeting = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, meeting;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Meetings["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            meeting = _context3.sent;

            if (meeting) {
              res.json({
                statusCode: 200,
                data: meeting
              });
            } else {
              res.json({
                message: 'Meeting not found'
              });
            }

            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.error('getOneMeeting Error: ', _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getOneMeeting.apply(this, arguments);
}

function updateMeeting(_x7, _x8) {
  return _updateMeeting.apply(this, arguments);
}

function _updateMeeting() {
  _updateMeeting = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, title, meeting_date, init_time, end_time, description, updatedMeeting;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, title = _req$body2.title, meeting_date = _req$body2.meeting_date, init_time = _req$body2.init_time, end_time = _req$body2.end_time, description = _req$body2.description;
            _context4.prev = 2;
            _context4.next = 5;
            return _Meetings["default"].update({
              title: title,
              meeting_date: meeting_date,
              init_time: init_time,
              end_time: end_time,
              description: description
            }, {
              where: {
                id: id
              }
            });

          case 5:
            updatedMeeting = _context4.sent;

            if (updatedMeeting[0] > 0) {
              res.json({
                statusCode: 200,
                message: 'Meeting updated successfully',
                count: updatedMeeting
              });
            } else {
              res.json({
                message: 'Meeting not found'
              });
            }

            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](2);
            console.error('updateMeeting Error: ', _context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return _updateMeeting.apply(this, arguments);
}

function deleteMeeting(_x9, _x10) {
  return _deleteMeeting.apply(this, arguments);
}

function _deleteMeeting() {
  _deleteMeeting = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _Meetings["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;

            if (deleteRowCount > 0) {
              res.json({
                statusCode: 200,
                message: 'Meeting deleted succesfully',
                count: deleteRowCount,
                data: {
                  meetingId: id
                }
              });
            } else {
              res.json({
                message: 'Meeting not found'
              });
            }

            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.error('deleteTask Error: ', _context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _deleteMeeting.apply(this, arguments);
}