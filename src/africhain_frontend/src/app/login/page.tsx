import Login from "../../component/login";
import Wrapper from "../../layouts/Wrapper";

export const metadata = {
   title: "AfriChain",
};
const index = () => {
   return (
      <Wrapper>
         <Login />
      </Wrapper>
   )
}

export default index