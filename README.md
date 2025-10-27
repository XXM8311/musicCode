# 咸虾米音乐 - React

## 项目概述

咸虾米音乐是一个基于 React + TypeScript + Vite 构建的现代化音乐播放器应用，集成了音乐播放、搜索、推荐等功能。项目采用模块化架构，使用 Redux Toolkit 进行状态管理，Ant Design 提供 UI 组件支持。

## 技术栈

### 核心技术
- **React 18.3.1** - 前端框架
- **TypeScript 5.5.3** - 类型安全
- **Vite 5.4.8** - 构建工具
- **React Router DOM 6.27.0** - 路由管理

### 状态管理
- **Redux Toolkit 2.3.0** - 状态管理
- **React Redux 9.1.2** - React 绑定

### UI 框架
- **Ant Design 5.21.4** - UI 组件库
- **Styled Components 6.1.13** - CSS-in-JS 样式
- **React Transition Group 4.4.5** - 动画过渡

### 工具库
- **Axios 1.7.7** - HTTP 请求
- **Classnames 2.5.1** - 条件样式类名
- **Sass 1.80.2** - CSS 预处理器

## 项目结构

```
src/
├── components/          # 通用组件
│   ├── HeaderComponent.tsx      # 头部组件
│   ├── MenuComponent.tsx         # 侧边栏菜单
│   ├── Loading.tsx              # 加载组件
│   ├── PlayerBar/               # 播放器组件
│   │   ├── PlayerBar.tsx        # 播放器主组件
│   │   └── PlayerBarDetail.tsx  # 播放器详情页
│   ├── Recommended/             # 推荐页面组件
│   │   ├── Banner/              # 轮播图组件
│   │   ├── HotRecommendation/   # 热门推荐
│   │   ├── NewAlbum/           # 新碟上架
│   │   └── ListPicks/          # 榜单精选
│   ├── search/                  # 搜索组件
│   └── icon/                    # 图标组件
├── views/               # 页面组件
│   ├── Recommended.tsx         # 推荐页面
│   ├── MineLove.tsx           # 我喜欢的音乐
│   ├── RecentlyPlayed.tsx     # 最近播放
│   ├── MyCollection.tsx       # 我的收藏
│   ├── Message.tsx           # 通知与私信
│   ├── Winnow.tsx           # 精选
│   ├── Roam.tsx             # 漫游
│   ├── Topic.tsx            # 话题
│   └── SongMv.tsx           # 歌曲MV
├── common/               # 公共组件
│   ├── CommentList.tsx        # 评论列表
│   ├── PlayList.tsx          # 播放列表
│   └── SongShowList.tsx      # 歌曲展示列表
├── store/                # 状态管理
│   ├── index.ts             # Store 配置
│   └── modules/             # 状态模块
│       ├── recommended.ts   # 推荐数据
│       ├── playerSongDetail.ts # 播放器状态
│       └── user.ts          # 用户状态
├── service/              # API 服务
│   ├── api/               # API 接口
│   │   ├── recommended.ts  # 推荐相关 API
│   │   └── playerBar.ts    # 播放器相关 API
│   ├── config/            # 配置文件
│   ├── request/           # 请求封装
│   └── type/              # 类型定义
├── router/               # 路由配置
├── styles/               # 样式文件
├── utils/                 # 工具函数
└── assets/               # 静态资源
```

## 核心功能实现

### 1. 音乐播放器功能

#### 播放控制
- ✅ **播放/暂停** - 支持音频播放控制
- ✅ **上一首/下一首** - 支持歌曲切换
- ✅ **播放模式** - 顺序播放、随机播放、单曲循环
- ✅ **进度控制** - 支持拖拽进度条调节播放进度
- ✅ **音量控制** - 支持音量调节和静音

#### 播放器界面
- ✅ **迷你播放器** - 底部固定播放条
- ✅ **全屏播放器** - 支持全屏播放模式
- ✅ **歌词显示** - 实时歌词同步显示
- ✅ **播放列表** - 当前播放队列管理

#### 音频处理
- ✅ **音频加载** - 动态获取歌曲播放链接
- ✅ **时间格式化** - 播放时间显示
- ✅ **歌词解析** - LRC 格式歌词解析和同步

### 2. 推荐系统

