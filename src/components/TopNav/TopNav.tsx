import React from 'react';
import { Avatar, Dropdown, Layout, Space } from 'antd';
import './TopNav.scss';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { history, useModel } from '@umijs/max';

const TopNav = () => {
	const { collapsed, setCollapsed } = useModel('global');
	const { setUserInfo } = useModel('userInfo');

	const userMenus = [
		{
			key: 'center',
			icon: <UserOutlined />,
			label: '个人中心',
		},
		{
			key: 'settings',
			icon: <SettingOutlined />,
			label: '个人设置',
		},
		{
			type: 'divider' as const,
		},
		{
			key: 'logout',
			icon: <LogoutOutlined />,
			label: '退出登录',
		},
	];

	const onMenuClick = (event) => {
		if (event.key === 'logout'){
			setUserInfo(null);
			setTimeout(() => history.push('/login'));
		}
	}

	return <Layout.Header className="top-nav-container">
		<div className="top-left">
			{ React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
				className: 'trigger',
				onClick: () => setCollapsed(!collapsed),
			})}
		</div>

		<div className="top-right">
			<Dropdown menu={{ items: userMenus,  onClick: onMenuClick }} className="user-avatar">
				<Space>
					<Avatar size={24} icon={<UserOutlined />} /> 用户名
				</Space>
			</Dropdown>
		</div>

	</Layout.Header>
}

export default TopNav;
