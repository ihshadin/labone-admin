export const passwordRules = [
    { required: true, message: "Password is required" },
    {
      validator(_: any, value: string) {
        if (!value) {
          return Promise.resolve();
        }
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (passwordRegex.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error(
            "Password must be at least 8 characters long, and include uppercase, lowercase, number, and special character",
          ),
        );
      },
    },
  ];