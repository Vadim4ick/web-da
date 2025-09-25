'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui/button'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      style={{
        boxShadow: '0px 0px 2px 0px #00000040',
      }}
      className="max-mobile:max-w-full mobile:right-[24px] max-mobile:bottom-0 fixed bottom-[24px] z-50 flex w-fit max-w-[360px] flex-col items-center justify-between gap-[24px] rounded-[12px] bg-white p-[24px] text-white"
    >
      <p className="text-primary-black text-center text-[16px] leading-[125%] font-semibold">
        Мы собираем куки — без них ничего работать не будет
      </p>

      <Button
        onClick={acceptCookies}
        className="font-montserrat max-mobile:w-full max-mobile:h-[40px] max-mobile:text-[12px] max-mobile:leading-[16px] h-[46px] w-[167px] rounded-[100px]"
      >
        Ясно, собирайте
      </Button>
    </div>
  )
}
