import { useCallback } from 'react'
import { useUserAgentType } from './hooks/userAgentTypeHook'

export const App: React.FC = () => {
  const userAgent = navigator.userAgent

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(userAgent)
    } catch (e) {
      alert('クリップボードへのコピーに失敗しました')
    }
  }, [userAgent])

  const uaType = useUserAgentType(userAgent)

  return (
    <div>
      <p>{userAgent}</p>
      <p>you'r devices is {uaType}</p>
      <button onClick={copyToClipboard}>ユーザーエージェントをクリップボードにコピー</button>

      <div style={{ marginTop: '3rem' }}>
        <p style={{ fontWeight: 'bold', color: 'red' }}>
          違いを報告するをクリックする前にユーザーエージェントをコピーしてください
        </p>
        <a href="https://forms.gle/gG6cVX7q9kxgomUz5" target="_blank" rel="noopener noreferrer">
          違いを報告する
        </a>
      </div>
    </div>
  )
}

export default App
