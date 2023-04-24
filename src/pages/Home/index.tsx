import './index.scss';
import { Card } from 'antd';
import React from 'react';

const HomePage: React.FC = () => {
	return (
		<div className="home-page">
			<div className={ "card-item" }>
				<Card className="card-container" hoverable>
					<p>待执行计划内随访</p>
					<p><span>{ 296 }</span> 条</p>
				</Card>
			</div>

			<div className={ "card-item" }>
				<Card className="card-container" hoverable>
					<p>本团队患者数量</p>
					<p><span>{ 237 }</span> 位</p>
				</Card>
			</div>
			<div className={ "card-item" }>
				<Card className="card-container" hoverable>
					<p>平台患者总数</p>
					<p><span>{ 273 }</span> 位</p>
				</Card>
			</div>
		</div>
	);
};

export default HomePage;
