import { Navigate, Outlet, useModel } from '@umijs/max';

export default () => {
	const { userInfo } = useModel('userInfo');
	if (userInfo && userInfo.username) {
		return <Navigate to="/home" />;
	} else{
		return <Outlet />;
	}
}
