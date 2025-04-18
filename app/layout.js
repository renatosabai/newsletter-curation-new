export const metadata = {
  title: 'Newsletter Curation System',
  description: 'Automatically curate content for your newsletter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}