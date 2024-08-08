import { Divider } from "antd";
import { Link } from "react-router-dom";
import ProfileSettingsForm from "./ProfileSettingsForm";
import ChangePassForm from "./ChangePassForm";

const ProfileSettings = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="text-base flex items-center gap-2 md:gap-3">
          <Link to="/" className="text-primary">
            Lab One
          </Link>
          <span>/</span>
          <span>Settings</span>
        </div>
      </section>
      <div className="flex gap-10">
        {/* Profile Information */}
        <section className="bg-white/40 bg-blend-color-burn border p-3 md:p-8 my-10 rounded-xl w-full max-w-[800px] mx-auto">
          <div className=" text-center">
            <h2 className="text-primary text-xl font-semibold">
              Profile Settings
            </h2>
            <Divider plain>Change your Personal Information</Divider>
          </div>
          <div className="mt-8 md:mt-10">
            <ProfileSettingsForm />
          </div>
        </section>
        {/* Change Password */}

        <section className="bg-white/40 bg-blend-color-burn border p-3 md:p-8 my-10 rounded-xl w-full max-w-[800px] mx-auto  h-full">
          <div className=" text-center">
            <h2 className="text-primary text-xl font-semibold">
              Change Password
            </h2>
            <Divider plain>Change Your Password</Divider>
          </div>
          <div className="mt-8 md:mt-10">
            <ChangePassForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfileSettings;
