const patientdata=[
    {
        "fullname": "Sara Norman",
        "id": "5344-9709",
        "docname": "Dr. Jason Rosenberg",
        "docnumber": "579-0432",
        "lowgluc": "< 80",
        "normgluc": "80-140",
        "highgluc": "> 140"
    },
    {
        "fullname": "Gregg Norman",
        "id": "1275-4307",
        "docname": "Dr. Nikhil Singh",
        "docnumber": "334-2309",
        "lowgluc": "< 70",
        "normgluc": "70-120",
        "highgluc": "> 120"
    }
]

document.addEventListener('DOMContentLoaded', function() {

    var loginnames = document.getElementById('loginformmain');
    for (let i = 0; i<patientdata.length;i++){
        let patientName = patientdata[i].fullname;
        let option = document.createElement('option');
        option.value = i;
        option.textContent = patientName;
        loginnames.appendChild(option);
    }

    document.getElementById('loginform').addEventListener('submit', function(event) {
        event.preventDefault();
        var selectIndex = document.getElementById('loginformmain')
        var index = selectIndex.value;
        if(index == '-1'){
            alert("Please select a patient");
            return;
        }else{
            window.location.href = 'userMonitor.html?patientIndex=' + Number(index);
        }
    

    });
});
