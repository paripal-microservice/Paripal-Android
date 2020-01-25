
var CalendarDemoObject=function CalendarDemoObject(){};

CalendarDemoObject.prototype = 
{
	init:function(){
		this.calendarObj={
			"title": "temp",
			"startDate": "06/16/2016",
			"endDate": "06/17/2016",
			"defaultWorkingHours": 
			[{
				"defaultEndTime": "17:0",
				"defaultStartTime": "12:0",
				"defaultWorkingDays": ["Monday", "Tuesday", "Sunday"]
			}, 
			{
				"defaultEndTime": "15:0",
				"defaultStartTime": "12:0",
				"defaultWorkingDays": ["Monday", "Tuesday"]
			}]
		}
	}
}