#### 轮播图
- ✅ **Banner 展示** - 支持自动轮播和手动切换
- ✅ **背景模糊** - 动态背景效果

#### 内容推荐
- ✅ **推荐歌单** - 个性化歌单推荐
- ✅ **新碟上架** - 最新专辑展示
- ✅ **榜单精选** - 热门榜单展示

### 3. 搜索功能

#### 搜索功能
- ✅ **关键词搜索** - 支持歌曲搜索
- ✅ **搜索结果** - 展示歌曲、歌手、专辑信息
- ✅ **播放控制** - 支持单曲播放和全部播放

### 4. 用户界面

#### 布局设计
- ✅ **响应式布局** - 适配不同屏幕尺寸
- ✅ **侧边栏导航** - 功能模块导航
- ✅ **头部搜索** - 全局搜索功能
- ✅ **底部播放器** - 固定播放控制条

#### 交互体验
- ✅ **路由切换** - 页面间平滑过渡
- ✅ **加载状态** - 数据加载提示
- ✅ **动画效果** - CSS 过渡动画



### 异步操作

- ✅ **fetchRecommendedData** - 获取推荐数据
- ✅ **fetchGetSongDetail** - 获取歌曲详情
- ✅ **fetchSearchResult** - 搜索歌曲
- ✅ **changeMusicAction** - 切换歌曲

## API 接口

### 推荐相关
- ✅ `GET /banner` - 获取轮播图
- ✅ `GET /personalized` - 获取推荐歌单
- ✅ `GET /top/album` - 获取新碟上架
- ✅ `GET /playlist/detail` - 获取歌单详情

### 播放器相关
- ✅ `GET /song/url/v1` - 获取歌曲播放链接
- ✅ `GET /song/detail` - 获取歌曲详情
- ✅ `GET /lyric` - 获取歌词
- ✅ `GET /search` - 搜索歌曲

## 工具函数

### 格式化工具
- ✅ **formatTime** - 时间格式化 (毫秒转 mm:ss)
- ✅ **formatPlayCount** - 播放次数格式化 (万为单位)
- ✅ **formatLyric** - 歌词解析 (LRC 格式)

## 样式系统

### 样式架构
- ✅ **Styled Components** - CSS-in-JS 样式方案
- ✅ **模块化样式** - 按组件组织样式文件
- ✅ **主题系统** - 统一的颜色和尺寸规范


## 构建配置

### Vite 配置
- ✅ **路径别名** - `@` 指向 `src` 目录
- ✅ **代理配置** - API 请求代理
- ✅ **代码分割** - 按模块分割代码
- ✅ **构建优化** - 生产环境优化

### TypeScript 配置
- ✅ **严格模式** - 类型检查
- ✅ **路径映射** - 模块路径解析
- ✅ **类型定义** - 完整的类型支持

## 开发规范

### 代码规范
- ✅ **ESLint** - 代码质量检查
- ✅ **Prettier** - 代码格式化
- ✅ **TypeScript** - 类型安全

### 组件规范
- ✅ **函数组件** - 使用 React Hooks
- ✅ **TypeScript** - 完整的类型定义
- ✅ **Memo 优化** - 性能优化

## 待实现功能

以下功能目前仅有页面框架，具体实现待开发：

### 用户功能
- ❌ **我喜欢的音乐** - 收藏歌曲管理
- ❌ **最近播放** - 播放历史记录
- ❌ **我的收藏** - 收藏夹管理
- ❌ **通知与私信** - 消息系统

### 内容功能
- ❌ **精选** - 精选内容展示
- ❌ **漫游** - 音乐发现功能
- ❌ **话题** - 音乐话题讨论
- ❌ **歌曲MV** - MV 播放功能

### 高级功能
- ❌ **用户登录** - 用户认证系统
- ❌ **个人资料** - 用户信息管理
- ❌ **社交功能** - 分享和评论
- ❌ **离线播放** - 本地缓存功能

## 部署说明

### 环境要求
- Node.js >= 16.0.0
- pnpm >= 8.0.0

### 安装依赖
```bash
pnpm install
```

### 开发环境
```bash
pnpm start
```

### 生产构建
```bash
pnpm build
```

### 预览构建
```bash
pnpm preview
```
(声明: 该项目仅为个人学习项目，不涉及任何商业用途，也禁止任何人用于商业用途)
