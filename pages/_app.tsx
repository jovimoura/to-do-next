import React from 'react'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): React.ReactElement => {
  return <Component {...pageProps} />
}

export default MyApp
