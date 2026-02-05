const fs = require('fs');
const path = require('path');

const fontDir = path.join(__dirname, 'fonts');
const outputFile = path.join(__dirname, 'index.css');
const previewFile = path.join(__dirname, 'preview.html');

function getFontMetadata(filename) {
    const ext = path.extname(filename);
    const basename = path.basename(filename, ext);
    const fontFamily = basename.replace(/[-_]/g, ' ');

    return {
        fontFamily,
        format: ext.substring(1).toLowerCase() === 'ttf' ? 'truetype' : 'opentype'
    };
}

let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font UTM Preview</title>
    <link rel="stylesheet" href="index.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2563eb;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text: #1e293b;
            --text-muted: #64748b;
        }
        body { 
            font-family: 'Inter', sans-serif; 
            background-color: var(--bg);
            color: var(--text);
            margin: 0;
            padding: 40px 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
        }
        header {
            text-align: center;
            margin-bottom: 50px;
        }
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--primary);
        }
        .font-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
            gap: 20px;
        }
        .font-card { 
            background: var(--card-bg);
            border: 1px solid #e2e8f0; 
            padding: 24px; 
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .font-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        }
        .font-name {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--text-muted);
            margin-bottom: 12px;
            display: block;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .font-preview {
            font-size: 28px;
            line-height: 1.4;
            word-break: break-all;
        }
        .vietnamese {
            margin-top: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>UTM Fonts Collection</h1>
            <p>A curated collection of Unicode Thiên Minh fonts for web projects.</p>
        </header>
        <div class="font-grid">
`;

try {
    if (!fs.existsSync(fontDir)) {
        console.error("Font directory not found:", fontDir);
        process.exit(1);
    }

    const files = fs.readdirSync(fontDir);
    let cssContent = "/* Auto-generated UTM Font face declarations */\n\n";

    files.sort().forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (ext === '.ttf' || ext === '.otf') {
            const metadata = getFontMetadata(file);
            const fontRelPath = `./fonts/${file}`;

            cssContent += `@font-face {
  font-family: '${metadata.fontFamily}';
  src: url('${fontRelPath}') format('${metadata.format}');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}\n\n`;

            const cleanClassName = 'font-' + metadata.fontFamily.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
            cssContent += `.${cleanClassName} { font-family: '${metadata.fontFamily}'; }\n\n`;

            htmlContent += `
            <div class="font-card">
                <span class="font-name">${metadata.fontFamily}</span>
                <div class="font-preview ${cleanClassName}">
                    The quick brown fox jumps over the lazy dog
                </div>
                <div class="font-preview vietnamese ${cleanClassName}">
                    Cộng hòa xã hội chủ nghĩa Việt Nam
                </div>
            </div>`;
        }
    });

    fs.writeFileSync(outputFile, cssContent);
    console.log(`Generated ${outputFile}`);

    htmlContent += `
        </div>
    </div>
</body>
</html>`;
    fs.writeFileSync(previewFile, htmlContent);
    console.log(`Generated ${previewFile}`);

} catch (err) {
    console.error("Error:", err);
}
