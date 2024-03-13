

// Lưu thông tin đăng nhập
function saveUserData(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }
  
  // Kiểm tra thông tin đăng nhập
  function checkUserData(username, password) {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    
    return username === savedUsername && password === savedPassword;
  }
  
  // Xóa thông tin đăng nhập
  function clearUserData() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
  
  signInButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (checkUserData(username, password)) {
      alert('Đăng nhập thành công!');
      // Redirect hoặc thực hiện các hành động khác sau khi đăng nhập thành công
    } else {
      alert('Sai tên đăng nhập hoặc mật khẩu!');
    }
  });
  
  signUpButton.addEventListener('click', () => {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    
    saveUserData(username, password);
    alert('Đăng ký thành công!');
    // Redirect hoặc thực hiện các hành động khác sau khi đăng ký thành công
  });
  
  // Đăng xuất
  signOutButton.addEventListener('click', () => {
    clearUserData();
    // Redirect hoặc thực hiện các hành động khác sau khi đăng xuất
  });
  
