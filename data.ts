import type { GroupedData, Reason } from './types';

const rawCsv = `What,Why,VideoLink
Failed to ACCELERATE,Empty Zebra Crossing,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to ACCELERATE,Yellow Box,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to ACCELERATE,Green light,https://console.sso.wayve.ai/run/elbe/2025-08-05--12-50-56--gen2-av-b960885c-cb53-450a-91a7-8d273fe1c4de?id=&time-unixus=1754399335613819
Failed to ACCELERATE,Turning,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to ACCELERATE,From Give Way,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to ACCELERATE,Traffic,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to ACCELERATE,Narrow Road,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to ACCELERATE,Keep Clear Markings,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to ACCELERATE,From Stop Junction,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to ACCELERATE,Roundabout,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to ACCELERATE,Pedestrian or jwalker finished crossing,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to ACCELERATE,Clear road,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to ACCELERATE,Right on Red,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Lead Vehicle,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Other Static,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Upcoming Turn,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Zebra,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Red Light,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Amber Light,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Jaywalking,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Speed Limit,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Speed Bump,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Width,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Narrow Road,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Approaching Junction,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Merging,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Pedestrian at crossing,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Roadworks,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Cylist,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Vehicle,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Bus,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Refuse Truck,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Keep Clear,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Stop Junction,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Potholes,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Giveway,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Oncoming Vehicles,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Non Priority Vehicles,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Primary Stop Line,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Other Dynamic,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to SLOW,Undertaking,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Red light,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Zebra,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Stationary traffic,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Narrow Road,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Turning,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Junction,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Amber Light,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Keep Clear,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Yellow Box,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Pedestrian at Junction or informal crossing point,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Jaywalking,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Oncoming vehicle,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Giveway,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Stop,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Non priority vehicles,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Cyclist,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Primary stop line,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Rollback,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to remain STOPPED,Red Arrow,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to maintain SPEED,Harsh Brake,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to maintain SPEED,Match traffic speed,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to maintain SPEED,Green light,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to maintain SPEED,Empty Zebra crossing,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to maintain SPEED,Slowed too early,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to maintain SPEED,Maintain speed limit,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to maintain SPEED,Turning,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to maintain SPEED,Exceeding speed limit,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to follow ROUTE map,Failed to turn into plotted turn,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to follow ROUTE map,Unplotted turn,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to follow ROUTE map,Incorrect Indicator,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to follow ROUTE map,Missed Left Turn,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to follow ROUTE map,Missed Right Turn,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to follow ROUTE map,Incorrect lane for continue ahead,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed to follow ROUTE map,Incorrect lane for upcoming turn,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed OVERTAKE,Failed to Complete Dynamic,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed OVERTAKE,Failed to Complete Static,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed OVERTAKE,Failed to initiate Dynamic,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed OVERTAKE,Failed to initiate Static,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed OVERTAKE,Incorrectly initiated Dynamic,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Failed OVERTAKE,Incorrectly initiated Static,https://www.youtube.com/watch?v=dQw4w9WgXcQ
LATE Turn,Towards dynamic,https://www.youtube.com/watch?v=dQw4w9WgXcQ
LATE Turn,Towards static,https://www.youtube.com/watch?v=dQw4w9WgXcQ
LATE Turn,Towards oncoming lane,https://www.youtube.com/watch?v=dQw4w9WgXcQ
LATE Turn,Towards ongoing lane,https://www.youtube.com/watch?v=dQw4w9WgXcQ
LATE Turn,Towards ongoing restricted bus lane,https://www.youtube.com/watch?v=dQw4w9WgXcQ
LATE Turn,Towards ongoing restricted cycle lane,https://www.youtube.com/watch?v=dQw4w9WgXcQ
EARLY Turn,Towards dynamic,https://www.youtube.com/watch?v=dQw4w9WgXcQ
EARLY Turn,Towards static,https://www.youtube.com/watch?v=dQw4w9WgXcQ
EARLY Turn,Towards oncoming lane,https://www.youtube.com/watch?v=dQw4w9WgXcQ
EARLY Turn,Towards ongoing lane,https://www.youtube.com/watch?v=dQw4w9WgXcQ
EARLY Turn,Towards ongoing restricted bus lane,https://www.youtube.com/watch?v=dQw4w9WgXcQ
EARLY Turn,Towards ongoing restricted cycle lane,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Towards Left,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Towards Right,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Towards Restricted Lane,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Hard Shoulder,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Towards kerb,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Towards Dynamic,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Towards Static,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Towards Oncoming vehicle,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Towards parked vehicle,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Erratic steering,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Weaving in lane,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Vulnerable Road User,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"Failed to follow 
LANE POSITION",Lane Position - for upcoming turn,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Lane Change,Unsafe Lane Change,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Lane Change,Double Lane Change,https://www.youtube.com/watch?v=dQw4w9WgXcQ
Lane Change,Failed to complete lane change,https://www.youtube.com/watch?v=dQw4w9WgXcQ
"ACCIDENTAL 
AVSO Intervention",,
EMERGENCY SERVICE,,
DIVERSION,,
LENS OBSCURED,,
EMERGENCY STOP,,
CLOSE PROXIMITY,,
END of RUN,,
"UNCOMMANDED
 disengagement",,
UNCATEGORISED,,`;

export const parseAndGroupData = (): GroupedData => {
    const data: GroupedData = {};
    
    const cleanedCsv = rawCsv
        .replace(/"([^"]*?)\n([^"]*?)"/g, (_, p1, p2) => `${p1.trim()} ${p2.trim()}`)
        .replace(/"/g, '');

    const lines = cleanedCsv.trim().split('\n');
    const headers = lines.shift()?.split(',');

    if (!headers || headers.length < 1) {
        return {};
    }

    lines.forEach(line => {
        const parts = line.split(',');
        let what = (parts[0] || '').trim();
        const why = (parts[1] || '').trim();
        const videoLink = (parts[2] || '').trim();

        if (what === 'ACCIDENTAL AVSO Intervention') {
            what = 'Accidental';
        }
        if (what === 'UNCOMMANDED disengagement') {
            what = 'Uncommanded';
        }

        if (what) {
            if (!data[what]) {
                data[what] = [];
            }
            if (why) {
                const reason: Reason = { name: why };
                if (videoLink) {
                    reason.url = videoLink;
                }
                data[what].push(reason);
            }
        }
    });

    return data;
};