import * as opentelemetry from "@opentelemetry/sdk-node";
import logsAPI from "@opentelemetry/api-logs";
import { ExpressInstrumentation } from "@opentelemetry/instrumentation-express";
import { WinstonInstrumentation } from "@opentelemetry/instrumentation-winston";
import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { consts } from "./const";
import {
  LoggerProvider,
  SimpleLogRecordProcessor,
  ConsoleLogRecordExporter,
} from "@opentelemetry/sdk-logs";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";

const loggerProvider = new LoggerProvider();

loggerProvider.addLogRecordProcessor(
  new SimpleLogRecordProcessor(new ConsoleLogRecordExporter())
);

logsAPI.logs.setGlobalLoggerProvider(loggerProvider);

const sdk = new opentelemetry.NodeSDK({
  serviceName: consts.service_name,
  autoDetectResources: true,
  traceExporter: new opentelemetry.tracing.ConsoleSpanExporter(),
  instrumentations: [
    getNodeAutoInstrumentations({
      "@opentelemetry/instrumentation-fs": {
        requireParentSpan: true,
      },
    }),
    new HttpInstrumentation(),
    new ExpressInstrumentation(),
    new WinstonInstrumentation({
      logHook: (span, record) => {
        record["resource.service.name"] = consts.service_name + ":" + "logger";
      },
    }),
  ],
});

sdk.start();
