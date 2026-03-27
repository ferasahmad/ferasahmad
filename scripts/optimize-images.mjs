import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();

const jobs = [
  {
    input: "public/images/hero-section/sea.png",
    outputBase: "public/images/optimized/hero-section/sea",
    widths: [640, 960, 1280, 1600, 1920],
  },
  {
    input: "public/images/hero-section/ferasahmad.png",
    outputBase: "public/images/optimized/hero-section/ferasahmad",
    widths: [300, 450, 600, 900],
  },
  {
    input: "public/images/about-section/main.png",
    outputBase: "public/images/optimized/about-section/main",
    widths: [600, 900, 1200, 1600],
  },
  {
    input: "public/images/contact-section/boats-2.jpg",
    outputBase: "public/images/optimized/contact-section/boats-2",
    widths: [640, 960, 1280, 1600, 1920],
  },
];

const ensureDir = async (filePath) => {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
};

const writeVariant = async (inputPath, outputPath, width, format) => {
  const pipeline = sharp(inputPath).resize({
    width,
    withoutEnlargement: true,
    fit: "inside",
  });

  if (format === "webp") {
    await pipeline.webp({ quality: 70, effort: 6 }).toFile(outputPath);
  } else {
    await pipeline.avif({ quality: 48, effort: 8 }).toFile(outputPath);
  }
};

for (const job of jobs) {
  const inputPath = path.join(rootDir, job.input);
  for (const width of job.widths) {
    const avifPath = path.join(rootDir, `${job.outputBase}-${width}.avif`);
    const webpPath = path.join(rootDir, `${job.outputBase}-${width}.webp`);
    await ensureDir(avifPath);
    await ensureDir(webpPath);
    await writeVariant(inputPath, avifPath, width, "avif");
    await writeVariant(inputPath, webpPath, width, "webp");
  }
}

console.log("Optimized image variants generated.");
