#!/usr/bin/env node
/**
 * Generate OG images for all pages using Playwright
 *
 * Usage:
 *   1. Start dev server: npm run dev
 *   2. Run this script: node scripts/generate-og-images.mjs
 *
 * Or use the /og-generator page manually and click "Export All"
 */

import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '..', 'public', 'assets', 'og');

const ogImages = [
  { id: 'home', name: 'Home' },
  { id: 'code-mode', name: 'Code Mode' },
  { id: 'voice-coding', name: 'Voice Coding' },
  { id: 'pricing', name: 'Pricing' },
  { id: 'offline', name: 'Offline Dictation' },
  { id: 'features', name: 'Features' },
  { id: 'compare', name: 'Compare' },
  { id: 'blog', name: 'Blog' },
  { id: 'speech-to-text', name: 'Speech to Text' },
  { id: 'developers', name: 'For Developers' },
];

async function generateOGImages() {
  console.log('🎨 Generating OG images...\n');

  // Ensure output directory exists
  await mkdir(outputDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    deviceScaleFactor: 2, // Retina quality
  });
  const page = await context.newPage();

  try {
    // Navigate to OG generator
    await page.goto('http://localhost:3000/og-generator', {
      waitUntil: 'networkidle',
    });

    for (let i = 0; i < ogImages.length; i++) {
      const og = ogImages[i];

      // Click the button to switch to this OG
      await page.click(`button:has-text("${og.name}")`);
      await page.waitForTimeout(300); // Wait for render

      // Find and screenshot the OG container (1200x630 element)
      const ogContainer = page.locator('[style*="width: 1200px"][style*="height: 630px"]').first();

      if (await ogContainer.count() > 0) {
        await ogContainer.screenshot({
          path: join(outputDir, `${og.id}.png`),
          type: 'png',
        });
        console.log(`✅ ${og.id}.png`);
      } else {
        // Fallback: screenshot the bordered container
        const borderedContainer = page.locator('.border.border-white\\/10.rounded-lg.overflow-hidden').first();
        if (await borderedContainer.count() > 0) {
          await borderedContainer.screenshot({
            path: join(outputDir, `${og.id}.png`),
            type: 'png',
          });
          console.log(`✅ ${og.id}.png (fallback)`);
        } else {
          console.log(`❌ ${og.id}.png - container not found`);
        }
      }
    }

    console.log(`\n🎉 Done! OG images saved to: public/assets/og/`);
    console.log('\nNext steps:');
    console.log('1. Update page metadata to use new OG images');
    console.log('2. Example: openGraph: { images: ["/assets/og/home.png"] }');

  } catch (error) {
    console.error('Error generating OG images:', error);
  } finally {
    await browser.close();
  }
}

generateOGImages();
