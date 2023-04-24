import { Navigate, Outlet, useModel } from '@umijs/max';

export default () => {
	const { userInfo } = useModel('userInfo');
	return <Outlet />;
	// if (userInfo && userInfo.username) {
	// 	return <Outlet />;
	// } else{
	// 	return <Navigate to="/login" />;
	// }
}
