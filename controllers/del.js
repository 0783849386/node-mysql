var x = document.querySelectorAll(".id");
var btn1 = document.querySelectorAll("button.idx");
var btn2 = document.querySelectorAll("button.update-id");
var btn3 = document.querySelectorAll(".fullname");
var btn4 = document.querySelectorAll(".age");
var btn5 = document.querySelectorAll(".address");
var modal = document.getElementById('id01');
var btn_id = document.getElementById('btn-id');
var btn_name = document.getElementById('fullname');
var btn_age = document.getElementById('age');
var btn_address = document.getElementById('address');
var btn_update_sinhvien = document.getElementById('up-sinhvien');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "888";
  }
  

  function clickButtonId(){
    
    for(i = 0; i < btn1.length; i++){
        btn1[i].addEventListener("click", onclickDeleteId);
        btn2[i].addEventListener("click", onclickUpdateId);
      }
  }
  function onclickDeleteId(event){
      var button = event.target;
      var id = button.dataset.id;
     // console.log(id);
      location.reload();
      deleteSinhVien(id);
  }
    function deleteSinhVien(id){
      axios.delete('http://localhost:3000/sinhvien/'+id, {}).then(function(res){
            console.log("Deleted!");
      });
    }
    function onclickUpdateId(event){
      var button = event.target;
      var id = button.dataset.id;
      var fullname = button.dataset.fullname;
      var age = button.dataset.age;
      var address = button.dataset.address;
      // console.log(age);
      btn_id.value = id;
      btn_name.value = fullname;
      btn_age.value = age;
      btn_address.value = address;
      modal.style.display='block';
      //updateSinhVien(id);
    }
    // function updateSinhVien(id){
    //   var name = btn_name.value;
    //   var num = btn_age.value;
    //   var add =  btn_address.value;
     
    // }
    // function postUpdateSinhvien(){
    //   axios.put('http://localhost:3000/update/'+id, {fullname: name, age: num, address:  add}).then(function(res){
    //     console.log("Updated!");
    //   });
    // }
    function loadData(){
        axios.get('http://localhost:3000/sinhvien/', {}).then(function(res){
            console.log("Deleted!");
        });
    }
function main(){
    clickButtonId();
}
main();