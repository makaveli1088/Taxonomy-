import type { GroupedData } from './types';

const rawCsv = `What,Why
Failed to ACCELERATE,Empty Zebra Crossing
Failed to ACCELERATE,Yellow Box
Failed to ACCELERATE,Green light
Failed to ACCELERATE,Turning
Failed to ACCELERATE,From Give Way
Failed to ACCELERATE,Traffic
Failed to ACCELERATE,Narrow Road
Failed to ACCELERATE,Keep Clear Markings
Failed to ACCELERATE,From Stop Junction
Failed to ACCELERATE,Roundabout
Failed to ACCELERATE,Pedestrian or jwalker finished crossing
Failed to ACCELERATE,Clear road
Failed to ACCELERATE,Right on Red
Failed to SLOW,Lead Vehicle
Failed to SLOW,Other Static
Failed to SLOW,Upcoming Turn
Failed to SLOW,Zebra
Failed to SLOW,Red Light
Failed to SLOW,Amber Light
Failed to SLOW,Jaywalking
Failed to SLOW,Speed Limit
Failed to SLOW,Speed Bump
Failed to SLOW,Width
Failed to SLOW,Narrow Road
Failed to SLOW,Approaching Junction
Failed to SLOW,Merging
Failed to SLOW,Pedestrian at crossing
Failed to SLOW,Roadworks
Failed to SLOW,Cylist
Failed to SLOW,Vehicle
Failed to SLOW,Bus
Failed to SLOW,Refuse Truck
Failed to SLOW,Keep Clear
Failed to SLOW,Stop Junction
Failed to SLOW,Potholes
Failed to SLOW,Giveway
Failed to SLOW,Oncoming Vehicles
Failed to SLOW,Non Priority Vehicles
Failed to SLOW,Primary Stop Line
Failed to SLOW,Other Dynamic
Failed to SLOW,Undertaking
Failed to remain STOPPED,Red light
Failed to remain STOPPED,Zebra
Failed to remain STOPPED,Stationary traffic
Failed to remain STOPPED,Narrow Road
Failed to remain STOPPED,Turning
Failed to remain STOPPED,Junction
Failed to remain STOPPED,Amber Light
Failed to remain STOPPED,Keep Clear
Failed to remain STOPPED,Yellow Box
Failed to remain STOPPED,Pedestrian at Junction or informal crossing point
Failed to remain STOPPED,Jaywalking
Failed to remain STOPPED,Oncoming vehicle
Failed to remain STOPPED,Giveway
Failed to remain STOPPED,Stop
Failed to remain STOPPED,Non priority vehicles
Failed to remain STOPPED,Cyclist
Failed to remain STOPPED,Primary stop line
Failed to remain STOPPED,Rollback
Failed to remain STOPPED,Red Arrow
Failed to maintain SPEED,Harsh Brake
Failed to maintain SPEED,Match traffic speed
Failed to maintain SPEED,Green light
Failed to maintain SPEED,Empty Zebra crossing
Failed to maintain SPEED,Slowed too early
Failed to maintain SPEED,Maintain speed limit
Failed to maintain SPEED,Turning
Failed to maintain SPEED,Exceeding speed limit
Failed to follow ROUTE map,Failed to turn into plotted turn
Failed to follow ROUTE map,Unplotted turn
Failed to follow ROUTE map,Incorrect Indicator
Failed to follow ROUTE map,Missed Left Turn
Failed to follow ROUTE map,Missed Right Turn
Failed to follow ROUTE map,Incorrect lane for continue ahead
Failed to follow ROUTE map,Incorrect lane for upcoming turn
Failed OVERTAKE,Failed to Complete Dynamic
Failed OVERTAKE,Failed to Complete Static
Failed OVERTAKE,Failed to initiate Dynamic
Failed OVERTAKE,Failed to initiate Static
Failed OVERTAKE,Incorrectly initiated Dynamic
Failed OVERTAKE,Incorrectly initiated Static
LATE Turn,Towards dynamic
LATE Turn,Towards static
LATE Turn,Towards oncoming lane
LATE Turn,Towards ongoing lane
LATE Turn,Towards ongoing restricted bus lane
LATE Turn,Towards ongoing restricted cycle lane
EARLY Turn,Towards dynamic
EARLY Turn,Towards static
EARLY Turn,Towards oncoming lane
EARLY Turn,Towards ongoing lane
EARLY Turn,Towards ongoing restricted bus lane
EARLY Turn,Towards ongoing restricted cycle lane
"Failed to follow 
LANE POSITION",Towards Left
"Failed to follow 
LANE POSITION",Towards Right
"Failed to follow 
LANE POSITION",Towards Restricted Lane
"Failed to follow 
LANE POSITION",Hard Shoulder
"Failed to follow 
LANE POSITION",Towards kerb
"Failed to follow 
LANE POSITION",Towards Dynamic
"Failed to follow 
LANE POSITION",Towards Static
"Failed to follow 
LANE POSITION",Towards Oncoming vehicle
"Failed to follow 
LANE POSITION",Towards parked vehicle
"Failed to follow 
LANE POSITION",Erratic steering
"Failed to follow 
LANE POSITION",Weaving in lane
"Failed to follow 
LANE POSITION",Vulnerable Road User
"Failed to follow 
LANE POSITION",Lane Position - for upcoming turn
Lane Change,Unsafe Lane Change
Lane Change,Double Lane Change
Lane Change,Failed to complete lane change
"ACCIDENTAL 
AVSO Intervention",
EMERGENCY SERVICE,
DIVERSION,
LENS OBSCURED,
EMERGENCY STOP,
CLOSE PROXIMITY,
END of RUN,
"UNCOMMANDED
 disengagement",
UNCATEGORISED,`;

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
                data[what].push(why);
            }
        }
    });

    return data;
};