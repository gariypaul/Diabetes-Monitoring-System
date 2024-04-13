
const patientdata=[
    {
        "fullname": "Sara Norman",
        "id": "5344-9709",
        "docname": "Dr. Jason Rosenberg",
        "docnumber": "579-0432",
        "lowgluc": 80,
        "normgluc": "80-140",
        "highgluc": 140
    },
    {
        "fullname": "Gregg Norman",
        "id": "1275-4307",
        "docname": "Dr. Nikhil Singh",
        "docnumber": "334-2309",
        "lowgluc": 70,
        "normgluc": "70-120",
        "highgluc": 120
    }
]
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const patientIndex = Number(params.get('patientIndex'));
    const lowgluc = patientdata[patientIndex].lowgluc;
    const highgluc = patientdata[patientIndex].highgluc;

    var patientName = document.getElementById('patientName');
    var patientId = document.getElementById('patientId');
    var docName = document.getElementById('docName');
    var docNumber = document.getElementById('docNumber');
    

   
    patientName.innerHTML = patientdata[patientIndex].fullname;
    patientId.innerHTML = patientdata[patientIndex].id;
    docName.innerHTML = patientdata[patientIndex].docname;
    docNumber.innerHTML = patientdata[patientIndex].docnumber;
    

    



    var myModal = new bootstrap.Modal(document.getElementById('bloodSugarCheck'), {
        keyboard: false
    });
    myModal.show();

     document.getElementById('noButton').addEventListener('click', function() {
        document.getElementById('bloodSugarform').style.display = 'block';
        document.getElementById('noButton').style.display = 'none';
        document.getElementById('yesButton').style.display = 'none';
    });

    document.getElementById('yesButton').addEventListener('click', function() {
        myModal.hide();
    });

    document.getElementById('bloodSugarform').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var bloodSugar = document.getElementById('bloodSugar').value;
        if (bloodSugar !=='' && Number(bloodSugar) >=0 && Number(bloodSugar) <= 999) {
            myModal.hide();
            if (Number(bloodSugar)<lowgluc){
                document.getElementById('low-reading').style.display = 'block';
                document.getElementById('glucoseLevel-low').innerHTML = bloodSugar + " mg/dL";
            }else if(Number(bloodSugar)>highgluc){
                document.getElementById('high-reading').style.display = 'block';
                document.getElementById('glucoseLevel-high').innerHTML = bloodSugar + " mg/dL";
                document.getElementById('docNameh').innerHTML = patientdata[patientIndex].docname;
                document.getElementById('docNumberh').innerHTML = patientdata[patientIndex].docnumber;
            }else{
                document.getElementById('normal-reading').style.display = 'block';
                document.getElementById('glucoseLevel-normal').innerHTML = bloodSugar + " mg/dL";

            }
        } else {
            document.getElementById('bloodSugarError').innerHTML = 'Please enter a valid blood sugar value (Value between 0-999)';
        }
    });

    document.getElementById('ketoneform').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('ketoneform').style.display = 'none';
        var explanation = document.getElementById('explain').value;
        var ketone = document.getElementById('ketone').value;
    });

    document.getElementById('explainlowform').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('explainlowform').style.display = 'none';
        var explainlow = document.getElementById('explainlow').value;
    });
    
   
});
