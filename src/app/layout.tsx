export const metadata = {
  title: 'Amazonia Drones',
  description: 'Application to know more about Amazonia drones paths.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
