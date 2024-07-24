import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import dotenv from "dotenv";
import { Users } from "./collections/users";
// import { Products } from "./collections/Products/Products";
// import { Media } from "./collections/Media";
// import { ProductFiles } from "./collections/ProductFile";
// import { Orders } from "./collections/Orders";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "", // Ensure this is set correctly in your .env file
  collections: [Users /* Products, Media, ProductFiles, Orders */], // Add other collections here as needed
  routes: {
    admin: "/sell",
  },
  admin: {
    user: "users", // Updated property name to `userCollection`
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- Gleba",
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.jpg",
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!, // Ensure this is set correctly in your .env file
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
