import { Spin } from 'antd';

export default function (loading: boolean) {
    return <Spin spinning={loading} />;
}