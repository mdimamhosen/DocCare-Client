import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-slate-100">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button
              type="primary"
              style={{ background: "black", borderColor: "white" }}
            >
              Back Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};
export default NotFound;
