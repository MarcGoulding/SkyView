import { Link } from "react-router-dom";
import "./Page404.css";

function Page404() {
  return (
    <>
    <p>Error 404... Page Not Found :/</p>
    <span><Link to="/">Return home</Link></span>
    </>
    );
}

export default Page404;