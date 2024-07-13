import { Layout } from 'antd';
import './HeroSection.css';

const { Content } = Layout;

const HeroSection = () => {
    return (
        <Layout className="hero-section">
            <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            </Content>
        </Layout>
    );
};

export default HeroSection;