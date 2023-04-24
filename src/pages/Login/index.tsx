import { LockOutlined, UserOutlined, } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText, } from '@ant-design/pro-components';
import { Alert, message } from 'antd';
import { Helmet, history } from '@umijs/max';
import React, { useState } from 'react';
import './index.scss';
import Settings from '@/config/defaultSetting';
import { useModel } from '@@/exports';


const LoginMessage: React.FC<{
	content: string;
}> = ({ content }) => {
	return (
		<Alert
			style={ {
				marginBottom: 24,
			} }
			message={ content }
			type="error"
			showIcon
		/>
	);
};

const Login: React.FC = () => {
	const { setUserInfo } = useModel('userInfo');
	const [errorMessage, setErrorMessage] = useState('');
	const handleSubmit = async (values: API.LoginParams) => {
		try {
			return new Promise((resolve) => {
				setTimeout(() => {
					setUserInfo(values);
					history.push('/home');
					resolve(true);
				}, 1000);
			});
			// 登录
			// const msg = await login({ ...values });
			// if (msg.status === 'ok') {
			//     message.success('登录成功！');
			//     await fetchUserInfo();
			//     history.push('/');
			//     return;
			// }
			// console.log(msg);
		} catch (error) {
			console.log(error);
			setErrorMessage('账户或密码错误');
			message.error('登录失败，请重试！');
		}
	};

	return (
		<div className="login-container">
			<Helmet>
				<title>
					{`登录页 - ${ Settings.title }`}
				</title>
			</Helmet>
			<div className="login-card">
				<LoginForm
					contentStyle={ {
						minWidth: 280,
						maxWidth: '75vw',
						paddingTop: '20px'
					} }

					title={Settings.title}
					subTitle={' '}
					initialValues={ {} }
					onFinish={ async (values) => {
						await handleSubmit(values as API.LoginParams);
					} }
				>

					<ProFormText
						name="username"
						fieldProps={ {
							size: 'large',
							prefix: <UserOutlined/>,
						} }
						placeholder='用户名'
						rules={ [
							{
								required: true,
								message: "请输入用户名!",
							},
						] }
					/>
					<ProFormText.Password
						name="password"
						fieldProps={ {
							size: 'large',
							prefix: <LockOutlined/>,
						} }
						placeholder='密码'
						rules={ [
							{
								required: true,
								message: "请输入密码！"
							},
						] }
					/>
					<div
						style={ {
							marginBottom: 24,
						} }
					>
						<ProFormCheckbox noStyle name="autoLogin">
							自动登录
						</ProFormCheckbox>
						<a
							style={ {
								float: 'right',
							} }
						>
							忘记密码
						</a>
					</div>
					<div className="error-message">{errorMessage}</div>
				</LoginForm>
			</div>
		</div>
	);
};

export default Login;
