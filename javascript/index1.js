map = new AMap.Map('mapContain', {
    center: [118.0017, 36.8102],
    layers: [
        new AMap.TileLayer()
    ],
    zooms: [4, 18],
    zoom: 15,
    viewMode: '2D',
    mapStyle: 'amap://styles/darkblue',
});
var content = '<span class="marker1"></span>';
marker1 = new AMap.Marker({
    content: content, // 自定义点标记覆盖物内容
    position: new AMap.LngLat(117.9941618443, 36.8153145562), // 基点位置
    offset: new AMap.Pixel(-11, -30) // 相对于基点的偏移位置
});
var content = '<span class="marker2"></span>';
marker2 = new AMap.Marker({
    content: content, // 自定义点标记覆盖物内容
    position: new AMap.LngLat(118.0095040798, 36.8095681674), // 基点位置
    offset: new AMap.Pixel(-11, -30) // 相对于基点的偏移位置
});
var content = '<span class="marker3"></span>';
marker3 = new AMap.Marker({
    content: content, // 自定义点标记覆盖物内容
    position: new AMap.LngLat(118.0060601234, 36.8073777263), // 基点位置
    offset: new AMap.Pixel(-11, -30) // 相对于基点的偏移位置
});
var content = '<span class="marker4"></span>';
marker4 = new AMap.Marker({
    content: content, // 自定义点标记覆盖物内容
    position: new AMap.LngLat(117.9937219620, 36.8067162866), // 基点位置
    offset: new AMap.Pixel(-11, -30) // 相对于基点的偏移位置
});
var content = '<span class="marker5"></span>';
marker5 = new AMap.Marker({
    content: content, // 自定义点标记覆盖物内容
    position: new AMap.LngLat(118.0028092861, 36.8133819623), // 基点位置
    offset: new AMap.Pixel(-11, -30) // 相对于基点的偏移位置
});
map.add(marker1);
map.add(marker2);
map.add(marker3);
map.add(marker4);
map.add(marker5);
AMap.plugin('AMap.Geocoder');
var geocoder = new AMap.Geocoder({
    // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
    city: '010'
});
geocoder.getAddress(new AMap.LngLat(118.0017, 36.8102), function (status, result) {
    if (status === 'complete' && result.regeocode) {
        var address = result.regeocode.formattedAddress;
        document.getElementById('placeName').innerHTML = address;
        console.log(address);
        AMap.plugin('AMap.Weather', function () {
            //创建天气查询实例
            var weather = new AMap.Weather();
            //执行实时天气信息查询
            weather.getLive(result.regeocode.addressComponent.adcode, function (err, data) {
                var str = [];
                str.push(data.city + ' ');
                str.push(data.weather + ' ');
                str.push(data.temperature + '℃' + ' ');
                str.push('风向：' + data.windDirection + ' ');
                str.push('风力：' + data.windPower + ' 级');
                document.getElementById('weather').innerHTML = '<div class="info" style="position:inherit;margin-bottom:0;">' + str.join('') + '</div><div class="sharp"></div>'
            });
            console.log('1')
        });
    } else {
        log.error('根据经纬度查询地址失败')
    }
});
var marker = new AMap.Marker();
map.on('click', (e) => {
    var lnglat = e.lnglat;

    map.add(marker);
    marker.setPosition(lnglat);
    geocoder.getAddress(lnglat, function (status, result) {
        if (status === 'complete' && result.regeocode) {
            var address = result.regeocode.formattedAddress;
            document.getElementById('placeName').innerHTML = address;
            AMap.plugin('AMap.Weather', function () {
                //创建天气查询实例
                var weather = new AMap.Weather();
                //执行实时天气信息查询
                weather.getLive(result.regeocode.addressComponent.adcode, function (err, data) {
                    var str = [];
                    console.log(data);
                    str.push(data.city + ' ');
                    str.push(data.weather + ' ');
                    str.push(data.temperature + '℃' + ' ');
                    str.push('风向：' + data.windDirection + ' ');
                    str.push('风力：' + data.windPower + ' 级');
                    document.getElementById('weather').innerHTML = '<div class="info" style="position:inherit;margin-bottom:0;">' + str.join('') + '</div><div class="sharp"></div>'
                });

            });
        } else {
            log.error('根据经纬度查询地址失败')
        }
    });
})
Array.prototype.pushNoRepeat = function () {
    for (var i = 0; i < arguments.length; i++) {
        var ele = arguments[i];
        if (this.indexOf(ele) == -1) {
            this.push(ele);
        }
    }
};
let xhr = new XMLHttpRequest();
var message = {};
var timeX = [];
var timeX1 = [];
var timeX2 = [];
var timeX3 = [];
var timeX4 = [];
var timeX5 = [];
// device1
var humidityData1 = [];
var temperatureData1 = [];
var PM25Data1 = [];
var PM10Data1 = [];
var voltageData1 = [];
// device2
var humidityData2 = [];
var temperatureData2 = [];
var PM25Data2 = [];
var PM10Data2 = [];
var voltageData2 = [];
// device3
var humidityData3 = [];
var temperatureData3 = [];
var PM25Data3 = [];
var PM10Data3 = [];
var voltageData3 = [];
// device4
var humidityData4 = [];
var temperatureData4 = [];
var PM25Data4 = [];
var PM10Data4 = [];
var voltageData4 = [];
// device5
var humidityData5 = [];
var temperatureData5 = [];
var PM25Data5 = [];
var PM10Data5 = [];
var voltageData5 = [];
// battery
var battery = [];
// pollution status
var best = 0;
var good = 0;
var little = 0;
var middle = 0;
var bad = 0;
var worst = 0;
var best1 = 0;
var good1 = 0;
var little1 = 0;
var middle1 = 0;
var bad1 = 0;
var worst1 = 0;
// time
var startTime;
var timeAxis = [];

var timeAxis1 = [];
var timeAxis2 = [];
var timeAxis3 = [];
var timeAxis4 = [];
var timeAxis5 = [];

