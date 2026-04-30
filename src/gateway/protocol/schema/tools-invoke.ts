import { Type } from "@sinclair/typebox";
import { NonEmptyString } from "./primitives.js";

export const ToolsInvokeParamsSchema = Type.Object(
  {
    name: NonEmptyString,
    args: Type.Optional(Type.Record(Type.String(), Type.Any())),
    sessionKey: Type.Optional(NonEmptyString),
    agentId: Type.Optional(NonEmptyString),
    confirm: Type.Optional(Type.Boolean()),
    idempotencyKey: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);

export const ToolsInvokeResultSchema = Type.Object(
  {
    ok: Type.Boolean(),
    output: Type.Optional(Type.Any()),
    requiresApproval: Type.Optional(Type.Boolean()),
    approvalId: Type.Optional(NonEmptyString),
    toolName: NonEmptyString,
    source: Type.Optional(Type.String()),
    error: Type.Optional(
      Type.Object({
        code: Type.String(),
        message: Type.String(),
        details: Type.Optional(Type.Any()),
      }),
    ),
  },
  { additionalProperties: false },
);

// Export types for use in other files
export type ToolsInvokeParams = {
  name: string;
  args?: Record<string, unknown>;
  sessionKey?: string;
  agentId?: string;
  confirm?: boolean;
  idempotencyKey?: string;
};

export type ToolsInvokeResult = {
  ok: boolean;
  output?: unknown;
  requiresApproval?: boolean;
  approvalId?: string;
  toolName: string;
  source?: string;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
};
