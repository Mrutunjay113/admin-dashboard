"use server";
import { Product, User } from "./model";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import ConnectMongoDb from "./utils";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    ConnectMongoDb();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user!");
  } finally {
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  }
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    ConnectMongoDb();

    const newUser = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });
    await newUser.save();
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user!");
  } finally {
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  }
};

export const updateUser = async (formData) => {
  const { id, username, email, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    ConnectMongoDb();
    const updateFields = {
      username,
      email,
      phone,
      address,
      isAdmin,
      isActive,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  }
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    ConnectMongoDb();
    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  }
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    ConnectMongoDb();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product!");
  } finally {
    revalidatePath("/dashboard/products");
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    ConnectMongoDb();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete User!");
  } finally {
    revalidatePath("/dashboard/users");
  }
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  console.log(username, password);

  try {
    await signIn("credentials", {
      username,
      password,
    });
  } catch (error) {
    return { error: "Wrong credentials!" };
  }
};
