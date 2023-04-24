// 用户数据
import { useState } from 'react';

const useUserInfo = () => {
	const [userInfo, setUserInfo] = useState<any>(null);
	return {
		userInfo,
		setUserInfo,
	};
};

export default useUserInfo;
