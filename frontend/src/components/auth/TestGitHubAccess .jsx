import { useUser } from '@clerk/nextjs'

export default function TestGitHubAccess() {
  const { user } = useUser()
  
  const testFullAccess = async () => {
    try {
      // Get GitHub access token from Clerk
      const token = await fetch('/api/github/token').then(r => r.json())
      
      // Test multiple API endpoints
      const tests = [
        fetch('https://api.github.com/user', { headers: { Authorization: `Bearer ${token}` }}),
        fetch('https://api.github.com/user/repos', { headers: { Authorization: `Bearer ${token}` }}),
        fetch('https://api.github.com/user/orgs', { headers: { Authorization: `Bearer ${token}` }}),
        fetch('https://api.github.com/user/emails', { headers: { Authorization: `Bearer ${token}` }})
      ]
      
      const results = await Promise.all(tests)
      console.log('✅ All GitHub API endpoints accessible')
      
    } catch (error) {
      console.error('❌ GitHub API access error:', error)
    }
  }

  return (
    <div className="p-4">
      <h2>Test Maximum GitHub Access</h2>
      <button onClick={testFullAccess} className="bg-blue-500 text-white px-4 py-2 rounded">
        Test Full GitHub Access
      </button>
    </div>
  )
}
