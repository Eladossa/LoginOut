import { useHistory } from "react-router";

const SignUp = ({ setAuth }) => {
  const history = useHistory();

  return (
    <div>
      <div>Hello! Please SignUp!</div>
      <button
        onClick={() => {
          setAuth(false);
          history.goBack();
        }}
      >
        SIGNOUT
      </button>
    </div>
  );
};

export default SignUp;
