import fs from "fs";
import path from "path";

export function getLogoDataUri(file = "logo-wordmark-white.png") {
  const filePath = path.join(process.cwd(), "public", "images", file);
  const buffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${buffer.toString("base64")}`;
}
