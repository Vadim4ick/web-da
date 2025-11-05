'use client'

import Script from 'next/script'
import { useCallback, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

type Props = {
  enabled?: boolean
}

const YM_COUNTER_ID = 105111414

export const YandexMetrikaContainer = ({ enabled = true }: Props) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // 🔹 Функция отправки "hit" при смене маршрута
  const hit = useCallback(
    (url: string) => {
      if (enabled && typeof window !== 'undefined' && (window as any).ym) {
        ;(window as any).ym(YM_COUNTER_ID, 'hit', url)
      } else {
        console.log('%c[YandexMetrika] HIT:', 'color: orange', url)
      }
    },
    [enabled],
  )

  // 🔹 Отправляем hit при монтировании и при изменении маршрута
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')
    hit(url)
  }, [pathname, searchParams, hit])

  // 🔹 Если выключено — ничего не подключаем
  if (!enabled) return null

  // 🔹 Сам скрипт Метрики (твой оригинальный, адаптированный под Next.js)
  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) return;
                }
                k=e.createElement(t),a=e.getElementsByTagName(t)[0];
                k.async=1;k.src=r;a.parentNode.insertBefore(k,a);
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(${YM_COUNTER_ID}, 'init', {
                ssr: true,
                webvisor: true,
                clickmap: true,
                ecommerce: "dataLayer",
                accurateTrackBounce: true,
                trackLinks: true
            });
          `,
        }}
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YM_COUNTER_ID}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  )
}
