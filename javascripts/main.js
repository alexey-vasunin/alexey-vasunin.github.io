var Login, Password;
Login=prompt("Введите Ваш логин: ", "admin");
if (Login=="admin") {
  Password=prompt("Здравствуйте, admin! Введите пароль: ", "");
  if(Password=="123") {
    alert("Вы вошли в систему как "+Login+"!");
  }
  else {
    if (Password==null)
    {
      alert("Отмена ввода пароля.");
    }
    else {
      alert("Неверный пароль.");
    }
  }
}
else alert("Вы не имеете прав администратора.");
