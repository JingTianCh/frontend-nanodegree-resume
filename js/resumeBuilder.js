/*
建立简历的代码将会在这个文件里写出
*/
/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "contacts": {
        "mobile": "6505555555",
        "email": "john@example.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "blog": "johndoe",
        "location": "武汉市泛海国际樱海园"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "lorem ipsum dolor sit etc etc etc",
    "skills": ["Awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
    display: function () {


        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile).replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email).replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter).replace("%data%", bio.contacts.twitter));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github).replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLblog.replace("%data%", bio.contacts.blog).replace("%data%", bio.contacts.blog));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location).replace("%data%", bio.contacts.location));

        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));


        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skill = 0; skill < bio.skills.length; skill++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
            }

        }
            $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile).replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email).replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter).replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github).replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLblog.replace("%data%", bio.contacts.blog).replace("%data%", bio.contacts.blog));
    }
};

bio.display();

var work = {
    "jobs": [
        {
            "title": "Delivery Boy",
            "employer": "Planet Express",
            "dates": "January 3000-Future",
            "location": "中山公园",
            "description": "Job Description for Planet Express"
	},
        {
            "title": "Delivery Boy",
            "employer": "Panucci's Pizza",
            "dates": "198-Decemeber 31,1999",
            "location": "华中科技大学协和医院",
            "description": "Job Description for Panucci's Pizza"
	}
		   ],
    display: function () {
        this.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedEmployerTitle = HTMLworkTitle.replace("%data%", job.title);
            $(".work-entry:last").append(formattedEmployer + formattedEmployerTitle);
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
        })
    }
};

work.display();

var education = {
    "schools": [
        {
            "name": "华中科技大学",
            "location": "洪山区珞喻路1037号华中科技大学",
            "degree": "BA",
            "majors": ["CS"],
            "dates": "2013",
            "url": "http://www.hust.edu.cn/"
},
        {
            "name": "华中师范大学",
            "location": "洪山区珞喻路152号华中师范大学",
            "degree": "Masters",
            "majors": ["CS"],
            "dates": "2003",
            "url": "http://www.ccnu.edu.cn/"
}
	],
    "onlineCourses": [
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": "2014",
            "url": "http://www.udacity.com/course/ud804"
		}
	],
    display: function () {
        for (var index = 0; index < this.schools.length; index++) {

            $("#education").append(HTMLschoolStart);
            var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[index].degree);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", this.schools[index].name).replace("#",this.schools[index].url) + formattedDegree);

            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", this.schools[index].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", this.schools[index].location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", this.schools[index].majors));
        }
        for (var index = 0; index < this.onlineCourses.length; index++) {
            if (index === 0) {
                $("#education").append(HTMLonlineClasses);
            }
            $("#education").append(HTMLschoolStart);
            var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[index].school);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", this.onlineCourses[index].title).replace("#",this.onlineCourses[index].url) + formattedSchool);
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", this.onlineCourses[index].dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", this.onlineCourses[index].url).replace("#",this.onlineCourses[index].url));
        }
    }
};
education.display();

var projects = {
    "projects": [
        {
            "title": "project name",
            "dates": "2016",
            "description": "project content",
            images: ["images/fry.jpg", "images/fry.jpg"]
    }
    ],
    display: function () {
        this.projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
            if (project.images.length > 0) {
                for (var index = 0; index < project.images.length; index++) {
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.images[index]));
                }

            }
        })

    }
};

projects.display();


$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});


//解除下面代码的注释, 添加高德地图到 mapDiv 上，使得简历拥有地图
$("#mapDiv").append(gaodeMap);
