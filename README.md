git上传学习Redux的使用方法及技巧





**## 运行**

\```bash

npm i || cnpm i

npm start

\```



\> 为便于大家由浅入深进行学习，该demo不包含业务逻辑，仅供大家学习 redux、react-redux、redux-saga的使用，体会 redux数据管理的思想。完整的包含业务逻辑的框架我将另建项目。



**## 说明**

\- 状态管理使用 redux、react-redux

\- 异步管理(副作用)使用 redux-saga

\- 路由使用 react-router-dom

\- ajax 使用 axios

\- 模拟数据使用 mock

\- 路由状态同步使用 connected-react-router

\- 数据持久化使用 redux-persist



**## 目录结构**



\```

mock 模拟数据

src

 api 网络接口

 assets 放一些公共的样式图片等资源内容

 containers 放置页面组件比如说Home

   components 放此页面组件独享的子组件

 components 放置页面之间可以共享的共用组件

 store redux仓库

   reducers 纯函数（同步改变状态）

   actions

   action-types

   saga 管理异步（副作用）

   index

 index.js入口文件

 index.html 模板文件

 \```

