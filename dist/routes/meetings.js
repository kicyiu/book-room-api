"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _meeting = require("../controllers/meeting.controller");

var router = (0, _express.Router)();
// /api/meetings
router.post('/create', _meeting.createMeeting);
router.get('/get', _meeting.getMeetings); // /api/meeting/action:meetingId

router.get('/get/:id', _meeting.getOneMeeting);
router.put('/update/:id', _meeting.updateMeeting);
router["delete"]('/delete/:id', _meeting.deleteMeeting);
var _default = router;
exports["default"] = _default;