var CommonFunctions = function CommonFunctions() {};

CommonFunctions.prototype = {

    timeFormatter: function (date) {
        var hours = date.getHours();
        var hour;
        var minutes = date.getMinutes();
        var newHours;

        if (minutes >= 30) {
            if (hours <= 5) {
                newHours = 5 - hours;
                hours = 24 - newHours;
            } else {
                hour = hours - 5;
            }

            minutes = minutes - 30;
        } else {
            if (hours <= 6) {
                newHours = 6 - hours;
                hour = 24 - newHours;
            } else {
                hour = hours - 6;
            }
            subMinutes = 30 - minutes;
            minutes = 60 - subMinutes;
        }
        var ampm = hour >= 12 ? 'p' : 'a';
        hour = hour % 12;
        hour = hour ? hour : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hour + ':' + minutes + '' + ampm;
        return strTime;
    },


    trialMethod: function () {
        var trialObject = {
            "id": 1,
            "organizationLocationId": 1,
            "version": 0,
            "organizationId": 1,
            "name": "ABC",
            "startDate": "20-06-2016",
            "endDate": "30-06-2016",
            "defaultAvailablities": [
                {
                    "id": 1,
                    "organizationLocationId": 1,
                    "version": 0,
                    "day": "MONDAY",
                    "timing": [
                        {
                            "StartTime": "12:00",
                            "EndTime": "14:00"
                	}
            		]
        		},
                {
                    "id": 1,
                    "organizationLocationId": 1,
                    "version": 0,
                    "day": "TUESDAY",
                    "timing": [
                        {
                            "StartTime": "12:00",
                            "EndTime": "14:00"
                	}
           			]
        		},
                {
                    "id": 1,
                    "organizationLocationId": 1,
                    "version": 0,
                    "day": "WEDNESDAY",
                    "timing": [
                        {
                            "StartTime": "12:00",
                            "EndTime": "14:00"
                	}
            		]
        		},
                {
                    "id": 1,
                    "organizationLocationId": 1,
                    "version": 0,
                    "day": "THURSDAY",
                    "timing": [
                        {
                            "StartTime": "12:00",
                            "EndTime": "14:00"
                	}
            		]
        		},
                {
                    "id": 1,
                    "organizationLocationId": 1,
                    "version": 0,
                    "day": "FRIDAY",
                    "timing": [
                        {
                            "StartTime": "12:00",
                            "EndTime": "14:00"
                	}
            		]
        		},
                {
                    "id": 1,
                    "organizationLocationId": 1,
                    "version": 0,
                    "day": "SATURDAY",
                    "timing": [
                        {
                            "StartTime": "12:00",
                            "EndTime": "14:00"
                	}
            		]
        		},
                {
                    "id": 1,
                    "organizationLocationId": 1,
                    "version": 0,
                    "day": "SUNDAY",
                    "timing": [
                        {
                            "StartTime": "12:00",
                            "EndTime": "14:00"
                	}
            		]
        		}
    			]
        }
        return trialObject;
    },

    convertCalendarObject: function ($scope, flag) {
        if (flag == "Server") {
            angular.forEach($scope.CalendarPopUpValues.defaultAvailablity, function (value, key) {
                angular.forEach(value.defaultWorkingDays, function (newValue, newKey) {
                    if (!angular.isUndefined(value.defaultStartTime)) {
                        if (newValue == "Monday") {
                            if (angular.isUndefined($scope.mondayObject)) {
                                $scope.mondayObject = {
                                    day: "MONDAY",
                                    id: null,
                                    organizationLocationId: null,
                                    version: 0
                                };
                                $scope.mondayObject.timings = [{
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                }];
                            } else {
                                $scope.mondayObject.timings.push({
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                });
                            }

                        } else if (newValue == "Tuesday") {
                            if (angular.isUndefined($scope.tuesdayObject)) {
                                $scope.tuesdayObject = {
                                    day: "TUESDAY",
                                    id: null,
                                    organizationLocationId: null,
                                    version: 0
                                };
                                $scope.tuesdayObject.timings = [{
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                }];
                            } else {
                                $scope.tuesdayObject.timings.push({
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                });
                            }
                        } else if (newValue == "Wednesday") {
                            if (angular.isUndefined($scope.wednesdayObject)) {
                                $scope.wednesdayObject = {
                                    day: "WEDNESDAY",
                                    id: null,
                                    organizationLocationId: null,
                                    version: 0
                                };
                                $scope.wednesdayObject.timings = [{
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                }];
                            } else {
                                $scope.wednesdayObject.timings.push({
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                });
                            }
                        } else if (newValue == "Thursday") {
                            if (angular.isUndefined($scope.thursdayObject)) {
                                $scope.thursdayObject = {
                                    day: "THURSDAY",
                                    id: null,
                                    organizationLocationId: null,
                                    version: 0
                                };
                                $scope.thursdayObject.timings = [{
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                }];
                            } else {
                                $scope.thursdayObject.timings.push({
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                });
                            }
                        } else if (newValue == "Friday") {
                            if (angular.isUndefined($scope.fridayObject)) {
                                $scope.fridayObject = {
                                    day: "FRIDAY",
                                    id: null,
                                    organizationLocationId: null,
                                    version: 0
                                };
                                $scope.fridayObject.timings = [{
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                }];
                            } else {
                                $scope.fridayObject.timings.push({
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                });
                            }
                        } else if (newValue == "Saturday") {
                            if (angular.isUndefined($scope.saturdayObject)) {
                                $scope.saturdayObject = {
                                    day: "SATURDAY",
                                    id: null,
                                    organizationLocationId: null,
                                    version: 0
                                };
                                $scope.saturdayObject.timings = [{
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                }];
                            } else {
                                $scope.saturdayObject.timings.push({
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                });
                            }
                        } else if (newValue == "Sunday") {
                            if (angular.isUndefined($scope.sundayObject)) {
                                $scope.sundayObject = {
                                    day: "SUNDAY",
                                    id: null,
                                    organizationLocationId: null,
                                    version: 0
                                };
                                $scope.sundayObject.timings = [{
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                }];
                            } else {
                                $scope.sundayObject.timings.push({
                                    startTime: value.defaultStartTime,
                                    endTime: value.defaultEndTime
                                });
                            }
                        } else {
                            alert("Wrong Input Value");
                        }
                    }
                });
            });
            $scope.CalendarPopUpValues.defaultAvailablity.splice(0, $scope.CalendarPopUpValues.defaultAvailablity.length);
            if (!angular.isUndefined($scope.mondayObject)) {
                $scope.CalendarPopUpValues.defaultAvailablity.push($scope.mondayObject);
            } else {
                $scope.calendarObject.nonWorkingDays.push("MONDAY");
            }
            if (!angular.isUndefined($scope.tuesdayObject)) {
                $scope.CalendarPopUpValues.defaultAvailablity.push($scope.tuesdayObject);
            } else {
                $scope.calendarObject.nonWorkingDays.push("TUESDAY");
            }
            if (!angular.isUndefined($scope.wednesdayObject)) {
                $scope.CalendarPopUpValues.defaultAvailablity.push($scope.wednesdayObject);
            } else {
                $scope.calendarObject.nonWorkingDays.push("WEDNESDAY");
            }
            if (!angular.isUndefined($scope.thursdayObject)) {
                $scope.CalendarPopUpValues.defaultAvailablity.push($scope.thursdayObject);
            } else {
                $scope.calendarObject.nonWorkingDays.push("THURSDAY");
            }
            if (!angular.isUndefined($scope.fridayObject)) {
                $scope.CalendarPopUpValues.defaultAvailablity.push($scope.fridayObject);
            } else {
                $scope.calendarObject.nonWorkingDays.push("FRIDAY");
            }
            if (!angular.isUndefined($scope.saturdayObject)) {
                $scope.CalendarPopUpValues.defaultAvailablity.push($scope.saturdayObject);
            } else {
                $scope.calendarObject.nonWorkingDays.push("SATURDAY");
            }
            if (!angular.isUndefined($scope.sundayObject)) {
                $scope.CalendarPopUpValues.defaultAvailablity.push($scope.sundayObject);
            } else {
                $scope.calendarObject.nonWorkingDays.push("SUNDAY");
            }
            var validationFlag = true;
            if (validationFlag == true) {
                angular.forEach($scope.CalendarPopUpValues.defaultAvailablity, function (value, key) {
                    angular.forEach(value.timings, function (value1, key1) {
                        angular.forEach(value.timings, function (value2, key2) {
                            if ((parseInt(value1.startTime.replace(":", "")) <= parseInt(value2.startTime.replace(":", "")) && parseInt(value1.endTime.replace(":", "")) >= parseInt(value2.endTime.replace(":", "")) && key2 != key1) ||
                                (parseInt(value1.startTime.replace(":", "")) <= parseInt(value2.startTime.replace(":", "")) && parseInt(value1.endTime.replace(":", "")) >= parseInt(value2.startTime.replace(":", "")) && key2 != key1) ||
                                (parseInt(value1.startTime.replace(":", "")) <= parseInt(value2.endTime.replace(":", "")) && parseInt(value1.endTime.replace(":", "")) >= parseInt(value2.endTime.replace(":", "")) && key2 != key1) ||
                                (parseInt(value1.startTime.replace(":", "")) >= parseInt(value1.endTime.replace(":", "")))) {
                                validationFlag = false;
                            }
                        });
                    });
                });
            }
            if (validationFlag == true) {
                return $scope.CalendarPopUpValues.defaultAvailablity;
            } else {
                return false;
            }
        } else if (flag == "Client") {
            $scope.availablityObject = [{}];
            angular.forEach($scope.calendarObject.defaultAvailablities, function (value, key) {
                angular.forEach(value.timings, function (Value2, Key2) {
                    if (!angular.isUndefined(Value2.StartTime) && !angular.isUndefined(Value2.EndTime)) {
                        var start = Value2.StartTime;
                        var end = Value2.EndTime;
                        if ($scope.availablityObject.length == 0) {
                            var workObject = {};
                            workObject[value.day.toLowerCase()] = true;
                            workObject["startTime"] = start;
                            workObject["endTime"] = end;
                            $scope.availablityObject.push(workObject);
                        } else {
                            var validFlag = false;
                            angular.forEach($scope.availablityObject, function (value1, key1) {
                                if (!angular.isUndefined(value1)) {
                                    if (validFlag == false) {
                                        if (value1.startTime == start && value1.endTime == end) {
                                            value1[value.day.toLowerCase()] = true;
                                            validFlag = true;
                                        }
                                    }
                                }
                            });
                            if (validFlag == false) {
                                var workObject = {};
                                workObject[value.day.toLowerCase()] = true;
                                workObject["startTime"] = start;
                                workObject["endTime"] = end;
                                $scope.availablityObject.push(workObject);
                            }
                        }
                    }
                });
            });
            $scope.calendarObject.defaultAvailablities = $scope.availablityObject;
            $scope.CalendarPopUpValues.professional = $scope.calendarObject.name;
            $scope.CalendarPopUpValues.requestStartDate = $scope.calendarObject.startDate;
            $scope.CalendarPopUpValues.requestEndDate = $scope.calendarObject.endDate;
            $scope.CalendarPopUpValues.id = $scope.calendarObject.id;
            $scope.CalendarPopUpValues.organizationLocationId = $scope.calendarObject.organizationLocationId;
            $scope.CalendarPopUpValues.version = $scope.calendarObject.version;
            $scope.CalendarPopUpValues.organizationId = $scope.calendarObject.organizationId;
            return $scope.CalendarPopUpValues;
        }
    },

    dateFormatter: function (date) {
        var newDate = new Date(date);
        var month = ("0" + (newDate.getMonth() + 1)).slice(-2);
        var day = ("0" + (newDate.getDate())).slice(-2);
        var year = newDate.getFullYear();
        return year + "-" + month + "-" + day;
    },

    dateSeperator: function (date) {
        var obj = {};
        var newDate = new Date(date);
        obj.month = ("0" + (newDate.getMonth() + 1)).slice(-2);
        obj.day = ("0" + (newDate.getDate())).slice(-2);
        obj.year = newDate.getFullYear();
        return obj;
    },

    removeSpecificObject: function (objectList, object) {
        for (var i = 0; i <= objectList.length; i++) {
            if (objectList[i].name == object.name) {
                objectList.splice(i, 1);
                break;
            }
        }
    },

    eventValidate: function (start, end, title, calendarObject) {
        for (var a = 0; a < calendarObject.events.length; a++) {
            if (calendarObject.events[a].title == title || calendarObject.events[a].start == start) {
                alert("invalid");
                return false;
            }
        }
        return true;
    },

    addZero: function (time) {
        var newTime = "";
        if (time < 10) {
            newTime = "0" + time;
        }
        return newTime;
    }

};