import { Divider } from "antd";
import UpdatePassword from "../../components/ForgetPassword/UpdatePassword";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="text-base flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Lab One
          </Link>
          <span>/</span>
          <span>Forget Password</span>
        </div>
      </section>
      <section className="bg-white/40 bg-blend-color-burn border p-3 md:p-8 my-10 rounded-xl w-full max-w-[600px] mx-auto">
        <div className=" text-center">
          <h2 className="text-primary text-xl font-semibold">
            Forget Password
          </h2>
          <Divider plain>Update your Password</Divider>
        </div>
        <div className="mt-8 md:mt-10">
          <UpdatePassword />
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
