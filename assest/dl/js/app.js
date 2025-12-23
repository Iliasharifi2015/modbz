function comment(){
intent = new Intent(Intent.ACTION_EDIT); 
intent.setData(Uri.parse("bazaar://details?id=" + "مود بازار")); 
intent.setPackage("com.farsitel.bazaar"); 
startActivity(intent); 
}

if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
        if(permission === "granted"){
            console.log("notification turned on.");
        } else {
            console.log("no notification primition.");
        }
    });
} else {
    console.log("this browser doesn't support notifications.");
}

function sendNotification() {
    if (Notification.permission === "granted") {
        new Notification("!ســـلام به جمـع مود بــازار خوش اومـدی", {
            body: "!حتما همین الان کلی از مود‌ها و اسکین و... رو تست کن",
            icon: "https://appsgeyser.io/geticon.php?widget=%D9%85%D9%88%D8%AF%20%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1_19356498&width=512"
        });

        const audio = new Audio("https://proxy.notificationsounds.com/message-tones/achievement-message-tone/download/file-sounds-1213-achievement.mp3");
        audio.play();


        notification.onclick = () => { شروع
    window.open("https://iliasharifi2015.github.io/app.html", "_blank");
};

    }
}


setTimeout(() => {
    sendNotification();
}, 10000);
