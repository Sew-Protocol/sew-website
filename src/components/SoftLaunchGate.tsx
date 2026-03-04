import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const SOFT_LAUNCH_SECRET =
  process.env.NEXT_PUBLIC_SOFT_LAUNCH_SECRET || 'changeme'
const OBSCURE_PATH = process.env.NEXT_PUBLIC_OBSCURE_PATH || 'wip'

export default function SoftLaunchGate({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const authorized = localStorage.getItem('soft_launch_auth')
    if (authorized === SOFT_LAUNCH_SECRET) {
      setIsAuthorized(true)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading && !isAuthorized) {
      const currentPath = window.location.pathname
      const expectedPath = `/${OBSCURE_PATH}/${SOFT_LAUNCH_SECRET}`
      if (currentPath !== expectedPath) {
        window.location.href = expectedPath
      }
    }
  }, [isLoading, isAuthorized])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === SOFT_LAUNCH_SECRET) {
      localStorage.setItem('soft_launch_auth', SOFT_LAUNCH_SECRET)
      document.cookie = `soft_launch_auth=${SOFT_LAUNCH_SECRET}; path=/; max-age=2592000`
      setIsAuthorized(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (isLoading) {
    return null
  }

  if (!isAuthorized) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            padding: '2rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            maxWidth: '400px',
            width: '100%',
          }}
        >
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
            Soft Launch - Access Required
          </h2>
          <p
            style={{ marginBottom: '1rem', color: '#666', fontSize: '0.9rem' }}
          >
            This site is currently in private beta. Please enter the access
            code.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter access code"
            style={{
              width: '100%',
              padding: '0.75rem',
              marginBottom: '1rem',
              border: error ? '1px solid red' : '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem',
            }}
          />
          {error && (
            <p
              style={{
                color: 'red',
                marginBottom: '1rem',
                fontSize: '0.875rem',
              }}
            >
              Incorrect access code
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              background: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Enter
          </button>
        </form>
      </div>
    )
  }

  return children
}
