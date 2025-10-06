// import { NextResponse } from 'next/server'

// export async function POST(req: Request) {
//   try {
//     const { email } = await req.json()

//     if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
//     }

//     // Your Payload form ID
//     const formID = '2'

//     // Build Payload API endpoint
//     const payloadURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`

//     // Send request to Payload CMS securely from the server
//     const res = await fetch(payloadURL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `users API-Key ${process.env.PAYLOAD_API_KEY || ''}`, // optional if your endpoint requires it
//       },
//       body: JSON.stringify({
//         form: formID,
//         submissionData: [{ field: 'email', value: email }],
//       }),
//     })

//     const data = await res.json()

//     if (!res.ok) {
//       console.error('Payload error:', data)
//       return NextResponse.json(
//         { error: data.errors?.[0]?.message || 'Failed to submit form' },
//         { status: res.status },
//       )
//     }

//     return NextResponse.json({ success: true })
//   } catch (err) {
//     console.error('Server error:', err)
//     return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
//   }
// }

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, phone, category } = await req.json()

    // Basic validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }
    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 })
    }
    if (!category) {
      return NextResponse.json({ error: 'Category is required' }, { status: 400 })
    }

    const formID = '2' // Your Payload form ID
    const payloadURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`

    // Send request to Payload CMS securely from the server
    const res = await fetch(payloadURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `users API-Key ${process.env.PAYLOAD_SECRET || ''}`,
      },
      body: JSON.stringify({
        form: formID,
        submissionData: [
          { field: 'email', value: email },
          { field: 'phone', value: phone },
          { field: 'category', value: category },
        ],
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error('Payload error:', data)
      return NextResponse.json(
        { error: data.errors?.[0]?.message || 'Failed to submit form' },
        { status: res.status },
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Server error:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
