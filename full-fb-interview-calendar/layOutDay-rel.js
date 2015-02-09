
function layOutDayCustom(eventList, startHour, endHour, calendarWidth, calendarHeight)
{
  // left/right padding
  var paddingLR = 10;

  clearDayEvents();

  var minutesInDay = (endHour*60 - startHour*60);

  var validInterval = 5;

  // Pixels per minute scaling factor
  var scale = calendarHeight/minutesInDay;
  
  // Create the time labels on the left side of the calendar
  renderTimeLabels(startHour, endHour, scale);  
 
  // Adjust styling of some elements based on parameters
  var sheet = document.createElement('style');
  sheet.innerHTML += "#event-container { height: "+calendarHeight+"px; width: "+(calendarWidth + paddingLR*2)+"px; }";
  document.body.appendChild(sheet);


  /* Note: Making assumption that people will not schedule
     an event NOT starting and ending in a 5 minute increment,
     e.g. unlikely use case is an event from 10:23 to 10:31.
     This assumption cuts our array size by 80% (720 to 144). */

  // 5 min increments for possible event timeslots
  // each timeslot will be filled with list of id's of events that overlap it

  var timeslotEvents = [];

  // Initialize an array the size of the number of time intervals / 5
  // Ex: for default case 9am-9pm, 720/5 = 144 slots initialized with empty arrays
  for(var t=0; t<(endHour*60 - startHour*60) / 5; t++) { timeslotEvents[t] = []; }

  var events = [];

  
  // Determine if each event in the provided param array is valid
  for (var i = 0; i< eventList.length; i++) {
    var evt = eventList[i];

    // If so, add it to the list of events to render
    if(isValidEvent(evt, startHour, endHour, validInterval)) {
      
      // Create id for future HTML element
      evt.id = "event"+i;
      events.push(evt);

      // Also increment number of events in all timeslots it overlaps
      // by adding this event's element ID to an array in each timeslot
      for(var j = evt.start/5; j < evt.end/5; j++ ) {
        timeslotEvents[j].push(evt.id);
      }
    }
    else console.log("Could not add event ", i, ": ", evt);
  }


  // Begin constructing the HTML elements for each event
  var eventsHTML = "";
  
  // increment relative top if width of elements totals 100%
  var relativeTop = 0;


  // After adding all valid events and filling histogram,
  // calculate overlaps
  // and render the events with appropriate width

  for(i = 0; i< events.length; i++) {
    
    var e = events[i];

    // Find the maximum number of overlapping events 
    // in the sequential range of timeslots of this event
    var maxOverlapping = [];
    
    for(var k = e.start/5; k < e.end/5; k++)
    {
      if(timeslotEvents[k].length > maxOverlapping.length)
        maxOverlapping = timeslotEvents[k];
    }
    
    events[i].overlappingEvents = maxOverlapping;
    
    // Since the current event will cover each timeslot,
    // the min possible value for maxEvents is 1... no divide by zero issues
    var maxEvents = maxOverlapping.length;
    
    var width = calendarWidth/maxEvents;
    var widthPercent = 100/maxEvents;
    var left = 0;

    var endOfRow = false;

    // Determine left positioning and width
    for(var m=0; m < maxOverlapping.length; m++) {

      if(e.id == maxOverlapping[m]) {
        left = m*width;
        if( left + width === calendarWidth || m === (maxEvents-1)) {
          endOfRow = true;
        }
      }
    }

    eventsHTML += displayEventRel(e, i, widthPercent, relativeTop, scale); 
    
    if(endOfRow) { relativeTop+=(e.end-e.start); }
    
  }

  document.getElementById("event-container").innerHTML += eventsHTML;

}

