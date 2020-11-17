//GIO统计
  !function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.growingio.com/2.1/gio.js","gio");
  gio('init','844010516d2d97c9', {});
  
//设置登录用户ID  
  gio('setUserId','<shiro:principal property="id"/>');
  gio('clearUserId');
  //设置应用级变量
  var social_account = Cookie.getCookie("cookie_key_account");
  gio('app.set',{'user_name':'<shiro:principal property="username"/>','social_account':social_account})
  gio('config', {'hashtag':true}); //放在init和send之间
 
  gio('send');