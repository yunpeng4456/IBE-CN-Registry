import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes: [
    {
      name: '登录',
      path: '/login',
      component: './Login',
      wrappers: [
        '@/wrappers/loginAuth',
      ],
    },
    {
      path: '/',
      component: './index',
      wrappers: [
        '@/wrappers/auth',
      ],
      routes: [
        {
          name: '首页',
          path: 'home',
          component: './Home',
        },
        {
          name: '成员管理',
          path: 'people',
          component: './People',
        },
        {
          name: '项目管理',
          path: 'project',
          component: './Project',
        },
        {
          name: '患者管理',
          path: 'patient',
          component: './Patient',
        },
        {
          name: '病案管理',
          path: 'case',
          component: './Case',
        },
        {
          name: '院后管理',
          path: 'after',
          component: './After',
        },
        {
          name: '研究项目',
          path: 'study',
          component: './Study',
        },
        { path: '', redirect: '/home' },
        { path: '*', redirect: '/home' },
      ]
    }
  ],
  npmClient: 'pnpm',
  styles: [
      `
      * {
        font-family: PingFang SC, Source Han Sans SC, sans-serif;
      }
      /* 滚动槽 */
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-track {
        border-radius: 3px;
        background: rgba(0, 0, 0, 0.06);
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
      }
      /* 滚动条滑块 */
      ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: rgba(0, 0, 0, 0.12);
        -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
      }
      
      .cover-bg {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      .contain-bg {
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
      `
  ],
  publicPath: './',
  history: {
    type: 'hash'
  }
});

