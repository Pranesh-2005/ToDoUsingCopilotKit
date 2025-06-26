import {
  CopilotRuntime,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { OpenAIAdapter } from "@copilotkit/ai-openai";
import { NextRequest } from "next/server";

const runtime = new CopilotRuntime();

const serviceAdapter = new OpenAIAdapter({
  apiKey: process.env.AZURE_OPENAI_API_KEY!,
  apiBaseUrl: `${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT}`,
  apiVersion: "2025-01-01-preview", // Use your Azure OpenAI API version
  isAzure: true,
});

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
