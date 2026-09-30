const path = require('path');
const sharp = require(path.join(process.cwd(), 'node_modules/sharp'));

// Exact Figma hard-light shader
async function tintOrnament(inputPath, outputPath, colorHex, targetSize = 800) {
  let fillR, fillG, fillB;
  if (colorHex.toLowerCase() === '#d4fb20') {
    fillR = 212 / 255;
    fillG = 251 / 255;
    fillB = 32 / 255;
  } else { // #f5f5f6
    fillR = 245 / 255;
    fillG = 245 / 255;
    fillB = 246 / 255;
  }

  function hardLight(base, fill) {
    if (fill <= 0.5) {
      return 2 * base * fill;
    } else {
      return 1 - 2 * (1 - base) * (1 - fill);
    }
  }

  // First resize master to targetSize with lanczos3 to preserve razor-sharp edges
  const resizedBuffer = await sharp(inputPath)
    .resize(targetSize, targetSize, { fit: 'fill', kernel: 'lanczos3' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = resizedBuffer;

  for (let i = 0; i < data.length; i += info.channels) {
    const a = info.channels === 4 ? data[i + 3] : 255;
    if (a > 0) {
      const baseR = data[i] / 255;
      const baseG = data[i + 1] / 255;
      const baseB = data[i + 2] / 255;

      const outR = Math.round(hardLight(baseR, fillR) * 255);
      const outG = Math.round(hardLight(baseG, fillG) * 255);
      const outB = Math.round(hardLight(baseB, fillB) * 255);

      data[i] = Math.min(255, Math.max(0, outR));
      data[i + 1] = Math.min(255, Math.max(0, outG));
      data[i + 2] = Math.min(255, Math.max(0, outB));
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels
    }
  })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath);

  console.log(`✓ Generated ${outputPath} (${targetSize}x${targetSize})`);
}

const pub = 'c:/Users/Azmari Sultana/Documents/GitHub/ByteSpace New/public/assets/images';

(async () => {
  // 1. Top-Left Lime Spring (Frame 46:90)
  await tintOrnament(
    `${pub}/figma_e3b55902d605bfc37a0809e6dc6dfe61b6701897.png`,
    `${pub}/hero-spring-lime-sharp.png`,
    '#d4fb20',
    800
  );

  // 2. Mid-Left White Squiggle (Frame 46:95)
  await tintOrnament(
    `${pub}/figma_e3b55902d605bfc37a0809e6dc6dfe61b6701897.png`,
    `${pub}/hero-squiggle-white-sharp.png`,
    '#f5f5f6',
    500
  );

  // 3. Bottom-Left White Torus / Ring (Cone 46:105) - UNBROKEN & CRISP
  await tintOrnament(
    `${pub}/figma_8670b841eac7883ecb790f84eb349c6c01db588b.png`,
    `${pub}/hero-torus-white-sharp.png`,
    '#f5f5f6',
    800
  );

  // 4. Top-Right Lime Cylinder (Cone 46:110)
  await tintOrnament(
    `${pub}/figma_92fc70a39c36138c0e55699b18b3e88bd1f86a59.png`,
    `${pub}/hero-cylinder-lime-sharp.png`,
    '#d4fb20',
    800
  );

  // 5. Mid-Right White Tetrahedron (Cone 46:80)
  await tintOrnament(
    `${pub}/figma_f9c0e0fd05db48405aa72287b20d04b9a01feb51.png`,
    `${pub}/hero-tetrahedron-white-sharp.png`,
    '#f5f5f6',
    500
  );

  // 6. Bottom-Right White Coil (Frame 46:85)
  await tintOrnament(
    `${pub}/figma_cda676feaf7fba8b0f81b47c5ea2707d7acb5217.png`,
    `${pub}/hero-coil-white-sharp.png`,
    '#f5f5f6',
    800
  );

  console.log('All 6 sharp Hero ornaments successfully generated!');
})();
