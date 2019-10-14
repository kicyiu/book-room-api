import { Router } from 'express';
const router = Router();

import { createMeeting, getMeetings, getOneMeeting, updateMeeting, deleteMeeting } from '../controllers/meeting.controller';


// /api/meetings
router.post('/create', createMeeting);
router.get('/get', getMeetings);


// /api/meeting/action:meetingId
router.get('/get/:id', getOneMeeting);
router.put('/update/:id', updateMeeting);
router.delete('/delete/:id', deleteMeeting);



export default router;