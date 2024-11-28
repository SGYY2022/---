<template>
  <div>
     <div id="app">
    <nav class="navbar">
      <div class="navbar-container">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/" class="nav-link">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Persons" class="nav-link">历史起源</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Sight" class="nav-link">情景展示</router-link>
          </li> 
          <li class="nav-item">
            <router-link to="/Important" class="nav-link">重要习俗</router-link>
          </li> 
          <li class="nav-item">
            <router-link to="/Myvideo" class="nav-link">历史文化</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  </div>
</template>

<style scoped>
html {
  font-family: "microsoft yahei, arial, helvetica, sans-serif";
  font-size: 16px;
  background-image: url("../assets/image/A.jpg"); /* 确保路径正确 */
  background-size: cover; /* 覆盖整个页面 */
  background-position: center; /* 居中显示 */
  background-attachment: fixed; /* 固定背景，不随滚动条滚动 */
}
.app {
  padding: 0;
  margin: 0;
}
.navbar {
  background-color:rgb(87, 155, 87);
  color: white;
  padding: 10px 20px;
  opacity: 0.5;
  text-align: center;
}

.navbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-list {
  list-style: none;
  padding: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  padding: 8px 16px; /* 添加padding以便看到背景色变化 */
}

.nav-link:hover {
  color: #ede109;
}

.nav-link:active {
  color: green;
  background-color: #37b887; /* 添加背景色变化以实现高亮效果 */
}
</style>
