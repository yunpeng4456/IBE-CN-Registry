import React from 'react';
import { Layout } from 'antd';
import { Outlet, useModel, } from '@umijs/max';
import SideNav from '@/components/SideNav';
import TopNav from '@/components/TopNav';
import { debounce } from '@/utils/util';

import './index.scss';

const Index: React.FC = () => {
    const {setDeviceType, setCollapsed} = useModel('global');
    const setWindowSize = () => {

        const clientWidth =  document.documentElement.clientWidth || document.body.clientWidth;
        if (clientWidth <= 500) {
            // 手机
            setCollapsed(true); // 折叠上侧菜单
            setDeviceType('phone');
        } else if (clientWidth <= 1200) {
            // 平板
            setCollapsed(true); // 折叠上侧菜单
            setDeviceType('tablet');
        } else {
            // 电脑
            setDeviceType('computer');
        }
    };


    const resize = debounce(() => {
        setWindowSize();
    });

    window.addEventListener('resize', resize);
    return (
        <Layout className="layout">
            <SideNav> </SideNav>
            <Layout >
                <TopNav></TopNav>
                <Layout.Content
                    className="site-layout"
                    style={{
                        padding: 24
                    }}
                >
                    <Outlet></Outlet>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default Index;
