import { Link } from "react-router-dom";
import { PATH } from "@/constant/paths";
import { NotFoundContainer, Title, Message, HomeButton } from "./style";

function NotFound() {
  return (
    <NotFoundContainer>
      <Title>404 - Not Found</Title>
      <Message>The page you are looking for does not exist.</Message>

      <Link to={PATH.HOME}>
        <HomeButton>Go to Homepage</HomeButton>
      </Link>
    </NotFoundContainer>
  );
}

export default NotFound;
