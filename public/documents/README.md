# Documents Folder

This folder contains downloadable documents for your personal webpage.

## Resume File

### Current Status
- **File**: `resume.pdf` (currently a placeholder)
- **URL**: `https://yoursite.com/documents/resume.pdf`
- **Footer Link**: "Resume" button in the Resources section

### To Add Your Resume

1. **Replace the placeholder file**: Delete the current `resume.pdf` and add your actual resume PDF file
2. **Keep the same filename**: Make sure your resume file is named exactly `resume.pdf`
3. **File location**: Place it in this folder (`/public/documents/`)
4. **Test the link**: After replacement, the Resume button in the footer will download your actual resume

### File Requirements
- **Format**: PDF (recommended)
- **Filename**: `resume.pdf` (exact match)
- **Size**: Keep under 5MB for optimal loading
- **Content**: Make sure your resume is up-to-date and professionally formatted

### How It Works
Files in the `/public/documents/` folder are served directly by Next.js at the URL `/documents/filename`. When users click the "Resume" button in the footer, their browser will download or open your resume PDF file. 