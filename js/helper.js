/*
此文件包含所有能使得 resumeBuilder.js 能够运行的代码。 我们称之为帮助函数，因为它们支持您在本课程中的代码。
不要担心，您将在整个课程中了解此文件中发生的情况。
Cameron Pittman
*/

/*
这些是 HTML 字符串。 作为课程的一部分，
您将使用JavaScript函数替换您在其中看到的 ％data％ 占位符文本。
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><a href="tel:%data%" target="_blank"><span class="orange-text"><span class="zocial-call"></span>mobile</span><span class="white-text">%data%</span></a></li>';
var HTMLemail = '<li class="flex-item"><a href="mailto:%data%" target="_blank"><span class="orange-text"><span class="zocial-email"></span>email</span><span class="white-text">%data%</span></a></li>';
var HTMLtwitter = '<li class="flex-item"><a href="https://twitter.com/search?q=%data%" target="_blank"><span class="orange-text"><span class="zocial-twitter"></span>twitter</span><span class="white-text">%data%</span></a></li>';
var HTMLgithub = '<li class="flex-item"><a target="_blank" href="https://github.com/search?utf8=%E2%9C%93&q=%data%&type=Users"><span class="orange-text"><span class="zocial-github"></span>github</span><span class="white-text">%data%</span></a></li>';
var HTMLblog = '<li class="flex-item"><a target="_blank" href="https://plus.google.com/s/%data%/people"><span class="orange-text"><span class="zocial-blogger"></span>blog</span><span class="white-text">%data%</span></a></li>';
var HTMLlocation = '<li class="flex-item"><a target="_blank" href="http://ditu.amap.com/search?query=%data%"><span class="orange-text"><span class="zocial-pinboard"></span>location</span><span class="white-text">%data%</span></a></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#" target="_balnk">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#" target="_blank">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#" target="_blank">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var gaodeMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function() {};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x, y) {
  clickLocations.push({
    x: x,
    y: y
  });
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
这是有趣的部分。 这里是我们为网站生成自定义高德地图的地方。
有关详细信息，请参阅以下文档。
http://lbs.amap.com/
*/
var map; // 声明一个全局变量，存储地图对象

/*
从这里开始！ 在加载页面时会调用initializeMap（）
*/
function initializeMap() {
    // 创建地图对象
    map = new AMap.Map('map', {
        resizeEnable: true,
        center: [114.305215, 30.592935],
        zoom: 9
    });

    map.plugin(["AMap.ToolBar"], function () {
        // 添加 工具条
        map.addControl(new AMap.ToolBar());
    });

    var locations = locationFinder();
      locations.forEach(function(place) {
        searchLocation(place);
      });
    map.setFitView();

    map.addControl(new AMap.ToolBar());
    if (AMap.UA.mobile) {
        document.getElementById('button_group').style.display = 'none';
    }
}
//这个函数会读取，你在 resumeBuilder.js 所写下的全部有关地址的数据
function locationFinder() {

  // 初始化一个空的数组，用来存储地点
  var locations = [];

  //将 bio 的 contacts 数据里的地址添加到 locations 数组里
  locations.push(bio.contacts.location);


  //迭代 education 的 schools 数据里的地址，并将地址添加到 locations 数组里
  education.schools.forEach(function(school) {
    locations.push(school.location);
  });


  // 迭代 work 的 jobs 数据里的地址，并将地址添加到 locations 数组里
  work.jobs.forEach(function(job) {
    locations.push(job.location);
  });

  return locations;
}
var infoWindow = new AMap.InfoWindow({
    offset: new AMap.Pixel(15, -20)
});
//根据地址的名字，将标记添加上地图上
function searchLocation(name) {
    AMap.plugin('AMap.PlaceSearch', function () { //回调函数
    var placeSearch = new AMap.PlaceSearch({
                    city:'027',
                    pageSize:6
                });
        //使用placeSearch对象调用关键字搜索的功能
        placeSearch.search(name, function (status, data) {
            if (status !== 'complete') return;
            var pois = data.poiList.pois; 
                var marker = new AMap.Marker({
                    content: '<div class="marker" >' + '</div>',
                    position: pois[0].location,
                    map: map,
                });
               marker.setLabel({
                    offset: new AMap.Pixel(20, 20), //修改label相对于maker的位置
                    content: pois[0].name
                });
                marker.setTitle(pois[0].name+'\r\n地址：'+pois[0].address+'\r\n电话：'+pois[0].tel);
            
                marker.content='<span class="infoWindow"><b>'+pois[0].name+"</b><a class='inline'  href='http://ditu.amap.com/detail/"+pois[0].id+"' target='_blank'>详细信息</a>"+'<br/>地址：'+pois[0].address+'<br/>电话：'+pois[0].tel+'</span>';
               // marker.setAnimation('AMAP_ANIMATION_BOUNCE');
                marker.id = pois[0].id;
                marker.name = pois[0].name;
/*                marker.on('click', function () {
                    
                    // map.detailOnAMAP({
                    //     id:this.id
                    // },marker)
//                    map.poiOnAMAP({
//                        name: this.name,
//                        location: this.getPosition(),
//                        id: this.id
//                    })
                });*/
                marker.on('click',markerClick);
                marker.emit('click',{target:marker});
            //0905鼠标点击marker弹出自定义的信息窗体
//        AMap.event.addListener(marker, 'click', function() {
//            infoWindow.open(map, marker.getPosition());
//        });

           map.setFitView();  
        })
    })
}

    function markerClick(e){
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }
//关闭信息窗体
function closeInfoWindow() {
        map.clearInfoWindow();
    }
// 在加载页面时调用 initializeMap（）函数
window.addEventListener('load', initializeMap);

// 当页面的大小改变时，调整地图的缩放
window.addEventListener('resize', function(e) {
  map.setFitView();
});