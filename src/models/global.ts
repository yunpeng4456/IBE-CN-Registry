// 全局共享数据示例
import { useState } from 'react';

const useGlobal = () => {
  let type ;
  let c = false;
  const clientWidth =  document.documentElement.clientWidth || document.body.clientWidth;
  if (clientWidth <= 500) {
    // 手机
    c = true; // 折叠上侧菜单
    type = 'phone';
  } else if (clientWidth <= 1200) {
    // 平板
    c = true; // 折叠上侧菜单
    type = 'tablet';
  } else {
    // 电脑
    type = 'computer';
  }
  const [collapsed, setCollapsed] = useState<boolean>(c);
  const [deviceType, setDeviceType] = useState<'computer'|'tablet '|'phone'>(type);

  return {
    collapsed,
    setCollapsed,
    deviceType,
    setDeviceType
  };
};

export default useGlobal;
