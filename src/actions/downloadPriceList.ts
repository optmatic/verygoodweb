'use server'

import { promises as fs } from 'fs'
import path from 'path'

interface DownloadResponse {
  success: boolean;
  fileData: string;
}

export async function downloadPriceList(formData: FormData): Promise<DownloadResponse> {
  try {
    // Log or use the form data if needed
    const name = formData.get('name');
    const email = formData.get('email');
    const companyName = formData.get('companyName');
    
    console.log('Download requested by:', { name, email, companyName });
    
    // Read the PDF file from your public directory
    const filePath = path.join(process.cwd(), 'public', 'price-list-optmatic.pdf')
    const fileBuffer = await fs.readFile(filePath)
    
    // Convert buffer to base64 string
    const fileData = fileBuffer.toString('base64')
    
    return {
      success: true,
      fileData
    };
  } catch (error) {
    console.error('Error downloading price list:', error);
    return {
      success: false,
      fileData: ''
    };
  }
}

// export async function downloadPriceList(formData: FormData): Promise<{ fileData: string, success: boolean }> {
//   try {
//     // Save form data or handle it as needed
//     // const name = formData.get('name')
//     // const email = formData.get('email')
//     // const companyName = formData.get('companyName')
    
//     // TODO: Save form data to database or send email etc.
    
//     // Read the PDF file
//     const filePath = path.join(process.cwd(), 'public', '/price-list-optmatic.pdf')
//     const fileBuffer = await fs.readFile(filePath)
    
//     // Convert buffer to base64 string
//     const fileData = fileBuffer.toString('base64')
    
//     return {
//       fileData,
//       success: true
//     }
//   } catch (error) {
//     console.error('Error downloading price list:', error)
//     return {
//       fileData: '',
//       success: false
//     }
//   }
// }

