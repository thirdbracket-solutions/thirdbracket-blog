import { SiNextdotjs, SiPayloadcms, SiTailwindcss, SiVercel, SiResend } from 'react-icons/si'

const iconMap: Record<string, React.ReactNode> = {
  SiNextdotjs: <SiNextdotjs key="nextjs" size={30} title="Next.js" />,
  SiPayloadcms: <SiPayloadcms key="payload" size={30} title="Payload CMS" />,
  SiTailwindcss: <SiTailwindcss key="tailwind" size={30} title="Tailwind CSS" />,
  SiVercel: <SiVercel key="vercel" size={30} title="Vercel" />,
  SiResend: <SiResend key="resend" size={30} title="Resend" />,
}

export default function TechStack(keys: string[]) {
  return keys.map((key) => iconMap[key])
}
