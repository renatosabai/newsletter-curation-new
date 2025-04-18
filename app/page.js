export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Newsletter Curation System</h1>
      <p>This system automatically curates content for newsletters.</p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/api/cron" style={{ 
          padding: '0.5rem 1rem', 
          backgroundColor: '#0070f3', 
          color: 'white', 
          borderRadius: '0.25rem',
          textDecoration: 'none'
        }}>
          Run Curation Manually
        </a>
      </div>
    </div>
  )
}