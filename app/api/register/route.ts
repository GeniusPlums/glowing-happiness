import { NextResponse } from 'next/server'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

// You'll need to set these in your environment variables
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { 
      name, 
      email, 
      phone,
      school,
      grade,
      city 
    } = body

    // Validate the input
    if (!name || !email || !phone || !school) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Initialize Google Sheets
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID!, serviceAccountAuth)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1] // Using second sheet for registrations

    // Add the row to the sheet
    await sheet.addRow({
      Name: name,
      Email: email,
      Phone: phone,
      School: school,
      Grade: grade,
      City: city,
      RegistrationDate: new Date().toISOString(),
      Status: 'Pending',
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in registration form submission:', error)
    return NextResponse.json(
      { error: 'Failed to submit registration' },
      { status: 500 }
    )
  }
}
