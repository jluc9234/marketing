# Create-A-Date App Gallery Setup

## How to Add Images to Your Gallery

1. **Place your images** in the `images/` folder (drag & drop works!)
2. **Name your images** like: `screenshot1.jpg`, `app-ui.png`, `feature-demo.gif`, etc.
3. **Update the HTML** to replace the placeholder content with your actual images

## To Replace Placeholders with Real Images:

Find these lines in `index.html` (around lines 568-615) and replace the placeholder divs with:

```html
<div class="gallery-item">
    <img src="images/your-image-name.jpg" alt="Your description">
    <div class="gallery-overlay">
        <h3>Your Image Title</h3>
        <p>Your image description here</p>
    </div>
</div>
```

## Supported Image Formats:
- JPG/JPEG
- PNG
- GIF
- WebP
- SVG

## Gallery Features:
- Responsive design (works on all devices)
- Hover effects with image scaling
- Beautiful gradient overlays
- Smooth animations
- Perfect for showcasing your app!

The gallery is located between the "How It Works" section and the "Call to Action" section.
