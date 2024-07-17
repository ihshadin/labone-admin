
import image from "../../assets/image/labOneLogo.png";
import UpdatePassword from "../../components/ForgetPassword/UpdatePassword";

const ResetPassword = () => {
  return (
    <>
      <section className="bg-white/40 bg-blend-color-burn border p-3 md:p-8 my-10 rounded-xl w-full max-w-[470px] mx-auto shadow-lg">
        <div className="w-full text-center pb-7 flex justify-start gap-4">
          <img className="inline-block w-20 " src={image} alt="img" />
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-xl font-bold pt-4">
              Let’s change your password
            </h1>
            <p>Welcome back, you’ve been missed!</p>
          </div>
        </div>

        {/* <div className=" text-center">
          <h2 className="text-primary text-xl font-semibold">
            Forget Password
          </h2>
          <Divider plain>Update your Password</Divider>
        </div> */}
        <div className="mt-5 md:mt-5 mb-5">
          <UpdatePassword />
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
