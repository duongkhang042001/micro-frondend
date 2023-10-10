import { Button, Result } from "antd";
import { history } from '@umijs/max';

export default function CustomErrorBoundary() {

    const handleClick = () => {
        history.push('/home')
    }

    let status: any = 500, title = "500", subTitle = "Sorry, something went wrong.";

    return (
        <Result
            status={status}
            title={title}
            subTitle={subTitle}
            extra={<Button type="primary" onClick={handleClick}>Back Home</Button>}
        />
    )

}
