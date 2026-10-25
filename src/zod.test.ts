import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";

// Guard for GHSA-mrhx-c7xc-m3w5: zod must resolve to the fixed 4.x line.
const zodPkg = JSON.parse(
  readFileSync(
    new URL("../node_modules/zod/package.json", import.meta.url),
    "utf8",
  ),
) as { version: string };

describe("zod security update", () => {
  test("zod resolves to the CVE-fixed 4.x version", () => {
    expect(zodPkg.version).toMatch(/^4\./);
  });
});
