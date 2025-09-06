import { useUser } from '@clerk/clerk-react'
import TestGitHubAccess from '../components/auth/TestGitHubAccess'

export default function Dashboard() {
  const { user } = useUser()
  
  const githubAccount = user?.externalAccounts?.find(
    account => account.provider === 'github'
  )

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome, {user?.firstName || user?.username}!
        </h1>
        <p className="text-gray-600">
          GitHub: @{githubAccount?.username || 'Not connected'}
        </p>
      </div>

      {/* User Info Card */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Account Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p><strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}</p>
            <p><strong>Clerk ID:</strong> {user?.id}</p>
          </div>
          {githubAccount && (
            <div>
              <p><strong>GitHub ID:</strong> {githubAccount.providerUserId}</p>
              <p><strong>Scopes:</strong> {githubAccount.approvedScopes?.join(', ') || 'None visible'}</p>
            </div>
          )}
        </div>
      </div>

      {/* GitHub Test Component */}
      <TestGitHubAccess />
    </div>
  )
}
