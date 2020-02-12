var locations = []
var playVideo = false
var marker = null;
var line = null;
var duration = null;
var markerarray = []
var video_paused = false
var check_secondexecution = false
var Icon = L.DivIcon.extend({
    createIcon: function() {
        // outerDiv.style.transform is updated by Leaflet
        var outerDiv = document.createElement('div');
        this.div = document.createElement('div');
        this.div.classList.add('ferrari');
        const img = document.createElement('img');
        img.src = '../electron_moving_tracks/electron_moving_tracks/Ferrari.png';
        img.width = '30';
        this.div.appendChild(img);
        outerDiv.appendChild(this.div);
        return outerDiv;
    },
    rotate(deg) {
        this.div.style.transform = 'translate3d(-15px, -35px, 0) rotate(' + deg + 'deg)';
    },
    iconSize: [30, 70],
})

console.log('check 2')
var icon = new Icon();
function parse_json(text) {
    console.log('parse_json')

    geojson = JSON.parse(text);
    map.setView(geojson.start,17);
    locations = geojson.line
    console.log('above second execution')
    line  = geojson.linestring;
    durations = geojson.duration;
    map.addLayer(L.polyline(line));
//    myMovingMarker = L.Marker.movingMarker(geojson.line, geojson.duration, { icon: myIcon }).addTo(map);

//    console.log(line)
    secondexecution(locations);
    markerarray.push(marker);
    console.log('array : ',markerarray);
   
}


function secondexecution (given_line){
console.log('In second execution')
//console.log(locations)
//var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
//var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
//var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 20, attribution: osmAttrib});
//var map = L.map('map', {
//    center: [locations[0].lat, locations[0].lng],
//    zoom: 18
//});
//map.addLayer(osm);
console.log('check 1')

marker = L.movingMarker([given_line[0].lat, given_line[0].lng], {
    destinations: given_line.map(function(item, index, array) {
        var duration = index === 0 ? 1000 : item.recorded_at_ms - array[index - 1].recorded_at_ms;
        return {
            latLng: [item.lat, item.lng],
            duration: duration,
            bearing: item.bearing,
        };
    }),
    icon: icon,
});
if (check_secondexecution==false)
{
    video_paused = true
    check_secondexecution = true
}
else{
    video_paused = false
}

console.log('check 3')

marker.on('destinationsdrained', function() {
    marker.pause()
    console.log('done');
});

marker.on('start', function() {

    icon.rotate(given_line[0].bearing);
});
marker.on('destination', function(destination) {
    if (destination.bearing !== undefined) {
        icon.rotate(destination.bearing);
    }
});

marker.addTo(map);
marker.pause();
z=18
z = map.getZoom()
map.setView(L.latLng(given_line[0].lat, given_line[0].lng), z);

}

function pause_vid() {
//    playVideo = false
//    myMovingMarker.pause();
//    playing = false;
      video_paused = true;
      marker.pause()

}

function end_vid(){
    video_paused = true;
    marker.pause()
}

function play_vid() {
      video_paused = false;
      marker.start()

}

function video_seeked() {
    if (video_paused==true){
    check_secondexecution = false
    }
    console.log('video_seeked')
//    console.log(line)
    var video = document.getElementById('my_video_1');
    var time_index = Math.floor(video.currentTime - 2);
    var new_locations = locations.slice(time_index)
    map.removeLayer(marker)
    secondexecution(new_locations)
//    console.log(time_index,time_index,new_line)
//    var new_durations = durations.slice(time_index)
//
//    myMovingMarker.moveTo(line[time_index], 200);
//    map.removeLayer(myMovingMarker)
//    myMovingMarker = L.Marker.movingMarker(new_line, new_durations, { icon: myIcon, autostart: false }).addTo(map);
    // myMovingMarker.resume()

}
function databaseFields(){
    console.log('databaseFields')
    var uname = document.getElementById("username").value;
    var upass = document.getElementById("password").value;
    var dbname = document.getElementById("databasename").value;
    var dbip = document.getElementById("ip").value;
    dbCredentials.dbname = dbname;
    dbCredentials.password = upass;
    dbCredentials.ip = dbip;
    dbCredentials.username = uname;
      let options1_22 = {
        mode: 'text',
        pythonPath: 'python',
        args: [JSON.stringify(dbCredentials)]
    };
    PythonShell.run('csv to srt/Db_check.py',options1_22,  function  (err, results)  {
    fs.readFile('auth.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString())
    if(data.toString()=="False"){
    console.log('check if')
    alert('Wrong Database Credentials')
    }
    else{
    console.log('check else')
    alert('Right Database Credentials')
    }
})
    if  (err)  throw err;

    console.log('SRT_converted!.');
    console.log('results', results);
    });

    console.log(uname,upass,dbname,dbip);
}

