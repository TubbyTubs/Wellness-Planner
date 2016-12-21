while (loadedActivities.length < loadedNumber;){
	var randomIndex = Math.random()*activityCount;
	if($inArray(activities[randomIndex], loadedActivities) == -1){
		loadedActivities[count] = activities[randomIndex];
		count++;
	}
	else{
	}
}
while (activityIndexes.length < loadedNumber;){
	var randomIndex = Math.random()*activityCount;
	activityIndexes[count] = randomIndex;
	count++;
}
while (loadedCount < loadNumber){
var randomIndex = Math.floor((Math.random() * activityCount));
activityIndexes.push(randomIndex);
loadedCount++;
}


	if($inArray(randomIndex, activityIndexes) == -1){