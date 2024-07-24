import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextHandler } from "./next-utils";
import next from "next";
import nextApp from "next";
import { NextServer } from "next/dist/server/next";
import cms from "payload";
import type { InitOptions } from "payload/config";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms: any) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });

  app.use((req, res) => nextHandler(req, res));

  const nextApp: NextServer = require("next")({
    dev: process.env.NODE_ENV !== "production",
  });

  nextApp.prepare().then(() => {
    // payload.logger.info("Next.js started");

    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};

start();
