/*
Given a set of events, render the events on a single day calendar
(similar to Outlook, Calendar.app, and Google Calendar). 
There are several properties of the layout:

1. No events may visually overlap.
2. If two events collide in time, they must have the same width.
3. An event should utilize the maximum width available, but constraint 2) takes precedence over this constraint.

Each event is represented by a JS object with a start and end attribute.
The value of these attributes is the number of minutes since 9am.
So {start:30, end:90) represents an event from 9:30am to 10:30am.
[ {start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670} ]; 


The styling of the events should match the attached screenshot.

You may structure your code however you like, but you must implement the following function in the global namespace. 


The function takes in an array of events and will lay out the events according to the above description.
function layOutDay(events) {}
This function will be invoked from the console for testing purposes. If it cannot be invoked, the submission will be rejected.
In your submission, please implement the calendar with the following input:
[ {start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670} ]; 

A screenshot of the expected output is attached.
*/



  Other things to try:

  Use the elaborated default events (includes event titles, locations, and colors)
  -- layOutDay(richerDefaultEvents);

  Change the height/width of the calendar
  -- layOutDayCustom(richerDefaultEvents, 9, 14, 600, 600);
  -- layOutDayCustom(defaultEvents,9, 19, 200, 400);	// Default Cropped/Resized
  -- layOutDayCustom(richerDefaultEvents, 9, 14, 400, 640);	// Richer Resized

However, beware! width won't align next to time labels if wider than its enclosing container div

  
  Change start and end of day hours - will get rid of events not in scope
  -- Based on this implementation you could change the start and end times to cut off events at the end of the day, but since they are always given in relation to the starting time, you can't cut off beginning of day




  
 



