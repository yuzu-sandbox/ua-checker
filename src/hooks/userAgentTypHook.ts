import { useMemo } from 'react'

type DeviceType = 'ios' | 'android' | 'pc' | 'unknown'

const getDeviceType = (userAgent: string): DeviceType => {
  const ua = userAgent.toLowerCase()
  if (/ipad|iphone|ipod/.test(ua) && !ua.includes('Windows Phone')) {
    return 'ios'
  }

  if (/android/.test(ua)) {
    return 'android'
  }

  if (/windows|macintosh|linux/.test(ua)) {
    return 'pc'
  }

  return 'unknown'
}

export const useUserAgentType = (ua: string) => {
  return useMemo(() => {
    return getDeviceType(ua)
  }, [ua])
}
