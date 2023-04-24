import React, { useState } from 'react';
import { Layout, Menu, Drawer } from 'antd';
import {
    DesktopOutlined,
    HddOutlined,
    HomeOutlined,
    MailOutlined,
    MehOutlined,
    SolutionOutlined,
    TeamOutlined
} from '@ant-design/icons';
import { useModel, useAppData, history, useSelectedRoutes } from '@umijs/max';
import Settings from '@/config/defaultSetting';
import './SideNav.scss';

const SideNav = () => {
    const { collapsed, setCollapsed, deviceType } = useModel('global');
    const [path, setPath] = useState<string>('home');
    const [openKeys, setOpenKeys] = useState<string>([]);

    const appData = useAppData();

    const routeTitles = Object.keys(appData.routes)
        .map((index: string) => {
            // @ts-ignore
            const route: IRoute = appData.routes[index];

            if (route.redirect) {
                return { [route.path]: { redirect: route.redirect.replace('/', '') } };
            }

            return { [route.path]: route.name };
        })
        .reduce((pre: any, cur: any) => ({ ...pre, ...cur }));
    const route = useSelectedRoutes();
    console.log(routeTitles)
    const setTitle = () => {
        const pathname = route.lastItem.pathname.replace('/', '');
        let title = routeTitles[pathname];
        if (pathname !== path && title) {
            title = title.redirect ? routeTitles[title.redirect] : title
            document.title = title + ' - ' + Settings.title;
            setPath(pathname)
        }
    };

    setTitle();
    const onClose = () => {
        setCollapsed(true);
    };
    const handleMenuClick = (event) => {
        setPath(event.key);
        document.title = routeTitles[event.key] + ' - ' + Settings.title;

        history.push('/' + event.key);
        if (deviceType === 'phone') {
            onClose();
        }
    };

    const openChange = (s) => {
        setOpenKeys(s);
    }


    const menuItems  = [
            {
                key: 'home',
                icon: <HomeOutlined />,
                label: '首页',
            },
    {
        key: 'group',
            icon: <TeamOutlined />,
        label: '团队管理',
        children: [
        {
            key: 'people',
            label: '成员管理',
        },
        {
            key: 'project',
            label: '项目管理',
        }
    ]
    },
    {
        key: 'patient',
            icon: <MehOutlined />,
        label: '患者管理',
    },
    {
        key: 'courtyard',
            icon: <SolutionOutlined />,
        label: '院中管理',
        children: [
        {
            key: 'case',
            label: '病案管理',
        }
    ]
    },
    {
        key: 'after',
            icon: <MailOutlined />,
        label: '院后管理',
    },
    {
        key: 'study',
            icon: <HddOutlined />,
        label: '研究项目',
    }
];

    return (
        <>
            { deviceType === 'phone' ?
                <Drawer
                    placement="left"
                    onClose={onClose}
                    open={!collapsed}
                    closable={false}
                    headerStyle={{display: 'none'}}
                    className={"menus-drawer"}
                    width={200}>
                    <div className="logo">
                        <DesktopOutlined />
                         <div className="title">{ Settings.title }</div>
                    </div>
                    <Menu
                        theme={'dark'}
                        mode="inline"
                        onClick={handleMenuClick}
                        selectedKeys={[path]}
                        openKeys = {openKeys}
                        onOpenChange={openChange}
                        items={menuItems}
                        />
                </Drawer>
                :
                (<Layout.Sider trigger={null} collapsible collapsed={collapsed} theme={'dark'}>
                    <div className="logo">
                        <DesktopOutlined />
                        { !collapsed && <div className="title">{ Settings.title }</div>}
                    </div>
                    <Menu
                        theme={'dark'}
                        mode="inline"
                        onClick={handleMenuClick}
                        selectedKeys={[path]}
                        openKeys = {openKeys}
                        onOpenChange={openChange}
                        items={menuItems}
                    />
                </Layout.Sider>)
            }
        </>

  );
}

export default SideNav;
