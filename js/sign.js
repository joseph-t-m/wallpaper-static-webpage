function check_empty() {
  var username = '';
  username = document.getElementById("Username").value;
  if (username == '') {
    alert("وارد کردن نام کاربری الزامی است");
  } else {
    var r = confirm("از صحت اطلاعات وارد شده اطمینان دارید؟");
    if (r == true) {
      document.sign.submit();
    }
  }
}
