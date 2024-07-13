import { Layout } from 'antd';
import './HeroSection.css';

const { Content } = Layout;

const HeroSection = () => {
    return (
        <Layout className="hero-section">
            <Content style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                <div className='pl-5'>
                    <h2 className='text-white font-semibold text-xl '>Welcome to LabOne Hospital</h2>
                    <p className='text-white font-medium text-sm '>Comprehensive Care for Every Patient</p>
                </div>
            </Content>
        </Layout>
    );
};

export default HeroSection;