import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import routes from './router/routes'  //路由配置表
import store from './store'  
import * as serviceWorker from './serviceWorker';//
// 一个Service Worker是一段运行在浏览器后台进程里的脚本，
//他独立于当前页面，
//提供了那些不需要与web页面交互的功能在网页背后悄悄执行的能力。
// 在将来，基于它可以实现消息推送，静静更新以及地理围栏等服务，
// 但是目前它首先要具备的功能是拦截和处理网络请求的功能，
// 包括可编程的消息缓存管理能力。
// Service Worker的作用 ：
// 1.网络代理，转发请求，伪造响应 
// 2.离线缓存
// 3.消息推送
// 4.后台消息传递
// ————————————————
// 版权声明：本文为CSDN博主「吃不胖的磊磊磊」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/u013853928/article/details/54563800

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {routes.map(({path, name}) => <Link to={path} key={path}>{name}</Link>) }
      {routes.map(({path, component}) => <Route path={path} component={component} exact key={path} />)}
    </Router>
  </Provider>
  , document.getElementById('root'));


serviceWorker.unregister();
