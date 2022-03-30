const createEmployeeRecord = (recArray) => {
	return {
		firstName: recArray[0],
		familyName: recArray[1],
		title: recArray[2],
		payPerHour: recArray[3],
		timeInEvents: [],
		timeOutEvents: [],
	};
};

const createEmployeeRecords = (recordsArray) => {
	return recordsArray.map((rec) => createEmployeeRecord(rec));
};

const createTimeInEvent = function (dateStamp) {
	console.log(dateStamp);
	const [date, hour] = dateStamp.split(" ");
	// const arrFromDate = dateStamp.split(" ")
	// const date = arrFromDate[0]
	// const hour = arrFromDate[1]

	const inEvent = {
		type: "TimeIn",
		hour: parseInt(hour),
		date: date,
	};
	this.timeInEvents.push(inEvent);
	console.log("this:", this);

	return this;
};

const createTimeOutEvent = function (dateStamp) {
	const [date, hour] = dateStamp.split(" ");

	const outEvent = {
		type: "TimeOut",
		hour: parseInt(hour),
		date: date,
	};
	this.timeOutEvents.push(outEvent);

	return this;
};

const hoursWorkedOnDate = function (targetDate) {
	const inEvent = this.timeInEvents.find(
		(inEvent) => inEvent.date === targetDate
	);
	const timeOutEvent = this.timeOutEvents.find(
		(inEvent) => outEvent.date === targetDate
	);
	return (outEvent.hour - inEvent.hour) / 100;
};

const wagesEarnedOnDate = function (targetDate) {
	return hoursWorkedOnDate.call(this, targetDate) * this.payPerHour;
};

const allWagesFor = function () {
	const eligibleDates = this.timeInEvents.map(function (e) {
		return e.date;
	});

	const payable = eligibleDates.reduce(
		function (memo, d) {
			return memo + wagesEarnedOnDate(this, d);
		}.bind(this),
		0
	);
	return payable;
};

const findEmployeeByFirstName = function (srcArray, firstName) {
	return srcArray.find((rec) => rec.firstNAme === firstName);
};

const calculatePayroll = function (recsArray) {
	return recArray.reduce((total, rec) => {
		return total + allWagesFor.call(rec);
	}, 0);
};

// function createEmployeeRecord(empArray) {
// 	// console.log(empArray);
// 	let testEmployee = {};
// 	testEmployee.firstName = empArray[0];
// 	testEmployee.familyName = empArray[1];
// 	testEmployee.title = empArray[2];
// 	testEmployee.payPerHour = empArray[3];
// 	testEmployee.timeInEvents = [];
// 	testEmployee.timeOutEvents = [];
// 	return testEmployee;
// }

// let employeeRecords = function createEmployeeRecords(arrays) {
// 	return arrays.map(nameExtractor);
// };

// let nameExtractor = function (arrays) {
// 	return arrays.firstName;
// };

// let twoRows = [
// 	["moe", "sizlak", "barkeep", 2],
// 	["bartholomew", "simpson", "scamp", 3],
// ];

// let dataEmployees = [
// 	["Thor", "Odinsson", "Electrical Engineer", 45],
// ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
// ["Natalia", "Romanov", "CEO", 150],
// ["Darcey", "Lewis", "Intern", 15],
// ["Jarvis", "Stark", "CIO", 125],
// ["Anthony", "Stark", "Angel Investor", 300],
// ["Byron", "Poodle", "Mascot", 3],
// ["Julius", "Caesar", "General", 27],
// ["Rafiki", "", "Aide", 10],
// ["Simba", "", "King", 100],
// ];

// employeeRecords(twoRows);
