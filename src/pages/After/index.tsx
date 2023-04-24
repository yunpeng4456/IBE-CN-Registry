import { PageContainer } from '@ant-design/pro-components';

const AccessPage: React.FC = () => {
  return (
    <PageContainer
      ghost
      header={{
        title: '院后管理',
      }}
    >
        <div>欢迎来到 院后管理 页面</div>
    </PageContainer>
  );
};

export default AccessPage;
