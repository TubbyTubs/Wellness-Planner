	<!-- Server needs to generate random activites and shoot them to this script method which will create elements to put them in a list -->
	<!-- There will be 10 possible activities a day, and the form needs to be saved and sent back to server for processing -->
	<!-- Remember the extraActivities array object will be used (array of activity object that has an activity, points value, and wellness category -->
	
	var header = document.getElementById("activitycheckbox");
	var i = 0;
	while (i < 3){
		var check = document.createElement("input");
		var label = document.createElement("label");
		var lineBreak = document.createElement("br");
		check.type="checkbox";
		check.className = "box";
		check.value = activities[activityIndexes[i]].activity;
		
		label.appendChild(document.createTextNode(activities[activityIndexes[i]].activity));
		header.appendChild(check);
		header.appendChild(label);
		header.appendChild(lineBreak);
		i++;
	} 
	//Submit button can eventually be removed so input element of checkbox dissappears on its click
	var submission = document.createElement("button");
	var desc = document.getElementById("para");
	submission.type="button";
	submission.onclick=validate;
	header.appendChild(submission);
	
	function validate(){
		var checks = document.getElementsByClassName("box");
		var demo = document.getElementById("para");
		var completedActivities = new Array();
		<!-- Completed Activities loaded by Mongo -->
		i = 0;
		while(i < 3){
			if(checks[i].checked === true){
				completedActivities.push(checks[i].value);
			}
			i++;
		}
		i = 0;
		while(i < completedActivities.length){
			demo.innerHTML+= completedActivities[i] + "<br>";
			i++;
		}
	}
	
	