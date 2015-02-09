//
// Initialize the calendar with provided default events
// Variations of the default events are also provided (commented out)
//
window.addEventListener('load', function(e) {
  
  layOutDay(defaultEvents);
  
  //layOutDay(richerDefaultEvents);

  // Default Cropped/Resized
  // layOutDayCustom(defaultEvents,9, 19, 200, 400);

  // Richer Resized
  // layOutDayCustom(richerDefaultEvents, 9, 14, 400, 640);

}, false);


//
// Wrapper function for layOutDayCustom,
// using the variable values specified by the challenge
//
function layOutDay(eventList) {

  // --- Set variables to values provided in specs --- //

  var calendarWidth = 600;  // Width of 600 (+10px unusable LR padding)
  var calendarHeight = 720;

  var startHour = 9; // 9:00am
  var endHour = 21;  // 9:00pm

  layOutDayCustom(eventList, startHour, endHour, calendarWidth, calendarHeight);
}


//
// Remove all events, but don't re-render/change the time labels
//
function clearDayEvents() {
  document.getElementById("event-container").innerHTML = "";
}


//
// Generate the major and minor ticks for the left axis (time labels)
//
function renderTimeLabels(startHour, endHour, scale) {

  var timeLabelsHTML = "";
  
  for(var i=startHour; i<=endHour; i++)
  {
    var hour = i%12;
    if (hour === 0) hour = 12;
    
    var amVSpm = "am";
    if(i/12 >=1) amVSpm = "pm";

    timeLabelsHTML += "<div class='tick major'>"+
      "<span class='time'>" + hour + ":00 </span>" +
      "<span class='ampm'>" + amVSpm + "</span>" +
      "</div>";
    
    // Don't add past the final 'major' tick marker
    // e.g. end with 9pm, not 9:30pm
    if(i!==endHour)
      {
        timeLabelsHTML += "<div class='tick minor'>" +
          "<span class='time'>" + hour + ":30 </span>" +
          "<span class='ampm'>" + amVSpm + "</span>" +
          "</div>";
        
        // Note: could exclude addding the ampm span for minor ticks,
        // but want to provide option of revealing it easily
        // by disabling the display:none in the css
      }
  }

  document.getElementById("time-labels").style.marginTop = -(30/2 * scale)+ "px";

  var sheet = document.createElement('style');
  sheet.innerHTML += ".tick { height: " + (30*scale) +"px; line-height: "+ (30*scale) +"px; }";
  document.body.appendChild(sheet);

  document.getElementById("time-labels").innerHTML = timeLabelsHTML; 

}


// 
// Return false if provided event has invalid start/end times,
// true otherwise
//
function isValidEvent(e, startHour, endHour, validInterval) { 

  var EOD = endHour*60 - startHour*60;
  var BOD = 0; // startHour*0;
  
  if( e === null) console.log("Invalid event: ", e);
  if(typeof e === "undefined") console.log("Invalid event: ", e);
  
  if ( (typeof e.start === "undefined") || isNaN(e.start)) {  
    console.log("Invalid start time: ", e.start);
    return false; 
  }
  
  if ( (typeof e.end === "undefined") || isNaN(e.end)) {  
    console.log("Invalid end time: ", e.end);
    return false; 
  }
  
  if(e.end < e.start) {
    console.log("Invalid start/end time - start must precede end time: ", e.start, " > ", e.end);
    return false;
  }
  
  if(e.end === e.start) {
    console.log("Invalid event length - event must be longer than 0 minutes.");
    return false;
  }
  
  if(e.end > EOD ) {
    console.log("Invalid end time - The end time of an event must not exceed the end of the calendar day:", e.end, " > ", EOD);
    return false;
  }
  
  if(e.start < BOD ) {
    console.log("Invalid start time - The start time of an event must not precede the start of the calendar day:", e.start, " < ", BOD);
    return false;
  }

  if(e.end < e.start) {
    console.log("Invalid start/end time - start must precede end time.");
    return false;
  }

  /* Note: As indicated in layOutDayCustom,
     limited the start and end time of events to times ending
     in :00, :05, :10, etc. This simplification cuts our array size by 80%.
     The next two checks enforce this limitation. */

  if(e.end % validInterval !== 0) {
    console.log("Invalid end time (",e.end,") - an event must start and end on 5 minute intervals.");
    return false;
  }

  if(e.start % validInterval !== 0) {
    console.log("Invalid start time (",e.start,") - an event must start and end on 5 minute intervals.");
    return false;
  }
  
  // Passed all tests - event is valid based on current parameters
  return true; 
}




//
// displayEvent function for RELATIVE positioning
//    i.e. left position doesn't matter, but topAdjustment does
//
// Create the html for an event in the day
// width is measured in percent (%)
//
function displayEventRel(evt, idNum, width, topAdjustment, scale){
  var eventHTML = "";

  // Event title, location, calendar color, or id
  // were not specified for the challenge,
  // but would be a logical extension

  var eventId = "event"+idNum;

  var eventTitle = "Sample Item";
  if(evt.title) eventTitle = evt.title;
  
  var eventLocation = "Sample Location";
  if(evt.location) eventLocation = evt.location;

  var eventCalendar = "default";
  if(evt.calendar) eventCalendar = evt.calendar;

  
  eventHTML += '<div id="' + eventId + '"' +
    'class="event '+ eventCalendar + '" ' +
    'style="top:'+ (evt.start - topAdjustment)*scale + 'px; '+
    'height:' + (evt.end - evt.start)*scale + 'px; '+
    'width: ' + width +'%;">' + 
    '<h1 class="eventTitle">' + eventTitle + '</h1>' +    
    '<h2 class="eventLocation">' + eventLocation + '</h2>' +
    '</div>';
  
  return eventHTML;
}




//
// displayEvent function for ABSOLUTE positioning
//  e.g. left position matters, but top adjustment does not
//
// Create the html for an event in the day
// width is measured in pixels (px)
//
function displayEventAbs(evt, idNum, scale){ 
  var eventHTML = "";

  // Event title, location, calendar color, or id
  // were not specified for the challenge,
  // but would be a logical extension

  var eventId = "event"+idNum;

  var eventTitle = "Sample Item";
  if(evt.title) eventTitle = evt.title;
  
  var eventLocation = "Sample Location";
  if(evt.location) eventLocation = evt.location;

  var eventCalendar = "default";
  if(evt.calendar) eventCalendar = evt.calendar;
  
  eventHTML += '<div id="' + eventId + '"' +
    'class="event '+ eventCalendar + '" ' +
    'style="top:'+ evt.start*scale + 'px; ' +
    // Horizontal is not scaled, only vertical
    'left:' + (evt.left )+'px; '+ 
    'height:' + (evt.end - evt.start)*scale + 'px; '+
    'width: ' + (evt.width) +'px;">' + 
    '<h1 class="eventTitle">' + eventTitle + '</h1>' +
    '<h2 class="eventLocation">' + eventLocation + '</h2>' +
    '</div>';
  
  return eventHTML;
}
