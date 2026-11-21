// news-image-20261120 v5 — "One Day, Three Fronts"
// The entry is a pre-rendered 1024x1024 PNG (entry.png, next to this file).
// This program copies it to /output/entry.png and nothing else.
// Node 22, standard library only. No network access, no random values,
// no clock reads: the output is a byte-for-byte copy of the input, so
// every run produces identical bytes.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const source = join(dir, "entry.png");
const targetDir = "/output";
const target = join(targetDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing next to main.ts: " + source);
}

// Sanity-check the input before copying: a PNG signature, and the IHDR
// width/height must be 1024x1024 (the competition's size limit).
const head = readFileSync(source, { flag: "r" });
const pngSig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (head.length < 33 || !head.subarray(0, 8).equals(pngSig)) {
  throw new Error("entry.png is not a PNG file");
}
const width = head.readUInt32BE(16);
const height = head.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png must be 1024x1024, got ${width}x${height}`);
}

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, target);

const inBytes = readFileSync(source);
const outBytes = readFileSync(target);
if (inBytes.length !== outBytes.length) {
  throw new Error(
    `size mismatch after copy: ${inBytes.length} vs ${outBytes.length}`,
  );
}
const digest = (b) => createHash("sha256").update(b).digest("hex");
if (digest(inBytes) !== digest(outBytes)) {
  throw new Error("sha256 mismatch after copy");
}
if (statSync(target).size > 1048576) {
  throw new Error("output exceeds the 1 MiB limit");
}
console.log(`entry.png -> ${target} (${outBytes.length} bytes, sha256 ${digest(outBytes)})`);
