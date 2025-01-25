"use server"

import { promises as fs } from 'fs'
import path from 'path'

export async function downloadPriceList(formData: FormData): Promise<{ fileData: string, success: boolean }> {
  try {
    // Save form data or handle it as needed
    const name = formData.get('name')
    const email = formData.get('email')
    const companyName = formData.get('companyName')
    
    // TODO: Save form data to database or send email etc.
    
    // Read the PDF file
    const filePath = path.join(process.cwd(), 'public', '/price-list-optmatic.pdf')
    const fileBuffer = await fs.readFile(filePath)
    
    // Convert buffer to base64 string
    const fileData = fileBuffer.toString('base64')
    
    return {
      fileData,
      success: true
    }
  } catch (error) {
    console.error('Error downloading price list:', error)
    return {
      fileData: '',
      success: false
    }
  }
}