function directorySelected() {
    var  selectedDirectory = document.getElementById("myFile").files[0].path.split('\\').join('/')

    // push_foler_value(a);
    console.log('DIR PATH', selectedDirectory)

    fs.readdir(selectedDirectory, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        console.log('select a video')
        var files_name = ["Select a video"]
        files.forEach(function (file) {
            file=path.join(`${selectedDirectory}/`,file);
            // Do whatever you want to do with the file
            //console.log(file);
            // console.log(file.replace(/[\\]/g,'/'));
            file=file.replace(/[\\]/g,'/')
            if (file.endsWith('.mp4')){
            files_name.push(file);
            console.log('file names are ',file);
        }

            // console.log("The file list ",files_list);

        });
        console.log('In push items')
        push_items(files_name);
        console.log('In push items 1')
    });


    // SRT Script runner!
    let options1_2 = {
        mode: 'text',
        pythonPath: 'python',
        args: [selectedDirectory, JSON.stringify(dbCredentials)]
    };

    console.log('options1_2')
    console.log(options1_2['args'])
    PythonShell.run('csv to srt/csv_srt_converter.py',options1_2,  function  (err, results)  {
    alert('SRT Files Inserted')

    if  (err)  throw err;
    console.log('SRT_converted!.');
    // console.log('results', results);
    });

    console.log('API results',JSON.stringify(dbCredentials));
    //First set the raw_dir pathin configuration file then run track
    let options1 = {
        mode: 'text',
        pythonPath: 'python',
        pythonOptions: ['-u'], // get print results in real-time
        args: [JSON.stringify(dbCredentials)]
    };
    console.log('options1')

    PythonShell.run('electron_moving_tracks/electron_moving_tracks/track_api.py',options1,  function  (err, api_results)  {
    if  (err)  throw err;
    console.log('API results');
    console.log('API results', api_results);
    });

        // return 'suvyuv';



}

function loop_state(){
    return false
}

function test(){
console.log('test')

var a = document.getElementById('input-folder-1').value;
console.log('the file is ', a);
}
function start_work() {
    check_secondexecution = false
    console.log('start work')

    try {
  if (global.gc) {global.gc();}
} catch (e) {
  console.log("`node --expose-gc index.js`");

}
    if(marker !== null){
      marker.pause()
      map.removeLayer(marker)
      marker = null
    }

    var video = document.getElementById('my_video_1');
    video.loop = false;
    video.autoplay = false;
    var video_name = document.getElementById('menu').value;
    // populating_db(video_name);
    console.log('Video names in Start_Work')
    console.log(video_name);
    playing = false;
    if (video_name == 'Select Video Name') {
        return null;
    }
    var dbip = document.getElementById("ip").value;
    console.log('ip  : ',dbip)
    let xmlhttp = new XMLHttpRequest();
    var theUrl = "http://localhost:8006/videotrack";
    //var theUrl = "http://172.16.130.116:8006/videotrack";
    xmlhttp.open("POST", theUrl, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.onreadystatechange = () => { parse_json(xmlhttp.responseText) }
    // console.log("video_name ",video_name)
    xmlhttp.send(JSON.stringify({ "fname": video_name }));

    video.setAttribute('src', video_name)
    console.log('end of start work')
}



// list all the files in the raw_dir
//requiring path and fs modules
// var files_list = [];
function push_items(items){
    for (item in items) {

        // console.log(items[item])
        select.add(new Option(items[item]));
        var elems = document.querySelectorAll('select');
        console.log(elems.innerText)
        video_name = {'name':'sarmad','surname':'ali'}
        var instances = M.FormSelect.init(elems,items[item]);
    }
}

// Init Select
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('select');
console.log(elems.innerText)
video_name = {'name':'sarmad','surname':'ali'}
var instances = M.FormSelect.init(elems,video_name);
      });
//

let { PythonShell } = require('python-shell');

const path = require('path');
const fs = require('fs');
//joining path of directory
console.log(__dirname)
const directoryPath = path.join("", 'D:/sarmad/electron/local_project/rawdata/1000');
var dbCredentials = {"ip": null,
                    "port": 5432,
                    "dbname": null,
                    "username": null,
                    "password": null};


select = document.getElementById('menu');

var track_started = false;
var map = L.map('mapid').setView([30.3753, 69.3451], 5);
L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);

var myMovingMarker = null;
var myIcon = L.icon({
    iconUrl: 'https://www.freeiconspng.com/uploads/red-location-icon-map-png-4.png',
    iconSize: [70, 70],
    direction:90
});

// myMovingMarker = L.Marker.movingMarker(parisKievLL, [10000]).addTo(map);
// map.addLayer(myMovingMarker);
// map.addLayer(L.polyline(parisKievLL))

playing = false;
durations = null;
// myPlayer = videojs('my_video_1', {}, function() {});

// var myPlayer = document.getElementById('my_video_1');





