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
          background: '#0e1a1d',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            padding: '2.5rem',
            border: '1px solid #2a3a3e',
            borderRadius: '12px',
            maxWidth: '400px',
            width: '100%',
            background: '#1b2a2e',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <span style={{ fontSize: '2rem' }}>🪡</span>
          </div>
          <h2
            style={{
              marginBottom: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
            Sew Protocol
          </h2>
          <p
            style={{
              marginBottom: '1.5rem',
              color: '#8aaeb5',
              fontSize: '0.875rem',
              textAlign: 'center',
            }}
          >
            Private beta — enter access code to continue
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Access code"
            autoFocus
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              marginBottom: '0.75rem',
              border: error ? '1px solid #ff6b6b' : '1px solid #2a3a3e',
              borderRadius: '6px',
              fontSize: '1rem',
              background: '#0e1a1d',
              color: '#ffffff',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          {error && (
            <p
              style={{
                color: '#ff6b6b',
                marginBottom: '0.75rem',
                fontSize: '0.85rem',
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
              background: '#7adddc',
              color: '#0e1a1d',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'opacity 0.2s',
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
