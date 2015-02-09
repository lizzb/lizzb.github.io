
// Default event list to initialize the calendar with
var defaultEvents = [
  {start: 30, end: 150},  // 9:30 to 11:30 (2 hrs, 120 min)
  {start: 540, end: 600}, // 6:00-7:00 (1 hour, 60 min)
  {start: 560, end: 620}, // 6:20 - 7:20 (1 hour, 60 min)
  {start: 610, end: 670}, // 7:10-8:10(1 hour, 60 min)
];

// More interesting default event list
// (custom names, locations, calendar colors)
var richerDefaultEvents = [
  {
    start: 15, end: 75,
    title: "Google Analytics Workshop",
    location: "Googleplex, MTV",
    calendar: "calendar1"
  },
  {
    start: 140, end: 200,
    title: "Lunch Brownbag Series:<br>\"Break Things\" vs \"Stable Infra\"",
    location: "Open space",
    calendar: "calendar3"
  },
  {
    start: 160, end: 220,
    title: "ReOrg Discussion",
    location: "Building 7",
    calendar: "calendar1"
  },
  {
    start: 210, end: 270,
    title: "GHC 14 planning",
    location: "Pheonix Conf. Room",
    calendar: "calendar2"
  },
]; 



//
// Valid edge cases
// (assuming inclusive start and end time)
//
var promptStart = {start: 0, end: 90};  // Starts exactly on earliest start time
var promptEnd = {start: 680, end: 720}; // Ends exactly on latest end time
var allDay = {start: 0, end: 720};      // All day event
var veryShort = {start: 200, end: 220}; // Very short event (contents will be cropped in display)


//
// Fail cases
//
var invalidStartEnd = {start: 150, end: 30};    // Negative length of event
var invalidStartEnd2 = {start: 150, end: 150};  // Event length = 0 min

var tooEarly = {start: -30, end: 150};  // Start time too early
var tooEarly2 = {start: -30, end: -5};  // Start + end time too early
var tooEarly3 = {start: -60, end: 0};   // Start time too early, end time on BOD

var tooLate = {start: 700, end: 730};   // End time too late
var tooLate2 = {start: 600, end: 750};  // Start + end time too late
var tooLate3 = {start: 720, end: 730};  // Start time on EOD, end time too late


// Unsorted won't work for relative positioning
var defaultEventsUnsorted = [
  { start: 610, end: 670 },  
  { start: 560, end: 620 },   
  { start: 30,  end: 150 },  
  { start: 540, end: 600 }
];

var noEvents = [];

var onePerHour = [
  { start: 10, end: 60},
  { start: 70, end: 120},
  { start: 130, end: 180},
  { start: 190, end: 240},
  { start: 250, end: 300},
  { start: 310, end: 360},
  { start: 370, end: 420},
  { start: 430, end: 480},
  { start: 490, end: 540}
];

var fiveAtNoon = [
  { start: 180, end: 240},
  { start: 180, end: 240},
  { start: 180, end: 240},
  { start: 180, end: 240},
  { start: 180, end: 240}
];

var fiveStaggered = [
  { start: 10, end: 200},
  { start: 40, end: 240},
  { start: 70, end: 270},
  { start: 110, end: 330},
  { start: 140, end: 360}
];  

var overlapOnRight = [
  { start: 0, end: 180},
  { start: 120, end: 480},
  { start: 200, end: 500}
];

