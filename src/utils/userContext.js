import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "John Deo",
    email: "John@gmail.com",
  },
});

export default userContext;
