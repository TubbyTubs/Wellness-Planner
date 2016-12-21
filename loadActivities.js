var activities = new Array();

var activity1 = new Object();
activity1.activity = "Eat Lunch With Somebody New"
activity1.points = 5;
activities[0] = activity1;

var activity2 = new Object();
activity2.activity = "Reconnect With an Old Friend";
activity2.points = 4;
activities[1] = activity2;

var activity3 = new Object();
activity3.activity = "Try a New Food";
activity3.points = 4;
activities[2] = activity3;

var activity4 = new Object();
activity4.activity = "Read";
activity4.points = 6;
activities[3] = activity4;

var activityCount = activities.length;
var activityIndexes = new Array();
var loadNumber = 5;
var loadedCount = 0;

// Incorporate JQuery $.inArray method so that duplicates won't occur
while (loadedCount < loadNumber){
	var randomIndex = Math.floor((Math.random() * activityCount));
	activityIndexes.push(randomIndex);
	loadedCount++;
}