// import { useAppDispatch } from "../../redux/hooks";
// import { toast } from "sonner";
// import image from "../../assets/image/labOneLogo.png";

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Col, Form, Input, Row } from "antd";
// import { useLoginMutation } from "../../redux/features/auth/authApi";
// import { verifyToken } from "../../utils/verifyToken";
// import { setUser } from "../../redux/features/auth/authSlice";

// const ResetPassword = () => {
//     const [isLoading, setIsLoading] = useState(false);
//   const [form] = Form.useForm();
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const [login] = useLoginMutation();

//   const onSubmit = async (data: any) => {
//     setIsLoading(true);
//     const toastId = toast.loading("Reset Password...");
//     console.log(data)

//     // try {
//     //   const userInfo = await login(data).unwrap();
//     //   const user = verifyToken(userInfo?.data?.accessToken);

//     //   dispatch(setUser({ user: user, token: userInfo?.data?.accessToken }));

//     //   if (user?.role === "admin") {
//     //     toast.success("Logged In successful!", { id: toastId, duration: 2000 });
//     //     localStorage.setItem("accessToken", userInfo?.data?.accessToken);
//     //     navigate("/forget-password");
//     //     setIsLoading(false);
//     //   } else {
//     //     toast.error("Your are Unauthorized!", {
//     //       id: toastId,
//     //       duration: 2000,
//     //     });
//     //     setIsLoading(false);
//     //   }
//     // } catch (error: any) {
//     //   setIsLoading(false);

//     //   if (error?.data?.message) {
//     //     toast.error(error?.data?.message, { id: toastId });
//     //   }
//     // }
//   };
//     return (
//         <div className="max-w-[450px] mx-auto">
//         <div className="bg-white min-h-[470px] rounded-xl px-6 ">
//           <div className="w-full text-center pb-8">
//             <img className="inline-block mt-10" src={image} alt="img" />
//             <h1 className="text-2xl font-bold pt-4 pb-2">Let’s reset your password</h1>
//             <p>Welcome back, you’ve been missed!</p>
//           </div>
  
//           <Row>
//             <Col span={24}>
//               <Form
//                 form={form}
//                 onFinish={onSubmit}
//                 requiredMark={false}
//                 layout="vertical"
//               >
//                 <Row gutter={16} className="flex items-center flex-col w-full">
//                   <Col span={24} className="!w-full">
//                     <Form.Item
//                       label="Enter your email"
//                       name="email"
//                       initialValue={"jahidmorol2@gmail.com"}
//                       tooltip="Here you have to input  your email."
//                       rules={[{ required: true, message: "Email is required" }]}
//                     >
//                       <Input
//                         type="email"
//                         placeholder="Enter type your email..."
//                         className="h-10 border border-[#C4CAD4] !rounded-lg"
//                       />
//                     </Form.Item>
//                   </Col>
                
//                 </Row>
  
//                 <Row>
//                   <div className="flex items-center justify-center w-full">
//                     <button
//                       className="cursor-pointer w-full hover:bg-gray-950 py-1.5 bg-primary font-medium  text-white rounded-lg"
//                       type="submit"
//                       disabled={isLoading ? true : false}
//                     >
//                       {isLoading ? "Loading..." : "Submit"}
//                     </button>
//                   </div>
//                 </Row>
//               </Form>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     );
// };

// export default ResetPassword;