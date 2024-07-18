interface ProcessEnv {
    MY_NAME: string;
  }
  
  declare namespace NodeJS {
    interface Process {
      env: ProcessEnv;
    }
  }
  