document.getElementById('registerBtn').addEventListener('click', function () {
    var unit = document.getElementById('unitInput').value;
    var semester = document.getElementById('semesterInput').value;
    var course = document.getElementById('courseInput').value;
    var crn = document.getElementById('crnInput').value;
    var seatLimit = document.getElementById('seatLimitInput').value;
    var registrationDeadline = document.getElementById('registrationDeadlineInput').value;
    var classType = document.getElementById('classTypeInput').value;
    var startTime = document.getElementById('startTimeInput').value;
    var endTime = document.getElementById('endTimeInput').value;
    var location = document.getElementById('locationInput').value;

    var data = {
        unit: unit,
        semester: semester,
        course: course,
        crn: crn,
        seatLimit: seatLimit,
        registrationDeadline: registrationDeadline,
        classType: classType,
        startTime: startTime,
        endTime: endTime,
        location: location
    };

    var request = new XMLHttpRequest();
    request.open('POST', 'api/unit-registration', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(JSON.stringify(data));

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            console.log(data);
            alert('Registration successful!');
        } else {
            // We reached our target server, but it returned an error
            console.error('Server error');
            alert('Registration failed! Please try again.');
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
        console.error('Connection error');
        alert('Registration failed! Please try again.');
    };
});