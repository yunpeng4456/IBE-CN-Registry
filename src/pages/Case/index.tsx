import { PageContainer } from '@ant-design/pro-components';

const AccessPage: React.FC = () => {
  return (
    <PageContainer
      ghost
      header={{
        title: '示例',
      }}
    >
        <div>欢迎来到 病案管理 页面</div>
    </PageContainer>
  );
};

export default AccessPage;
