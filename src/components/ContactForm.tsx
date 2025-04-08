// // 'use client'
// // import { RichText } from '@payloadcms/richtext-lexical/react'
// // import { Button, Form, FormInput, FormLabel } from '@thirdbracket/bracketui'
// // import { useEffect, useRef } from 'react'

// // import { useState } from 'react'

// // const MyFormComponent = ({ formId }: { formId: string }) => {
// //   const [cmsForm, setCmsForm] = useState<any>(null)
// //   const [error, setError] = useState<string | null>(null)
// //   const formRef = useRef<HTMLFormElement>(null)
// //   const [success, setSuccess] = useState<boolean>(false)

// //   // 1) get the form from payload
// //   useEffect(() => {
// //     // Fetch the form configuration
// //     fetch(`/api/forms/${formId}`)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setCmsForm(data)
// //         console.log('cmsForm', data)
// //       })
// //       .catch((err) => setError('Error loading form'))
// //   }, [formId])

// //   // 2) render the form based on field types

// //   // handle form submission
// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault()
// //     const formData = new FormData(e.currentTarget)

// //     // convert the form data to a json object, for fields that are not files
// //     const dataToSend = Array.from(formData.entries()).map(([name, value]) => ({
// //       field: name,
// //       value: value.toString(),
// //     }))

// //     // send the form data to payload
// //     const response = await fetch('/api/form-submissions', {
// //       method: 'POST',
// //       body: JSON.stringify({
// //         form: formId,
// //         submissionData: dataToSend,
// //       }),
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //     })
// //     console.log('response', response)
// //     if (response.ok) {
// //       setSuccess(true)
// //     } else {
// //       setError('Form submission failed')
// //       setSuccess(false)
// //     }

// //     // reset the form
// //     formRef.current?.reset()
// //   }

// //   if (!cmsForm) return <div>Loading...</div>

// //   if (success && cmsForm.confirmationMessage) {
// //     setTimeout(() => {
// //       setSuccess(false)
// //     }, 5000)
// //     return <RichText data={cmsForm.confirmationMessage} />
// //   }

// //   return (
// //     <Form
// //       onSubmit={handleSubmit}
// //       id={formId}
// //       //   ref={formRef}
// //       className="max-w-xl mx-auto"
// //     >
// //       <div className="mb-12 ">
// //         {cmsForm.fields.map((field: any) => (
// //           <div key={field.id} className="mb-6 ">
// //             <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
// //             <FormInput
// //               type={field.blockType}
// //               name={field.name}
// //               id={field.name}
// //               className="border border-primary-400 dark:border-primary-700 bg-primary-50 dark:bg-primary-950 focus:ring-primary-400 dark:focus:ring-primary-500"
// //             />
// //           </div>
// //         ))}
// //       </div>
// //       <Button
// //         size="md"
// //         type="submit"
// //         className="w-full !bg-gradient-primary dark:!bg-gradient-primary-dark !text-white dark:!text-primary-950  [@media(hover:hover)]:hover:opacity-90 active:opacity-80"
// //       >
// //         Send Message
// //       </Button>
// //     </Form>
// //   )
// // }

// // export default MyFormComponent

// 'use client'
// // import { RichText } from '@payloadcms/richtext-lexical/react'
// import {
//   Button,
//   Form,
//   FormInput,
//   FormLabel,
//   FormSelect,
//   FormTextarea,
// } from '@thirdbracket/bracketui'
// import { useEffect, useRef, useState } from 'react'

// type FormField = {
//   id: string
//   name: string
//   label: string
//   blockType: 'text' | 'email' | 'password' | 'select' | 'textarea' // Extend as needed
//   options?: { label: string; value: string }[] // Only applicable for select fields
// }

// type FormData = {
//   fields: FormField[]
//   confirmationMessage?: ('message' | 'redirect') | null // Adjust this type based on what RichText expects
// }

// const MyFormComponent = ({ formId }: { formId: string }) => {
//   const [cmsForm, setCmsForm] = useState<FormData | null>(null)
//   const [error, setError] = useState<string | null>(null)

//   const formRef = useRef<HTMLFormElement>(null)

//   const [success, setSuccess] = useState<boolean>(false)

//   // Fetch the form from Payload
//   useEffect(() => {
//     console.log('Fetching Form data for FormId:', formId)
//     fetch(`/api/forms/${formId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setCmsForm(data)
//         console.log('cmsForm', data)
//       })
//       .catch(() => setError('Error loading form'))
//   }, [formId])

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const formData = new FormData(e.currentTarget)

//     const dataToSend = Array.from(formData.entries()).map(([name, value]) => ({
//       field: name,
//       value: value.toString(),
//     }))

//     const response = await fetch('/api/form-submissions', {
//       method: 'POST',
//       body: JSON.stringify({
//         form: formId,
//         submissionData: dataToSend,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })

//     if (response.ok) {
//       setSuccess(true)
//     } else {
//       setError('Form submission failed')
//       setSuccess(false)
//     }

//     formRef.current?.reset()
//   }

//   if (!cmsForm)
//     return (
//       <div className="border   rounded-md p-8 max-w-xl w-full mx-auto">
//         <div className="animate-pulse flex-col space-y-12">
//           {/* <div className="rounded-sm bg-blue-400 h-12 w-12"></div> */}

//           <div className="h-6 bg-secondary-500/10 rounded "></div>

//           <div className="h-6 bg-secondary-500/10 rounded"></div>
//           <div className="h-4 bg-secondary-500/10 rounded "></div>
//           <div className="h-6 bg-secondary-500/10 rounded "></div>
//           <div className="h-6 bg-secondary-500/30 rounded w-2/6"></div>
//         </div>
//       </div>
//     )

//   if (success && cmsForm.confirmationMessage) {
//     // setTimeout(() => {
//     //   setSuccess(false)
//     // }, 5000)
//     return <p className="text-primary-700 dark:text-primary-300">{cmsForm.confirmationMessage}</p>
//   }

//   return (
//     <Form onSubmit={handleSubmit} id={formId} className="max-w-xl mx-auto">
//       <div className="mb-12">
//         {cmsForm.fields.map((field: FormField) => (
//           <div key={field.id} className="mb-6">
//             <FormLabel htmlFor={field.name}>{field.label}</FormLabel>

//             {/* Select Dropdown */}
//             {field.blockType === 'select' && field.options ? (
//               <FormSelect
//                 name={field.name}
//                 id={field.name}
//                 className="border border-primary-400 dark:border-primary-700 bg-primary-50 dark:bg-primary-950 focus:ring-primary-400 dark:focus:ring-primary-500"
//               >
//                 {field.options.map((option: { label: string; value: string }) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </FormSelect>
//             ) : field.blockType === 'textarea' ? (
//               // Textarea Field
//               <FormTextarea
//                 name={field.name}
//                 id={field.name}
//                 className="border border-primary-400 dark:border-primary-700 bg-primary-50 dark:bg-primary-950 focus:ring-primary-400 dark:focus:ring-primary-500"
//               />
//             ) : (
//               // Default Input Field
//               <FormInput
//                 type={field.blockType}
//                 name={field.name}
//                 id={field.name}
//                 className="border border-primary-400 dark:border-primary-700 bg-primary-50 dark:bg-primary-950 focus:ring-primary-400 dark:focus:ring-primary-500"
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <Button
//         size="md"
//         type="submit"
//         className="w-full !bg-gradient-primary dark:!bg-gradient-primary-dark !text-white dark:!text-primary-950 hover:opacity-90 active:opacity-80"
//       >
//         Send Message
//       </Button>
//     </Form>
//   )
// }

// export default MyFormComponent
