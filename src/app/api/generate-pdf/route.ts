import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(request: NextRequest) {
  try {
    const { htmlContent, filename } = await request.json();

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // ✅ Set full HTML content with styles
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // ✅ Optional: set a fixed viewport for consistent layout
    await page.setViewport({ width: 1200, height: 1600 });

    // ✅ Ensure white background for better results
    await page.evaluate(() => {
      document.body.style.background = 'white';
    });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '10mm',
        right: '10mm',
        bottom: '10mm',
        left: '10mm'
      }
    });

    await browser.close();

    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { success: false, message: 'Error generating PDF' },
      { status: 500 }
    );
  }
}
