import NextAuth from "next-auth";
import CredentialProver from "next-auth/providers/credentials";
import { User } from "./lib/model";
import { authConfig } from "./authconfig";
import ConnectMongoDb from "./lib/utils";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    ConnectMongoDb();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("User not found!");
    const isValid = await bcrypt.compare(credentials.password, user.password);
    if (!isValid) throw new Error("Invalid password!");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialProver({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
