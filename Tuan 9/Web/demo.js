
//--------------------------------------------
// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9NmFXaof8iRGuEPQTNeQhJnnyp0Aee6c",
    authDomain: "iot-e11b3.firebaseapp.com",
    databaseURL: "https://iot-e11b3-default-rtdb.firebaseio.com",
    projectId: "iot-e11b3",
    storageBucket: "iot-e11b3.appspot.com",
    messagingSenderId: "354306554350",
    appId: "1:354306554350:web:0477a295bfa3247cbff6ff",
    measurementId: "G-2HEKFPWT9K"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();


//room1
var btnOn = document.getElementById("btnOnId_01");
var btnOff = document.getElementById("btnOffId_01");
var btnOn_2 = document.getElementById("btnOnId_02");
var btnOff_2 = document.getElementById("btnOffId_02");
var btnOn_3 = document.getElementById("btnOnId_03");
var btnOff_3 = document.getElementById("btnOffId_03");
//room2
var btnOn4 = document.getElementById("btnOnId_04");
var btnOff4 = document.getElementById("btnOffId_04");
var btnOn_5 = document.getElementById("btnOnId_05");
var btnOff_5 = document.getElementById("btnOffId_05");
var btnOn_6 = document.getElementById("btnOnId_06");
var btnOff_6 = document.getElementById("btnOffId_06");

//   btn on----------------------------------------------------
btnOn.onclick = function () {
    database.ref("/ROOM01").update({       // hàm update dùng để cập nhật trạng thái
        "led01": "1"
    });
}
btnOff.onclick = function () {
    database.ref("/ROOM01").update({
        "led01": "0"
    });
}
// ----------------------------
btnOn_2.onclick = function () {
    database.ref("/ROOM01").update({
        "led02": "1"
    });
}
btnOff_2.onclick = function () {
    database.ref("/ROOM01").update({
        "led02": "0"
    });
}
// ---------------------------------------
btnOn_3.onclick = function () {
    database.ref("/ROOM01").update({
        "led03": "1"

    });
}
btnOff_3.onclick = function () {
    database.ref("/ROOM01").update({
        "led03": "0"
    });
}
//  room2/////////////////////
btnOn4.onclick = function () {
    database.ref("/ROOM02").update({
        "led01": "1"
    });
}
btnOff4.onclick = function () {
    database.ref("/ROOM02").update({
        "led01": "0"
    });
}
// ----------------------------
btnOn_5.onclick = function () {
    database.ref("/ROOM02").update({
        "led02": "1"
    });
}
btnOff_5.onclick = function () {
    database.ref("/ROOM02").update({
        "led02": "0"
    });
}
// ---------------------------------------
btnOn_6.onclick = function () {
    database.ref("/ROOM02").update({
        "led03": "1"
    });
}
btnOff_6.onclick = function () {
    database.ref("/ROOM02").update({
        "led03": "0"
    });
}


//get Temp from Firebase (auto update when data changes)-------------
// exists() kiểm tra hàm có tồn tại hay không


database.ref("/ROOM01/temp").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var temp = snapshot.val();
        document.getElementById("nhietdo").innerHTML = temp;
    }
    else
        console.log("No data available!")
});
database.ref("/ROOM01/humi").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var humi = snapshot.val();
        document.getElementById("doam").innerHTML = humi;
    }
    else
        console.log("No data available!")
});
//auto update ImgDen
database.ref("/ROOM01/led01").on("value", function (snapshot) {
    if (snapshot.exists()) {
        let led01 = snapshot.val();
        if (led01 == 1)
            document.getElementById("denId_01").src = "./img/light_bulb.png";
        else
            document.getElementById("denId_01").src = "./img/light_bulb_off.png"
    } else
        console.log("No data available!")
});
database.ref("/ROOM01/led02").on("value", function (snapshot) {
    if (snapshot.exists()) {
        let led02 = snapshot.val();
        if (led02 == 1)
            document.getElementById("denId_02").src = "./img/light_bulb.png";
        else
            document.getElementById("denId_02").src = "./img/light_bulb_off.png"
    } else
        console.log("No data available!")
});
database.ref("/ROOM01/led03").on("value", function (snapshot) {
    if (snapshot.exists()) {
        let led03 = snapshot.val();
        if (led03 == 1)
            document.getElementById("denId_03").src = "./img/light_bulb.png";
        else
            document.getElementById("denId_03").src = "./img/light_bulb_off.png"
    } else
        console.log("No data available!")
});

//test: get once.
database.ref("/ROOM01").get().then((snapshot) => {
    if (snapshot.exists())
        console.log(snapshot.val())
    else
        console.log("no data available!")
})
// ////////////////////////////////////////////////////////////////
database.ref("/ROOM02/temp").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var temp = snapshot.val();
        document.getElementById("nhietdo1").innerHTML = temp;
    }
    else
        console.log("No data available!")
});
database.ref("/ROOM02/humi").on("value", function (snapshot) {
    if (snapshot.exists()) {
        var humi = snapshot.val();
        document.getElementById("doam1").innerHTML = humi;
    }
    else
        console.log("No data available!")
});
//auto update ImgDen
database.ref("/ROOM02/led01").on("value", function (snapshot) {
    if (snapshot.exists()) {
        let led01 = snapshot.val();
        if (led01 == 1)
            document.getElementById("denId_04").src = "./img/light_bulb.png";
        else
            document.getElementById("denId_04").src = "./img/light_bulb_off.png"
    } else
        console.log("No data available!")
});
database.ref("/ROOM02/led02").on("value", function (snapshot) {
    if (snapshot.exists()) {
        let led02 = snapshot.val();
        if (led02 == 1)
            document.getElementById("denId_05").src = "./img/light_bulb.png";
        else
            document.getElementById("denId_05").src = "./img/light_bulb_off.png"
    } else
        console.log("No data available!")
});
database.ref("/ROOM02/led03").on("value", function (snapshot) {
    if (snapshot.exists()) {
        let led03 = snapshot.val();
        if (led03 == 1)
            document.getElementById("denId_06").src = "./img/light_bulb.png";
        else
            document.getElementById("denId_06").src = "./img/light_bulb_off.png"
    } else
        console.log("No data available!")
});

//test: get once.
database.ref("/ROOM02").get().then((snapshot) => {
    if (snapshot.exists())
        console.log(snapshot.val())
    else
        console.log("no data available!")
})