// option
var dataChart, batteryChart, aqiChart, temperatureDataOption, humidityDataOption, PM25DataOption, PM10DataOption;
// var timestamp = Date.parse(new Date());
// console.log(timestampToTime(timestamp));
// for (var i = 0; i < 5; i++) {
//     var timestamp1 = timestamp - 86400000;
//     console.log(timestampToTime(timestamp1).toString());
//     timeX.push(timestampToTime(timestamp1 + 21600000 * i).toString());
//     console.log(timeX);
// }
xhr.open('GET', '../querydata.php');
xhr.send(null);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
        message1 = JSON.parse(xhr.response.split("|")[0]);
        message2 = JSON.parse(xhr.response.split("|")[1]);
        console.log(message1)
        message3 = JSON.parse(xhr.response.split("|")[2]);
        message4 = JSON.parse(xhr.response.split("|")[3]);
        message5 = JSON.parse(xhr.response.split("|")[4]);
        // startTime = JSON.parse(xhr.response.split("|")[5]);
        // for (var i = 0; i < 5; i++) {
        //     timeX.push(timestampToTime(startTime + 21600000 * i));
        // }
        // device1
        for (var i = 0; i < message1.PropertyDataInfos.PropertyDataInfo.length; i++) {
            if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
                for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    humidityData1.push(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j]);
                    timeX.pushNoRepeat(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                }
            }
            if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
                for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    temperatureData1.push(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                }
            }
            if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
                for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    PM25Data1.push(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                    best++;
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                    good++;
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                    little++;
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                    middle++;
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                    bad++;
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                    worst++;
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                    worst++;
                }
            }
            if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
                for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    PM10Data1.push(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                    best1++;
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                    good1++;
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                    little1++;
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                    middle1++;
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                    bad1++;
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                    worst1++;
                }
                if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                    worst1++;
                }
            }
            if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
                for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    voltageData1.pushNoRepeat((message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
                }
            }
        }
        // device2
        for (var i = 0; i < message2.PropertyDataInfos.PropertyDataInfo.length; i++) {
            if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
                for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    humidityData2.push(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                    timeX.pushNoRepeat(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                }
            }
            if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
                for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    temperatureData2.push(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                }
            }
            if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
                for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    PM25Data2.push(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                    best++;
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                    good++;
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                    little++;
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                    middle++;
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                    bad++;
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                    worst++;
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                    worst++;
                }
            }
            if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
                for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    PM10Data2.push(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                    best1++;
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                    good1++;
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                    little1++;
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                    middle1++;
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                    bad1++;
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                    worst1++;
                }
                if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                    worst1++;
                }
            }
            if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
                for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    voltageData2.pushNoRepeat((message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
                }
            }
        }
        // device3
        for (var i = 0; i < message3.PropertyDataInfos.PropertyDataInfo.length; i++) {
            if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
                for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    humidityData3.push(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                    timeX1.pushNoRepeat(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                }
            }
            if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
                for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    temperatureData3.push(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                    timeX2.pushNoRepeat(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                }
            }
            if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
                for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    PM25Data3.push(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                    timeX3.pushNoRepeat(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                    best++;
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                    good++;
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                    little++;
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                    middle++;
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                    bad++;
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                    worst++;
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                    worst++;
                }
            }
            if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
                for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    PM10Data3.push(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                    timeX4.pushNoRepeat(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                    best1++;
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                    good1++;
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                    little1++;
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                    middle1++;
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                    bad1++;
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                    worst1++;
                }
                if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                    worst1++;
                }
            }
            if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
                for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    voltageData3.pushNoRepeat((message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
                }
            }
        }
        //device4
        for (var i = 0; i < message4.PropertyDataInfos.PropertyDataInfo.length; i++) {
            if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
                for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    humidityData4.push(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                    timeX.pushNoRepeat(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                }
            }
            if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
                for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    temperatureData4.push(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                }
            }
            if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
                for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    PM25Data4.push(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                    best++;
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                    good++;
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                    little++;
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                    middle++;
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                    bad++;
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                    worst++;
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                    worst++;
                }
            }
            if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
                for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    PM10Data4.push(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                    best1++;
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                    good1++;
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                    little1++;
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                    middle1++;
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                    bad1++;
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                    worst1++;
                }
                if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                    worst1++;
                }
            }
            if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
                for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    voltageData4.pushNoRepeat((message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
                }
            }
        }
        // device5
        for (var i = 0; i < message5.PropertyDataInfos.PropertyDataInfo.length; i++) {
            if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
                for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    humidityData5.push(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                    timeX.pushNoRepeat(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                }
            }
            if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
                for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    temperatureData5.push(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                }
            }
            if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
                for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    PM25Data5.push(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                }

                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                    best++;
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                    good++;
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                    little++;
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                    middle++;
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                    bad++;
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                    worst++;
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                    worst++;
                }
            }
            if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
                for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    PM10Data5.push(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                    best1++;
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                    good1++;
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                    little1++;
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                    middle1++;
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                    bad1++;
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                    worst1++;
                }
                if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                    worst1++;
                }
            }
            if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
                for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                    voltageData5.pushNoRepeat((message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
                }
            }
        }
        // timeX.sort(sortNumber);
        // for (var i = 0; i < timeX.length; i++) {
        //     timeAxis.push(timestampToTime(timeX[i]));
        // }
        for (var i = 0; i < timeX1.length; i++) {
            timeAxis1.push(timestampToTime(timeX1[i]));
        }
        for (var i = 0; i < timeX2.length; i++) {
            timeAxis2.push(timestampToTime(timeX2[i]));
        }
        for (var i = 0; i < timeX3.length; i++) {
            timeAxis3.push(timestampToTime(timeX3[i]));
        }
        for (var i = 0; i < timeX4.length; i++) {
            timeAxis4.push(timestampToTime(timeX4[i]));
        }
        for (var i = 0; i < timeX5.length; i++) {
            timeAxis5.push(timestampToTime(timeX5[i]));
        }


        dataChart = echarts.init(document.getElementById('dataChart'));
        batteryChart = echarts.init(document.getElementById('batteryChart'));
        pollutionChart = echarts.init(document.getElementById('pollutionChart'));

        pollutionPM25Option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染'],
                textStyle: {
                    color: '#fff'
                }
            },
            series: [{
                name: '空气质量指数类别',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                top: 50,
                left: 'left',
                data: [{
                        value: 30,
                        name: '优',
                        itemStyle: {
                            color: 'green'
                        }
                    },
                    {
                        value: 30,
                        name: '良',
                        itemStyle: {
                            color: 'yellow'
                        }
                    },
                    {
                        value: 30,
                        name: '轻度污染',
                        itemStyle: {
                            color: 'orange'
                        }
                    },
                    {
                        value: 80,
                        name: '中度污染',
                        itemStyle: {
                            color: 'red'
                        }
                    },
                    {
                        value: 100,
                        name: '重度污染',
                        itemStyle: {
                            color: 'purple'
                        }
                    },
                    {
                        value: 150,
                        name: '严重污染',
                        itemStyle: {
                            color: '#802A2A'
                        }
                    }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        pollutionPM10Option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'horizontal',
                left: 'right',
                data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
            },
            series: [{
                name: '空气质量指数类别',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [{
                        value: best1,
                        name: '优',
                        itemStyle: {
                            color: 'green'
                        }
                    },
                    {
                        value: good1,
                        name: '良',
                        itemStyle: {
                            color: 'yellow'
                        }
                    },
                    {
                        value: little1,
                        name: '轻度污染',
                        itemStyle: {
                            color: 'orange'
                        }
                    },
                    {
                        value: middle1,
                        name: '中度污染',
                        itemStyle: {
                            color: 'red'
                        }
                    },
                    {
                        value: bad1,
                        name: '重度污染',
                        itemStyle: {
                            color: 'purple'
                        }
                    },
                    {
                        value: worst1,
                        name: '严重污染',
                        itemStyle: {
                            color: '#802A2A'
                        }
                    }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        batteryDataOption = {
            legend: {
                data: ['剩余电量'],
                textStyle: {
                    color: '#fff'
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
                axisLabel: {
                    color: '#fff',
                    fontSize: 10,
                }

            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    color: '#fff',
                    fontSize: 10,
                    formatter: '{value}%'
                },
                min: 0,
                max: 100
            }],
            series: [{
                name: '剩余电量',
                type: 'bar',
                data: [{
                        name: '剩余电量',
                        value: 78,
                    },
                    {
                        name: '剩余电量',
                        value: 63,
                    },
                    {
                        name: '剩余电量',
                        value: 72,
                    },
                    {
                        name: '剩余电量',
                        value: 80,
                    },
                    {
                        name: '剩余电量',
                        value: 69,
                    }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}%'
                        },
                        color: function (params) {
                            if (params.data.value > 0 && params.data.value <= 20) {
                                return 'red'
                            }
                            if (params.data.value > 20 && params.data.value <= 80) {
                                return 'yellow'
                            }
                            if (params.data.value > 80 && params.data.value <= 100) {
                                return 'green'
                            }
                        },
                    }
                }

            }]
        };
        temperatureDataOption = {
            legend: {
                data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
                textStyle: {
                    color: '#65c6e7'
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: [{
                data: timeAxis1,
                axisLabel: {
                    color: '#fff',
                    fontSize: 10
                }
            }],
            yAxis: [{
                type: 'value',
                max: 45,
                min: -30,
                axisLabel: {
                    color: '#fff',
                    fontSize: 10,
                    formatter: '{value}℃'
                }
            }],
            series: [{
                    name: '四体',
                    type: 'line',
                    data: [9, 14, 9, 20, 18, 21],
                    areaStyle: {},
                },
                {
                    name: '大红炉',
                    type: 'line',
                    data: temperatureData2,
                    areaStyle: {},
                },
                {
                    name: '鸿远楼',
                    type: 'line',
                    data: temperatureData3,
                    areaStyle: {},
                },
                {
                    name: '机交楼',
                    type: 'line',
                    data: temperatureData4,
                    areaStyle: {},
                },
                {
                    name: '三体',
                    type: 'line',
                    data: temperatureData5,
                    areaStyle: {},
                }
            ]
        };
        humidityDataOption = {
            legend: {
                data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
                textStyle: {
                    color: '#65c6e7'
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: [{
                data: timeAxis2,
                axisLabel: {
                    color: '#fff',
                    fontSize: 10
                }
            }],
            yAxis: [{
                type: 'value',
                max: 100,
                min: 0,
                axisLabel: {
                    color: '#fff',
                    fontSize: 10,
                    formatter: '{value}%'
                }
            }],
            series: [{
                    name: '四体',
                    type: 'line',
                    data: humidityData1,
                    areaStyle: {},
                },
                {
                    name: '大红炉',
                    type: 'line',
                    data: humidityData2,
                    areaStyle: {},
                },
                {
                    name: '鸿远楼',
                    type: 'line',
                    data: humidityData3,
                    areaStyle: {},
                },
                {
                    name: '机交楼',
                    type: 'line',
                    data: humidityData4,
                    areaStyle: {},
                },
                {
                    name: '三体',
                    type: 'line',
                    data: humidityData5,
                    areaStyle: {},

                }
            ]
        };
        PM25DataOption = {
            legend: {
                data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
                textStyle: {
                    color: '#65c6e7'
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: [{
                data: timeAxis3,
                axisLabel: {
                    color: '#fff',
                    fontSize: 10
                }
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 500,
                axisLabel: {
                    color: '#fff',
                    fontSize: 10,
                    formatter: '{value}'
                }
            }],
            series: [{
                    name: '四体',
                    type: 'line',
                    data: PM25Data1,
                    areaStyle: {},

                },
                {
                    name: '大红炉',
                    type: 'line',
                    data: PM25Data2,
                    areaStyle: {},
                },
                {
                    name: '鸿远楼',
                    type: 'line',
                    data: PM25Data3,
                    areaStyle: {},
                },
                {
                    name: '机交楼',
                    type: 'line',
                    data: PM25Data4,
                    areaStyle: {},
                },
                {
                    name: '三体',
                    type: 'line',
                    data: PM25Data5,
                    areaStyle: {},
                }
            ]
        };
        PM10DataOption = {
            legend: {
                data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
                textStyle: {
                    color: '#65c6e7'
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: [{
                data: timeAxis4,
                axisLabel: {
                    color: '#fff',
                    fontSize: 10
                }
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 500,
                axisLabel: {
                    color: '#fff',
                    fontSize: 10,
                    formatter: '{value}'
                }
            }],
            series: [{
                    name: '四体',
                    type: 'line',
                    data: PM10Data1,
                    areaStyle: {},
                },
                {
                    name: '大红炉',
                    type: 'line',
                    data: PM10Data2,
                    areaStyle: {},
                },
                {
                    name: '鸿远楼',
                    type: 'line',
                    data: PM10Data3,
                    areaStyle: {},
                },
                {
                    name: '机交楼',
                    type: 'line',
                    data: PM10Data4,
                    areaStyle: {},
                },
                {
                    name: '三体',
                    type: 'line',
                    data: PM10Data5,
                    areaStyle: {},
                }
            ]
        };
        dataChart.setOption(temperatureDataOption);
        batteryChart.setOption(batteryDataOption);
        pollutionChart.setOption(pollutionPM25Option);
    }
};

var aqiData;
var aqidata1;
var aqidata2;
var aqidata3;
var aqidata4;
var aqidata5;
var aqidata6;
let xhr3 = new XMLHttpRequest();
xhr3.open('GET', '../test.php')
// xhr3.open('GET', 'http://www.pm25.in/api/querys/only_aqi.json?city=zibo&token=5j1znBVAsnSf5xQyNQyq');
xhr3.send(null);
xhr3.onreadystatechange = function () {
    if (xhr3.readyState == 4 && xhr3.status == 200) {
        console.log(JSON.parse(xhr3.response))
        aqiChart = echarts.init(document.getElementById('aqiChart'));
        aqiData = JSON.parse(xhr3.response);
        for (var i = 0; i < aqiData.length; i++) {
            if (aqiData[i].position_name == "人民公园") {
                aqidata1 = aqiData[i].aqi;
            }
            if (aqiData[i].position_name == "东风化工厂") {
                aqidata2 = aqiData[i].aqi;
            }
            if (aqiData[i].position_name == "双山") {
                aqidata3 = aqiData[i].aqi;
            }
            if (aqiData[i].position_name == "气象站") {
                aqidata4 = aqiData[i].aqi;
            }
            if (aqiData[i].position_name == "莆田园") {
                aqidata5 = aqiData[i].aqi;
            }
            if (aqiData[i].position_name == "三金集团") {
                aqidata6 = aqiData[i].aqi;
            }
        }

        aqiDataOption = {
            legend: {
                data: ['AQI'],
                textStyle: {
                    color: '#fff'
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['人民公园', '东风化工厂', '双山', '气象站', '莆田园', '三金集团'],
                axisLabel: {
                    color: '#fff',
                    fontSize: 8,
                }

            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    color: '#fff',
                    fontSize: 10,
                },
                min: 0,
                max: 100
            }],
            series: [{
                name: 'AQI',
                type: 'bar',
                data: [{
                        name: 'AQI',
                        value: aqidata1,
                        color: 'green'
                    },
                    {
                        name: 'AQI',
                        value: aqidata2,
                    },
                    {
                        name: 'AQI',
                        value: aqidata3
                    },
                    {
                        name: 'AQI',
                        value: aqidata4
                    },
                    {
                        name: 'AQI',
                        value: aqidata5
                    },
                    {
                        name: 'AQI',
                        value: aqidata6
                    }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        },
                        color: function (params) {
                            if (params.data.value > 0 && params.data.value <= 50) {
                                return 'green'
                            }
                            if (params.data.value > 50 && params.data.value <= 100) {
                                return 'yellow'
                            }
                            if (params.data.value > 100 && params.data.value <= 150) {
                                return 'orange'
                            }
                            if (params.data.value > 150 && params.data.value <= 200) {
                                return 'red'
                            }
                            if (params.data.value > 200 && params.data.value <= 300) {
                                return 'purple'
                            }
                            if (params.data.value > 300) {
                                return '#802A2A'
                            }
                            console.log(params);
                        },
                    }
                }

            }]
        };
        aqiChart.setOption(aqiDataOption);
    }
}
setInterval(() => {
    geocoder.getAddress(new AMap.LngLat(118.0017, 36.8102), function (status, result) {
        if (status === 'complete' && result.regeocode) {
            var address = result.regeocode.formattedAddress;
            document.getElementById('placeName').innerHTML = address;
            console.log(address);
            AMap.plugin('AMap.Weather', function () {
                //创建天气查询实例
                var weather = new AMap.Weather();
                //执行实时天气信息查询
                weather.getLive(result.regeocode.addressComponent.adcode, function (err, data) {
                    var str = [];
                    str.push(data.city + ' ');
                    str.push(data.weather + ' ');
                    str.push(data.temperature + '℃' + ' ');
                    str.push('风向：' + data.windDirection + ' ');
                    str.push('风力：' + data.windPower + ' 级');
                    document.getElementById('weather').innerHTML = '<div class="info" style="position:inherit;margin-bottom:0;">' + str.join('') + '</div><div class="sharp"></div>'
                });
                console.log('1')
            });
        } else {
            log.error('根据经纬度查询地址失败')
        }
    });
    let xhr = new XMLHttpRequest();
    var message = {};
    var timeX = [];
    var timeX1 = [];
    var timeX2 = [];
    var timeX3 = [];
    var timeX4 = [];
    var timeX5 = [];
    // device1
    var humidityData1 = [];
    var temperatureData1 = [];
    var PM25Data1 = [];
    var PM10Data1 = [];
    var voltageData1 = [];
    // device2
    var humidityData2 = [];
    var temperatureData2 = [];
    var PM25Data2 = [];
    var PM10Data2 = [];
    var voltageData2 = [];
    // device3
    var humidityData3 = [];
    var temperatureData3 = [];
    var PM25Data3 = [];
    var PM10Data3 = [];
    var voltageData3 = [];
    // device4
    var humidityData4 = [];
    var temperatureData4 = [];
    var PM25Data4 = [];
    var PM10Data4 = [];
    var voltageData4 = [];
    // device5
    var humidityData5 = [];
    var temperatureData5 = [];
    var PM25Data5 = [];
    var PM10Data5 = [];
    var voltageData5 = [];
    // battery
    var battery = [];
    // pollution status
    var best = 0;
    var good = 0;
    var little = 0;
    var middle = 0;
    var bad = 0;
    var worst = 0;
    var best1 = 0;
    var good1 = 0;
    var little1 = 0;
    var middle1 = 0;
    var bad1 = 0;
    var worst1 = 0;
    // time
    var startTime;
    var timeAxis = [];

    var timeAxis1 = [];
    var timeAxis2 = [];
    var timeAxis3 = [];
    var timeAxis4 = [];
    var timeAxis5 = [];

    // option
    var dataChart, batteryChart, aqiChart, temperatureDataOption, humidityDataOption, PM25DataOption, PM10DataOption;
    // var timestamp = Date.parse(new Date());
    // console.log(timestampToTime(timestamp));
    // for (var i = 0; i < 5; i++) {
    //     var timestamp1 = timestamp - 86400000;
    //     console.log(timestampToTime(timestamp1).toString());
    //     timeX.push(timestampToTime(timestamp1 + 21600000 * i).toString());
    //     console.log(timeX);
    // }
    xhr.open('GET', '../querydata.php');
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.response);
            message1 = JSON.parse(xhr.response.split("|")[0]);
            message2 = JSON.parse(xhr.response.split("|")[1]);
            console.log(message1)
            message3 = JSON.parse(xhr.response.split("|")[2]);
            message4 = JSON.parse(xhr.response.split("|")[3]);
            message5 = JSON.parse(xhr.response.split("|")[4]);
            // startTime = JSON.parse(xhr.response.split("|")[5]);
            // for (var i = 0; i < 5; i++) {
            //     timeX.push(timestampToTime(startTime + 21600000 * i));
            // }
            // device1
            for (var i = 0; i < message1.PropertyDataInfos.PropertyDataInfo.length; i++) {
                if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
                    for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        humidityData1.push(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j]);
                        timeX.pushNoRepeat(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                    }
                }
                if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
                    for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        temperatureData1.push(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                    }
                }
                if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
                    for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        PM25Data1.push(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                        best++;
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                        good++;
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                        little++;
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                        middle++;
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                        bad++;
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                        worst++;
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                        worst++;
                    }
                }
                if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
                    for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        PM10Data1.push(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                        best1++;
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                        good1++;
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                        little1++;
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                        middle1++;
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                        bad1++;
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                        worst1++;
                    }
                    if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                        worst1++;
                    }
                }
                if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
                    for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        voltageData1.pushNoRepeat((message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
                    }
                }
            }
            // device2
            for (var i = 0; i < message2.PropertyDataInfos.PropertyDataInfo.length; i++) {
                if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
                    for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        humidityData2.push(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                        timeX.pushNoRepeat(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                    }
                }
                if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
                    for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        temperatureData2.push(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                    }
                }
                if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
                    for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        PM25Data2.push(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                        best++;
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                        good++;
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                        little++;
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                        middle++;
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                        bad++;
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                        worst++;
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                        worst++;
                    }
                }
                if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
                    for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        PM10Data2.push(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                        best1++;
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                        good1++;
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                        little1++;
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                        middle1++;
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                        bad1++;
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                        worst1++;
                    }
                    if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                        worst1++;
                    }
                }
                if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
                    for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        voltageData2.pushNoRepeat((message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
                    }
                }
            }
            // device3
            for (var i = 0; i < message3.PropertyDataInfos.PropertyDataInfo.length; i++) {
                if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
                    for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        humidityData3.push(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                        timeX1.pushNoRepeat(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                    }
                }
                if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
                    for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        temperatureData3.push(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                        timeX2.pushNoRepeat(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                    }
                }
                if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
                    for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        PM25Data3.push(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                        timeX3.pushNoRepeat(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                        best++;
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                        good++;
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                        little++;
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                        middle++;
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                        bad++;
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                        worst++;
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                        worst++;
                    }
                }
                if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
                    for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        PM10Data3.push(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                        timeX4.pushNoRepeat(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                        best1++;
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                        good1++;
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                        little1++;
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                        middle1++;
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                        bad1++;
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                        worst1++;
                    }
                    if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                        worst1++;
                    }
                }
                if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
                    for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        voltageData3.pushNoRepeat((message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
                    }
                }
            }
            //device4
            for (var i = 0; i < message4.PropertyDataInfos.PropertyDataInfo.length; i++) {
                if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
                    for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        humidityData4.push(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                        timeX.pushNoRepeat(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                    }
                }
                if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
                    for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        temperatureData4.push(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                    }
                }
                if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
                    for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        PM25Data4.push(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                        best++;
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                        good++;
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                        little++;
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                        middle++;
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                        bad++;
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                        worst++;
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                        worst++;
                    }
                }
                if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
                    for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        PM10Data4.push(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                        best1++;
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                        good1++;
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                        little1++;
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                        middle1++;
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                        bad1++;
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                        worst1++;
                    }
                    if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                        worst1++;
                    }
                }
                if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
                    for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        voltageData4.pushNoRepeat((message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
                    }
                }
            }
            // device5
            for (var i = 0; i < message5.PropertyDataInfos.PropertyDataInfo.length; i++) {
                if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
                    for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        humidityData5.push(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
                        timeX.pushNoRepeat(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
                    }
                }
                if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
                    for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        temperatureData5.push(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                    }
                }
                if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
                    for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        PM25Data5.push(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                    }

                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                        best++;
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                        good++;
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                        little++;
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                        middle++;
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                        bad++;
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                        worst++;
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                        worst++;
                    }
                }
                if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
                    for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        PM10Data5.push(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
                        best1++;
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
                        good1++;
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
                        little1++;
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
                        middle1++;
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
                        bad1++;
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
                        worst1++;
                    }
                    if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
                        worst1++;
                    }
                }
                if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
                    for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
                        voltageData5.pushNoRepeat((message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
                    }
                }
            }
            // timeX.sort(sortNumber);
            // for (var i = 0; i < timeX.length; i++) {
            //     timeAxis.push(timestampToTime(timeX[i]));
            // }
            for (var i = 0; i < timeX1.length; i++) {
                timeAxis1.push(timestampToTime(timeX1[i]));
            }
            for (var i = 0; i < timeX2.length; i++) {
                timeAxis2.push(timestampToTime(timeX2[i]));
            }
            for (var i = 0; i < timeX3.length; i++) {
                timeAxis3.push(timestampToTime(timeX3[i]));
            }
            for (var i = 0; i < timeX4.length; i++) {
                timeAxis4.push(timestampToTime(timeX4[i]));
            }
            for (var i = 0; i < timeX5.length; i++) {
                timeAxis5.push(timestampToTime(timeX5[i]));
            }


            dataChart = echarts.init(document.getElementById('dataChart'));
            batteryChart = echarts.init(document.getElementById('batteryChart'));
            pollutionChart = echarts.init(document.getElementById('pollutionChart'));

            pollutionPM25Option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'right',
                    data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [{
                    name: '空气质量指数类别',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    top: 50,
                    left: 'left',
                    data: [{
                            value: best,
                            name: '优',
                            itemStyle: {
                                color: 'green'
                            }
                        },
                        {
                            value: good,
                            name: '良',
                            itemStyle: {
                                color: 'yellow'
                            }
                        },
                        {
                            value: little,
                            name: '轻度污染',
                            itemStyle: {
                                color: 'orange'
                            }
                        },
                        {
                            value: middle,
                            name: '中度污染',
                            itemStyle: {
                                color: 'red'
                            }
                        },
                        {
                            value: bad,
                            name: '重度污染',
                            itemStyle: {
                                color: 'purple'
                            }
                        },
                        {
                            value: worst,
                            name: '严重污染',
                            itemStyle: {
                                color: '#802A2A'
                            }
                        }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            };
            pollutionPM10Option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'horizontal',
                    left: 'right',
                    data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
                },
                series: [{
                    name: '空气质量指数类别',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [{
                            value: best1,
                            name: '优',
                            itemStyle: {
                                color: 'green'
                            }
                        },
                        {
                            value: good1,
                            name: '良',
                            itemStyle: {
                                color: 'yellow'
                            }
                        },
                        {
                            value: little1,
                            name: '轻度污染',
                            itemStyle: {
                                color: 'orange'
                            }
                        },
                        {
                            value: middle1,
                            name: '中度污染',
                            itemStyle: {
                                color: 'red'
                            }
                        },
                        {
                            value: bad1,
                            name: '重度污染',
                            itemStyle: {
                                color: 'purple'
                            }
                        },
                        {
                            value: worst1,
                            name: '严重污染',
                            itemStyle: {
                                color: '#802A2A'
                            }
                        }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            };
            batteryDataOption = {
                legend: {
                    data: ['剩余电量'],
                    textStyle: {
                        color: '#fff'
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
                    axisLabel: {
                        color: '#fff',
                        fontSize: 10,
                    }

                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        color: '#fff',
                        fontSize: 10,
                        formatter: '{value}%'
                    },
                    min: 0,
                    max: 100
                }],
                series: [{
                    name: '剩余电量',
                    type: 'bar',
                    data: [{
                            name: '剩余电量',
                            value: voltageData1[0],
                        },
                        {
                            name: '剩余电量',
                            value: voltageData2[0],
                        },
                        {
                            name: '剩余电量',
                            value: voltageData3[0],
                        },
                        {
                            name: '剩余电量',
                            value: voltageData4[0],
                        },
                        {
                            name: '剩余电量',
                            value: voltageData5[0],
                        }
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}%'
                            },
                            color: function (params) {
                                if (params.data.value > 0 && params.data.value <= 20) {
                                    return 'red'
                                }
                                if (params.data.value > 20 && params.data.value <= 80) {
                                    return 'yellow'
                                }
                                if (params.data.value > 80 && params.data.value <= 100) {
                                    return 'green'
                                }
                            },
                        }
                    }

                }]
            };
            temperatureDataOption = {
                legend: {
                    data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
                    textStyle: {
                        color: '#65c6e7'
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: [{
                    data: timeAxis1,
                    axisLabel: {
                        color: '#fff',
                        fontSize: 10
                    }
                }],
                yAxis: [{
                    type: 'value',
                    max: 45,
                    min: -30,
                    axisLabel: {
                        color: '#fff',
                        fontSize: 10,
                        formatter: '{value}℃'
                    }
                }],
                series: [{
                        name: '四体',
                        type: 'line',
                        data: temperatureData1,
                        areaStyle: {},
                    },
                    {
                        name: '大红炉',
                        type: 'line',
                        data: temperatureData2,
                        areaStyle: {},
                    },
                    {
                        name: '鸿远楼',
                        type: 'line',
                        data: temperatureData3,
                        areaStyle: {},
                    },
                    {
                        name: '机交楼',
                        type: 'line',
                        data: temperatureData4,
                        areaStyle: {},
                    },
                    {
                        name: '三体',
                        type: 'line',
                        data: temperatureData5,
                        areaStyle: {},
                    }
                ]
            };
            humidityDataOption = {
                legend: {
                    data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
                    textStyle: {
                        color: '#65c6e7'
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: [{
                    data: timeAxis2,
                    axisLabel: {
                        color: '#fff',
                        fontSize: 10
                    }
                }],
                yAxis: [{
                    type: 'value',
                    max: 100,
                    min: 0,
                    axisLabel: {
                        color: '#fff',
                        fontSize: 10,
                        formatter: '{value}%'
                    }
                }],
                series: [{
                        name: '四体',
                        type: 'line',
                        data: humidityData1,
                        areaStyle: {},
                    },
                    {
                        name: '大红炉',
                        type: 'line',
                        data: humidityData2,
                        areaStyle: {},
                    },
                    {
                        name: '鸿远楼',
                        type: 'line',
                        data: humidityData3,
                        areaStyle: {},
                    },
                    {
                        name: '机交楼',
                        type: 'line',
                        data: humidityData4,
                        areaStyle: {},
                    },
                    {
                        name: '三体',
                        type: 'line',
                        data: humidityData5,
                        areaStyle: {},

                    }
                ]
            };
            PM25DataOption = {
                legend: {
                    data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
                    textStyle: {
                        color: '#65c6e7'
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: [{
                    data: timeAxis3,
                    axisLabel: {
                        color: '#fff',
                        fontSize: 10
                    }
                }],
                yAxis: [{
                    type: 'value',
                    min: 0,
                    max: 500,
                    axisLabel: {
                        color: '#fff',
                        fontSize: 10,
                        formatter: '{value}'
                    }
                }],
                series: [{
                        name: '四体',
                        type: 'line',
                        data: PM25Data1,
                        areaStyle: {},

                    },
                    {
                        name: '大红炉',
                        type: 'line',
                        data: PM25Data2,
                        areaStyle: {},
                    },
                    {
                        name: '鸿远楼',
                        type: 'line',
                        data: PM25Data3,
                        areaStyle: {},
                    },
                    {
                        name: '机交楼',
                        type: 'line',
                        data: PM25Data4,
                        areaStyle: {},
                    },
                    {
                        name: '三体',
                        type: 'line',
                        data: PM25Data5,
                        areaStyle: {},
                    }
                ]
            };
            PM10DataOption = {
                legend: {
                    data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
                    textStyle: {
                        color: '#65c6e7'
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: [{
                    data: timeAxis4,
                    axisLabel: {
                        color: '#fff',
                        fontSize: 10
                    }
                }],
                yAxis: [{
                    type: 'value',
                    min: 0,
                    max: 500,
                    axisLabel: {
                        color: '#fff',
                        fontSize: 10,
                        formatter: '{value}'
                    }
                }],
                series: [{
                        name: '四体',
                        type: 'line',
                        data: PM10Data1,
                        areaStyle: {},
                    },
                    {
                        name: '大红炉',
                        type: 'line',
                        data: PM10Data2,
                        areaStyle: {},
                    },
                    {
                        name: '鸿远楼',
                        type: 'line',
                        data: PM10Data3,
                        areaStyle: {},
                    },
                    {
                        name: '机交楼',
                        type: 'line',
                        data: PM10Data4,
                        areaStyle: {},
                    },
                    {
                        name: '三体',
                        type: 'line',
                        data: PM10Data5,
                        areaStyle: {},
                    }
                ]
            };
            dataChart.setOption(temperatureDataOption);
            batteryChart.setOption(batteryDataOption);
            pollutionChart.setOption(pollutionPM25Option);
        }
    };

    var aqiData;
    var aqidata1;
    var aqidata2;
    var aqidata3;
    var aqidata4;
    var aqidata5;
    var aqidata6;
    let xhr3 = new XMLHttpRequest();
    xhr3.open('GET', '../test.php')
    // xhr3.open('GET', 'http://www.pm25.in/api/querys/only_aqi.json?city=zibo&token=5j1znBVAsnSf5xQyNQyq');
    xhr3.send(null);
    xhr3.onreadystatechange = function () {
        if (xhr3.readyState == 4 && xhr3.status == 200) {
            console.log(JSON.parse(xhr3.response))
            aqiChart = echarts.init(document.getElementById('aqiChart'));
            aqiData = JSON.parse(xhr3.response);
            for (var i = 0; i < aqiData.length; i++) {
                if (aqiData[i].position_name == "人民公园") {
                    aqidata1 = aqiData[i].aqi;
                }
                if (aqiData[i].position_name == "东风化工厂") {
                    aqidata2 = aqiData[i].aqi;
                }
                if (aqiData[i].position_name == "双山") {
                    aqidata3 = aqiData[i].aqi;
                }
                if (aqiData[i].position_name == "气象站") {
                    aqidata4 = aqiData[i].aqi;
                }
                if (aqiData[i].position_name == "莆田园") {
                    aqidata5 = aqiData[i].aqi;
                }
                if (aqiData[i].position_name == "三金集团") {
                    aqidata6 = aqiData[i].aqi;
                }
            }

            aqiDataOption = {
                legend: {
                    data: ['AQI'],
                    textStyle: {
                        color: '#fff'
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['人民公园', '东风化工厂', '双山', '气象站', '莆田园', '三金集团'],
                    axisLabel: {
                        color: '#fff',
                        fontSize: 8,
                    }

                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        color: '#fff',
                        fontSize: 10,
                    },
                    min: 0,
                    max: 100
                }],
                series: [{
                    name: 'AQI',
                    type: 'bar',
                    data: [{
                            name: 'AQI',
                            value: aqidata1,
                            color: 'green'
                        },
                        {
                            name: 'AQI',
                            value: aqidata2,
                        },
                        {
                            name: 'AQI',
                            value: aqidata3
                        },
                        {
                            name: 'AQI',
                            value: aqidata4
                        },
                        {
                            name: 'AQI',
                            value: aqidata5
                        },
                        {
                            name: 'AQI',
                            value: aqidata6
                        }
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'
                            },
                            color: function (params) {
                                if (params.data.value > 0 && params.data.value <= 50) {
                                    return 'green'
                                }
                                if (params.data.value > 50 && params.data.value <= 100) {
                                    return 'yellow'
                                }
                                if (params.data.value > 100 && params.data.value <= 150) {
                                    return 'orange'
                                }
                                if (params.data.value > 150 && params.data.value <= 200) {
                                    return 'red'
                                }
                                if (params.data.value > 200 && params.data.value <= 300) {
                                    return 'purple'
                                }
                                if (params.data.value > 300) {
                                    return '#802A2A'
                                }
                                console.log(params);
                            },
                        }
                    }

                }]
            };
            aqiChart.setOption(aqiDataOption);
        }
    }
    // let xhr = new XMLHttpRequest();
    // var message = {};
    // var timeX1 = [];
    // var timeX2 = [];
    // var timeX3 = [];
    // var timeX4 = [];
    // var timeX5 = [];

    // ''
    // // device1
    // var humidityData1 = [];
    // var temperatureData1 = [];
    // var PM25Data1 = [];
    // var PM10Data1 = [];
    // var voltageData1 = [];
    // // device2
    // var humidityData2 = [];
    // var temperatureData2 = [];
    // var PM25Data2 = [];
    // var PM10Data2 = [];
    // var voltageData2 = [];
    // // device3
    // var humidityData3 = [];
    // var temperatureData3 = [];
    // var PM25Data3 = [];
    // var PM10Data3 = [];
    // var voltageData3 = [];
    // // device4
    // var humidityData4 = [];
    // var temperatureData4 = [];
    // var PM25Data4 = [];
    // var PM10Data4 = [];
    // var voltageData4 = [];
    // // device5
    // var humidityData5 = [];
    // var temperatureData5 = [];
    // var PM25Data5 = [];
    // var PM10Data5 = [];
    // var voltageData5 = [];
    // // battery
    // var battery = [];
    // // pollution status
    // var best = 0;
    // var good = 0;
    // var little = 0;
    // var middle = 0;
    // var bad = 0;
    // var worst = 0;
    // var best1 = 0;
    // var good1 = 0;
    // var little1 = 0;
    // var middle1 = 0;
    // var bad1 = 0;
    // var worst1 = 0;
    // // option
    // var dataChart, temperatureDataOption, humidityDataOption, PM25DataOption, PM10DataOption;
    // // time
    // var startTime;
    // var timeAxis = [];
    // var timeAxis1, timeAxis2, timeAxis3, timeAxis4, timeAxis5;
    // //21600000
    // // var timestamp = Date.parse(new Date());
    // // console.log(timestampToTime(timestamp));
    // // for (var i = 0; i < 5; i++) {
    // //     var timestamp1 = timestamp - 86400000;
    // //     console.log(timestampToTime(timestamp1).toString());
    // //     timeX.push(timestampToTime(timestamp1 + 21600000 * i).toString());
    // //     console.log(timeX);
    // // }
    // xhr.open('GET', '../querydata.php');
    // xhr.send(null);
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         console.log(xhr.response);
    //         message1 = JSON.parse(xhr.response.split("|")[0]);
    //         message2 = JSON.parse(xhr.response.split("|")[1]);
    //         console.log(message1)
    //         message3 = JSON.parse(xhr.response.split("|")[2]);
    //         message4 = JSON.parse(xhr.response.split("|")[3]);
    //         message5 = JSON.parse(xhr.response.split("|")[4]);
    //         // time 
    //         // startTime = JSON.parse(xhr.response.split("|")[5]);
    //         // for (var i = 0; i < 5; i++) {
    //         //     timeX.push(timestampToTime(startTime + 21600000 * i));
    //         // }
    //         console.log(startTime);
    //         // device1
    //         for (var i = 0; i < message1.PropertyDataInfos.PropertyDataInfo.length; i++) {
    //             if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
    //                 for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     humidityData1.push(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j]);
    //                 }
    //             }
    //             if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
    //                 for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     temperatureData1.push(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
    //                 }
    //             }
    //             if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
    //                 for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     PM25Data1.push(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
    //                     best++;
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
    //                     good++;
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
    //                     little++;
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
    //                     middle++;
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
    //                     bad++;
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
    //                     worst++;
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
    //                     worst++;
    //                 }
    //             }
    //             if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
    //                 for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     PM10Data1.push(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
    //                     best1++;
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
    //                     good1++;
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
    //                     little1++;
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
    //                     middle1++;
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
    //                     bad1++;
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
    //                     worst1++;
    //                 }
    //                 if (parseInt(message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
    //                     worst1++;
    //                 }
    //             }
    //             if (message1.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
    //                 for (var j = 0; j < message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     voltageData1.pushNoRepeat((message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message1.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
    //                 }
    //             }
    //         }
    //         // device2
    //         for (var i = 0; i < message2.PropertyDataInfos.PropertyDataInfo.length; i++) {
    //             if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
    //                 for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     humidityData2.push(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
    //                     timeX.pushNoRepeat(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
    //                 }
    //             }
    //             if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
    //                 for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     temperatureData2.push(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
    //                 }
    //             }
    //             if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
    //                 for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     PM25Data2.push(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
    //                     best++;
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
    //                     good++;
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
    //                     little++;
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
    //                     middle++;
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
    //                     bad++;
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
    //                     worst++;
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
    //                     worst++;
    //                 }
    //             }
    //             if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
    //                 for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     PM10Data2.push(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
    //                     best1++;
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
    //                     good1++;
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
    //                     little1++;
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
    //                     middle1++;
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
    //                     bad1++;
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
    //                     worst1++;
    //                 }
    //                 if (parseInt(message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
    //                     worst1++;
    //                 }
    //             }
    //             if (message2.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
    //                 for (var j = 0; j < message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     voltageData2.pushNoRepeat((message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message2.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
    //                 }
    //             }
    //         }
    //         // device3
    //         for (var i = 0; i < message3.PropertyDataInfos.PropertyDataInfo.length; i++) {
    //             if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
    //                 for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     humidityData3.push(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
    //                     timeX1.pushNoRepeat(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
    //                 }
    //             }
    //             if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
    //                 for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     temperatureData3.push(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
    //                     timeX2.pushNoRepeat(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
    //                 }
    //             }
    //             if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
    //                 for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     PM25Data3.push(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
    //                     timeX3.pushNoRepeat(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
    //                     best++;
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
    //                     good++;
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
    //                     little++;
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
    //                     middle++;
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
    //                     bad++;
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
    //                     worst++;
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
    //                     worst++;
    //                 }
    //             }
    //             if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
    //                 for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     PM10Data3.push(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
    //                     timeX4.pushNoRepeat(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
    //                     best1++;
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
    //                     good1++;
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
    //                     little1++;
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
    //                     middle1++;
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
    //                     bad1++;
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
    //                     worst1++;
    //                 }
    //                 if (parseInt(message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
    //                     worst1++;
    //                 }
    //             }
    //             if (message3.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
    //                 for (var j = 0; j < message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     voltageData3.pushNoRepeat((message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message3.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
    //                 }
    //             }
    //         }
    //         //device4
    //         for (var i = 0; i < message4.PropertyDataInfos.PropertyDataInfo.length; i++) {
    //             if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
    //                 for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     humidityData4.push(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
    //                     timeX.pushNoRepeat(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
    //                 }
    //             }
    //             if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
    //                 for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     temperatureData4.push(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
    //                 }
    //             }
    //             if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
    //                 for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     PM25Data4.push(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
    //                     best++;
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
    //                     good++;
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
    //                     little++;
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
    //                     middle++;
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
    //                     bad++;
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
    //                     worst++;
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
    //                     worst++;
    //                 }
    //             }
    //             if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
    //                 for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     PM10Data4.push(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
    //                     best1++;
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
    //                     good1++;
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
    //                     little1++;
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
    //                     middle1++;
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
    //                     bad1++;
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
    //                     worst1++;
    //                 }
    //                 if (parseInt(message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
    //                     worst1++;
    //                 }
    //             }
    //             if (message4.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
    //                 for (var j = 0; j < message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     voltageData4.pushNoRepeat((message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message4.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
    //                 }
    //             }
    //         }
    //         // device5
    //         for (var i = 0; i < message5.PropertyDataInfos.PropertyDataInfo.length; i++) {
    //             if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Humidity") {
    //                 for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     humidityData5.push(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value);
    //                     timeX.pushNoRepeat(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Time)
    //                 }
    //             }
    //             if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Temperature") {
    //                 for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     temperatureData5.push(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
    //                 }
    //             }
    //             if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm2_5") {
    //                 for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     PM25Data5.push(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)

    //                 }

    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
    //                     best++;
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
    //                     good++;
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
    //                     little++;
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
    //                     middle++;
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
    //                     bad++;
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
    //                     worst++;
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
    //                     worst++;
    //                 }
    //             }
    //             if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "Pm10") {
    //                 for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     PM10Data5.push(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[j].Value)
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 35) {
    //                     best1++;
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 35 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 75) {
    //                     good1++;
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 75 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 115) {
    //                     little1++;
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 115 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 150) {
    //                     middle1++;
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 150 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 250) {
    //                     bad1++;
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 250 && parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) <= 500) {
    //                     worst1++;
    //                 }
    //                 if (parseInt(message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value) > 500) {
    //                     worst1++;
    //                 }
    //             }
    //             if (message5.PropertyDataInfos.PropertyDataInfo[i].Identifier == "voltage") {
    //                 for (var j = 0; j < message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length; j++) {
    //                     voltageData5.pushNoRepeat((message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo[message5.PropertyDataInfos.PropertyDataInfo[i].List.PropertyInfo.length - 1].Value / 4.2).toFixed(2));
    //                 }
    //             }
    //         }
    //         timeX.sort(sortNumber);
    //         for (var i = 0; i < timeX.length; i++) {
    //             timeAxis.push(timestampToTime(timeX[i]));
    //         }
    //         dataChart = echarts.init(document.getElementById('dataChart'));
    //         batteryChart = echarts.init(document.getElementById('batteryChart'));
    //         pollutionChart = echarts.init(document.getElementById('pollutionChart'));
    //         pullutionChart = echarts.init(document.getElementById('pollutionChart'));
    //         pollutionPM25Option = {
    //             tooltip: {
    //                 trigger: 'item',
    //                 formatter: '{a} <br/>{b} : {c} ({d}%)'
    //             },
    //             legend: {
    //                 orient: 'vertical',
    //                 left: 'right',
    //                 data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染'],
    //                 textStyle: {
    //                     color: '#fff'
    //                 }
    //             },
    //             series: [{
    //                 name: '空气质量指数类别',
    //                 type: 'pie',
    //                 radius: '55%',
    //                 center: ['50%', '60%'],
    //                 top: 50,
    //                 left: 'left',
    //                 data: [{
    //                         value: best1,
    //                         name: '优',
    //                         itemStyle: {
    //                             color: 'green'
    //                         }
    //                     },
    //                     {
    //                         value: good1,
    //                         name: '良',
    //                         itemStyle: {
    //                             color: 'yellow'
    //                         }
    //                     },
    //                     {
    //                         value: little1,
    //                         name: '轻度污染',
    //                         itemStyle: {
    //                             color: 'orange'
    //                         }
    //                     },
    //                     {
    //                         value: middle1,
    //                         name: '中度污染',
    //                         itemStyle: {
    //                             color: 'red'
    //                         }
    //                     },
    //                     {
    //                         value: bad1,
    //                         name: '重度污染',
    //                         itemStyle: {
    //                             color: 'purple'
    //                         }
    //                     },
    //                     {
    //                         value: worst1,
    //                         name: '严重污染',
    //                         itemStyle: {
    //                             color: '#802A2A'
    //                         }
    //                     }
    //                 ],
    //                 emphasis: {
    //                     itemStyle: {
    //                         shadowBlur: 10,
    //                         shadowOffsetX: 0,
    //                         shadowColor: 'rgba(0, 0, 0, 0.5)'
    //                     }
    //                 }
    //             }]
    //         };
    //         pollutionPM10Option = {
    //             tooltip: {
    //                 trigger: 'item',
    //                 formatter: '{a} <br/>{b} : {c} ({d}%)'
    //             },
    //             legend: {
    //                 orient: 'horizontal',
    //                 left: 'right',
    //                 data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
    //             },
    //             series: [{
    //                 name: '空气质量指数类别',
    //                 type: 'pie',
    //                 radius: '55%',
    //                 center: ['50%', '60%'],
    //                 data: [{
    //                         value: best,
    //                         name: '优',
    //                         itemStyle: {
    //                             color: 'green'
    //                         }
    //                     },
    //                     {
    //                         value: good,
    //                         name: '良',
    //                         itemStyle: {
    //                             color: 'yellow'
    //                         }
    //                     },
    //                     {
    //                         value: little,
    //                         name: '轻度污染',
    //                         itemStyle: {
    //                             color: 'orange'
    //                         }
    //                     },
    //                     {
    //                         value: middle,
    //                         name: '中度污染',
    //                         itemStyle: {
    //                             color: 'red'
    //                         }
    //                     },
    //                     {
    //                         value: bad,
    //                         name: '重度污染',
    //                         itemStyle: {
    //                             color: 'purple'
    //                         }
    //                     },
    //                     {
    //                         value: worst,
    //                         name: '严重污染',
    //                         itemStyle: {
    //                             color: '#802A2A'
    //                         }
    //                     }
    //                 ],
    //                 emphasis: {
    //                     itemStyle: {
    //                         shadowBlur: 10,
    //                         shadowOffsetX: 0,
    //                         shadowColor: 'rgba(0, 0, 0, 0.5)'
    //                     }
    //                 }
    //             }]
    //         };
    //         batteryDataOption = {
    //             legend: {
    //                 data: ['剩余电量'],
    //                 textStyle: {
    //                     color: '#65c6e7'
    //                 },
    //             },
    //             tooltip: {
    //                 trigger: 'axis',
    //                 axisPointer: {
    //                     type: 'shadow'
    //                 }
    //             },
    //             grid: {
    //                 left: '3%',
    //                 right: '4%',
    //                 bottom: '3%',
    //                 containLabel: true
    //             },
    //             xAxis: [{
    //                 type: 'category',
    //                 data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
    //                 axisLabel: {
    //                     color: '#fff',
    //                     fontSize: 10,
    //                 }

    //             }],
    //             yAxis: [{
    //                 type: 'value',
    //                 axisLabel: {
    //                     color: '#fff',
    //                     fontSize: 10,
    //                     formatter: '{value}%'
    //                 },
    //                 min: 0,
    //                 max: 100
    //             }],
    //             series: [{
    //                 name: '剩余电量',
    //                 type: 'bar',
    //                 data: [{
    //                         name: '剩余电量',
    //                         value: voltageData1[0],
    //                     },
    //                     {
    //                         name: '剩余电量',
    //                         value: voltageData2[0],
    //                     },
    //                     {
    //                         name: '剩余电量',
    //                         value: voltageData3[0],
    //                     },
    //                     {
    //                         name: '剩余电量',
    //                         value: voltageData4[0],
    //                     },
    //                     {
    //                         name: '剩余电量',
    //                         value: voltageData5[0],
    //                     }
    //                 ],
    //                 itemStyle: {
    //                     normal: {
    //                         label: {
    //                             show: true,
    //                             position: 'top',
    //                             formatter: '{c}%'
    //                         }
    //                     }
    //                 }

    //             }]
    //         };
    //         temperatureDataOption = {
    //             legend: {
    //                 data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
    //                 textStyle: {
    //                     color: '#65c6e7'
    //                 },
    //             },
    //             tooltip: {
    //                 trigger: 'axis',
    //                 axisPointer: {
    //                     type: 'cross',
    //                     label: {
    //                         backgroundColor: '#6a7985'
    //                     }
    //                 }
    //             },
    //             xAxis: [{
    //                 data: timeAxis,
    //                 axisLabel: {
    //                     color: '#fff',
    //                     fontSize: 10
    //                 }
    //             }],
    //             yAxis: [{
    //                 type: 'value',
    //                 max: 45,
    //                 min: -30,
    //                 axisLabel: {
    //                     color: '#fff',
    //                     fontSize: 10,
    //                     formatter: '{value}℃'
    //                 }
    //             }],
    //             series: [{
    //                     name: '四体',
    //                     type: 'line',
    //                     data: temperatureData1,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '大红炉',
    //                     type: 'line',
    //                     data: temperatureData2,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '鸿远楼',
    //                     type: 'line',
    //                     data: temperatureData3,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '机交楼',
    //                     type: 'line',
    //                     data: temperatureData4,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '三体',
    //                     type: 'line',
    //                     data: temperatureData5,
    //                     areaStyle: {},
    //                 }
    //             ]
    //         };
    //         humidityDataOption = {
    //             legend: {
    //                 data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
    //                 textStyle: {
    //                     color: '#65c6e7'
    //                 },
    //             },
    //             tooltip: {
    //                 trigger: 'axis',
    //                 axisPointer: {
    //                     type: 'cross',
    //                     label: {
    //                         backgroundColor: '#6a7985'
    //                     }
    //                 }
    //             },
    //             xAxis: [{
    //                 data: timeAxis,
    //                 axisLabel: {
    //                     color: '#fff',
    //                     fontSize: 10
    //                 }
    //             }],
    //             yAxis: [{
    //                 type: 'value',
    //                 max: 100,
    //                 min: 0,
    //                 axisLabel: {
    //                     color: '#fff',
    //                     fontSize: 10,
    //                     formatter: '{value}%'
    //                 }
    //             }],
    //             series: [{
    //                     name: '四体',
    //                     type: 'line',
    //                     data: humidityData1,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '大红炉',
    //                     type: 'line',
    //                     data: humidityData2,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '鸿远楼',
    //                     type: 'line',
    //                     data: humidityData3,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '机交楼',
    //                     type: 'line',
    //                     data: humidityData4,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '三体',
    //                     type: 'line',
    //                     data: humidityData5,
    //                     areaStyle: {},

    //                 }
    //             ]
    //         };
    //         PM25DataOption = {
    //             legend: {
    //                 data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
    //                 textStyle: {
    //                     color: '#65c6e7'
    //                 },
    //             },
    //             tooltip: {
    //                 trigger: 'axis',
    //                 axisPointer: {
    //                     type: 'cross',
    //                     label: {
    //                         backgroundColor: '#6a7985'
    //                     }
    //                 }
    //             },
    //             xAxis: [{
    //                 data: timeAxis,
    //                 axisLabel: {
    //                     color: '#fff',
    //                     fontSize: 10
    //                 }
    //             }],
    //             yAxis: [{
    //                 type: 'value',
    //                 min: 0,
    //                 max: 500,
    //                 axisLabel: {
    //                     color: '#fff',
    //                     fontSize: 10,
    //                     formatter: '{value}'
    //                 }
    //             }],
    //             series: [{
    //                     name: '四体',
    //                     type: 'line',
    //                     data: PM25Data1,
    //                     areaStyle: {},

    //                 },
    //                 {
    //                     name: '大红炉',
    //                     type: 'line',
    //                     data: PM25Data2,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '鸿远楼',
    //                     type: 'line',
    //                     data: PM25Data3,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '机交楼',
    //                     type: 'line',
    //                     data: PM25Data4,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '三体',
    //                     type: 'line',
    //                     data: PM25Data5,
    //                     areaStyle: {},
    //                 }
    //             ]
    //         };
    //         PM10DataOption = {
    //             legend: {
    //                 data: ['四体', '大红炉', '鸿远楼', '机交楼', '三体'],
    //                 textStyle: {
    //                     color: '#65c6e7'
    //                 },
    //             },
    //             tooltip: {
    //                 trigger: 'axis',
    //                 axisPointer: {
    //                     type: 'cross',
    //                     label: {
    //                         backgroundColor: '#6a7985'
    //                     }
    //                 }
    //             },
    //             xAxis: [{
    //                 data: timeAxis,
    //                 axisLabel: {
    //                     color: '#fff',
    //                     fontSize: 10
    //                 }
    //             }],
    //             yAxis: [{
    //                 type: 'value',
    //                 min: 0,
    //                 max: 500,
    //                 axisLabel: {
    //                     color: '#fff',
    //                     fontSize: 10,
    //                     formatter: '{value}'
    //                 }
    //             }],
    //             series: [{
    //                     name: '四体',
    //                     type: 'line',
    //                     data: PM10Data1,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '大红炉',
    //                     type: 'line',
    //                     data: PM10Data2,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '鸿远楼',
    //                     type: 'line',
    //                     data: PM10Data3,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '机交楼',
    //                     type: 'line',
    //                     data: PM10Data4,
    //                     areaStyle: {},
    //                 },
    //                 {
    //                     name: '三体',
    //                     type: 'line',
    //                     data: PM10Data5,
    //                     areaStyle: {},
    //                 }
    //             ]
    //         };
    //         console.log(0);
    //         dataChart.setOption(temperatureDataOption);
    //         batteryChart.setOption(batteryDataOption);
    //         pullutionChart.setOption(pollutionPM25Option);
    //         console.log('十分钟后');
    //     }
    // };
}, 600000);

// document.getElementsByName('layer').setAttribute('onchange', 'layerswitch()');

// function layerswitch() {
//     if (document.getElementsByName('layer').value = "darkblue") {
//         map.setMapStyle('amap://styles/darkblue');
//     }
//     if (document.getElementsByName('layer').value = "blue") {
//         map.setMapStyle('amap://styles/blue');
//     }

// }
$('input:radio[name="layer"]').change(function () {
    if (this.value == "darkblue") {
        map.setMapStyle('amap://styles/darkblue');
    }
    if (this.value == "blue") {
        map.setMapStyle('amap://styles/blue');
    }
});


function sortNumber(a, b) {
    return a - b
}

function timestampToTime(timestamp) {
    var date = new Date(timestamp);
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes();
    s = date.getSeconds();
    return M + D + h + m;
}

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}