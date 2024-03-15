<script setup>
function redirectToLogin() {
  const domain = 'lp-jcmt-app.auth.us-east-1.amazoncognito.com'
  const client_id = '70gepdg8ojtprkjb0n8vqgcakn'
  let redirectUri =
    window.location.protocol +
    '//' +
    window.location.hostname +
    (window.location.port ? ':' + window.location.port : '')
  redirectUri = encodeURIComponent(redirectUri)

  const login_redirect = `https://${domain}/login?client_id=${client_id}&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=${redirectUri}`

  window.location.href = login_redirect
}
</script>

<template>
  <div class="btn-container">
    <button class="btn-login" @click="redirectToLogin()">Login</button>
  </div>
</template>

<style scoped>
/* CSS */

.btn-container {
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-login {
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn-login:hover,
.btn-login:focus {
  background-color: #f082ac;
}
</style>
