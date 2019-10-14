import Meeting from '../models/Meetings';

export async function createMeeting(req, res) {
    console.log('request body: ', req);
    const { title, meeting_date, init_time, end_time, description } = req.body;
    try {
        let newMeeting = await Meeting.create({
            title,
            meeting_date,
            init_time,
            end_time,
            description
        }, {
            fields: ['title', 'meeting_date', 'init_time', 'end_time', 'description']
        });
    
        if(newMeeting) {
            return res.json({
                statusCode: 200,
                message: 'Meeting created successfully',
                data: newMeeting
            })
        }
    }
    catch (e) {
        console.error('createMeeting Error: ', e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}

export async function getMeetings(req, res) {
    
    const meetings = await Meeting.findAll();
    try {
        if(meetings.length > 0) {
            res.json({
                statusCode: 200,
                data: meetings
            });
        }
        else {
            res.json({
                meesage: 'Meetings not found'
            })
        }
    }
    catch(e) {
        console.error('getMeetings Error: ', e);
    }
}

export async function getOneMeeting(req, res) {
    const { id } = req.params;

    try {
        const meeting = await Meeting.findOne({
            where: {
                id
            }
        });
        
        if(meeting) {
            res.json({
                statusCode: 200,
                data: meeting
            });
        }
        else {
            res.json({
                message: 'Meeting not found'
            });
        }
    }
    catch(e) {
        console.error('getOneMeeting Error: ', e);
    }
    
}

export async function updateMeeting(req, res) {
    const { id } = req.params;
    const { title, meeting_date, init_time, end_time, description } = req.body;

    try {
        const updatedMeeting = await Meeting.update({
            title,
            meeting_date,
            init_time,
            end_time,
            description
        }, {
            where: { id }
        })
    
        if(updatedMeeting[0] > 0) {
            res.json({
                statusCode: 200,
                message: 'Meeting updated successfully',
                count: updatedMeeting
            });
        }
        else {
            res.json({
                message: 'Meeting not found',
            })
        }
    }
    catch(e) {
        console.error('updateMeeting Error: ', e);
    }
    
}

export async function deleteMeeting(req, res) {
    const { id } = req.params;
    try { 
        const deleteRowCount = await Meeting.destroy({
            where: {
                id
            }
        });

        if(deleteRowCount > 0) {
            res.json({
                statusCode: 200,
                message: 'Meeting deleted succesfully',
                count: deleteRowCount,
                data: { meetingId: id }
            })
        }
        else {
            res.json({
                message: 'Meeting not found',
            })
        }
    }
    catch(e) {
        console.error('deleteTask Error: ', e);
    }
}