import { Input } from "../../components/input/Input";
import { FieldWrapper } from "../../components/fieldWrapper/FieldWrapper";
import { Button } from "../../components/button/Button";

export const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-left-division"/>
      <div className="login-right-division">
        <form className="login-form-container">
          <div className="login-form-title"><h2>Login</h2></div>
          <FieldWrapper >
            <Input
              type="text"
              id="login_email"
              placeholder="Enter email here"
            />
          </FieldWrapper>
          <FieldWrapper >
            <Input
              type="password"
              id="login_password"
              placeholder="Enter Password here"
            />
          </FieldWrapper>
          <div className="login-form-button-container">
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
