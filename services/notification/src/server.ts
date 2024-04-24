import {
  // IEmailMessageDetails,
  winstonLogger,
} from "@microservices-shared/common";
import "express-async-errors";
import { Logger } from "winston";
import { config } from "@notifications/config";
import { Application } from "express";
import http from "http";
import { healthRoutes } from "@notifications/routes";
import { checkConnection } from "@notifications/elasticsearch";
import { createConnection } from "@notifications/queues/connection";
import { Channel } from "amqplib";
import {
  consumeAuthEmailMessages,
  consumeOrderEmailMessages,
} from "@notifications/queues/email.consumer";

const SERVER_PORT = 4001;
const log: Logger = winstonLogger(
  `${config.ELASTIC_SEARCH_URL}`,
  "notificationServer",
  "debug"
);

export function start(app: Application): void {
  startServer(app);
  app.use("", healthRoutes);
  startQueues();
  startElasticSearch();
}

async function startQueues(): Promise<void> {
  const emailChannel: Channel = (await createConnection()) as Channel;
  await consumeAuthEmailMessages(emailChannel);
  await consumeOrderEmailMessages(emailChannel);

  //TEST VERIFY USER
  // const verificationLink = `${config.CLIENT_URL}/confirm_email?v_token=12211212`;
  // const messageDetails: IEmailMessageDetails = {
  //   receiverEmail: `${config.SENDER_EMAIL}`,
  //   verifyLink: verificationLink,
  //   template: "verifyEmail",
  // };
  // await emailChannel.assertExchange("micro-email-notification", "direct");
  // const message = JSON.stringify(messageDetails);
  // emailChannel.publish(
  //   "micro-email-notification",
  //   "auth-email",
  //   Buffer.from(message)
  // );

  //TEST FORGOT PASSWORD
  // const verificationLink = `${config.CLIENT_URL}/confirm_email?v_token=12211212`;
  // const messageDetails: IEmailMessageDetails = {
  //   receiverEmail: `${config.SENDER_EMAIL}`,
  //   resetLink: verificationLink,
  //   template: "forgotPassword",
  //   username: "Bui Vuong",
  // };
  // await emailChannel.assertExchange("micro-email-notification", "direct");
  // const message = JSON.stringify(messageDetails);
  // emailChannel.publish(
  //   "micro-email-notification",
  //   "auth-email",
  //   Buffer.from(message)
  // );

  // TEST ORDER QUEUE
  // await emailChannel.assertExchange("micro-order-notification", "direct");
  // const message1 = JSON.stringify({
  //   name: "micro",
  //   service: "order notification",
  // });
  // emailChannel.publish(
  //   "micro-order-notification",
  //   "order-email",
  //   Buffer.from(message1)
  // );
}

function startElasticSearch(): void {
  checkConnection();
}

function startServer(app: Application): void {
  try {
    const httpServer: http.Server = new http.Server(app);
    log.info(
      `Worker with process id of ${process.pid} on notification server has started`
    );
    httpServer.listen(SERVER_PORT, () => {
      log.info(`Notification server running on port ${SERVER_PORT}`);
    });
  } catch (error) {
    log.log("error", "NotificationService startServer() method:", error);
  }
}
