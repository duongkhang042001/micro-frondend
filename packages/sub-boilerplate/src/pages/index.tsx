import { MicroAppLink } from "@umijs/max";
import { Button } from "antd";

export default function HomePage() {
  return <div>
    <MicroAppLink isMaster to="/">
      <Button>go to master app</Button>
    </MicroAppLink>
    
    App2 HomePage
  </div>;
}
