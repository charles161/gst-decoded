import { ProgressBar } from './components/layout/ProgressBar'
import { ChapterNav } from './components/layout/ChapterNav'
import { OpeningCinematic } from './components/storytelling/OpeningCinematic'
import { useIsMobile } from './hooks/useIsMobile'
import { colors } from './config/theme'

// Chapter imports
import { Ch01 } from './content/chapters/ch01'
import { Ch02 } from './content/chapters/ch02'
import { Ch03 } from './content/chapters/ch03'
import { Ch04 } from './content/chapters/ch04'
import { Ch05 } from './content/chapters/ch05'
import { Ch06 } from './content/chapters/ch06'
import { Ch07 } from './content/chapters/ch07'
import { Ch08 } from './content/chapters/ch08'
import { Ch09 } from './content/chapters/ch09'
import { Ch10 } from './content/chapters/ch10'
import { Ch11 } from './content/chapters/ch11'
import { Ch12 } from './content/chapters/ch12'
import { Ch13 } from './content/chapters/ch13'
import { Ch14 } from './content/chapters/ch14'
import { Ch15 } from './content/chapters/ch15'
import { Ch16 } from './content/chapters/ch16'
import { Ch17 } from './content/chapters/ch17'
import { Ch18 } from './content/chapters/ch18'

function App() {
  const isMobile = useIsMobile()

  return (
    <div style={{ background: colors.ocean, minHeight: '100vh' }}>
      <ProgressBar />
      <ChapterNav />

      <main style={{ marginLeft: isMobile ? 0 : 208 }}>
        <OpeningCinematic />
        <Ch01 />
        <Ch02 />
        <Ch03 />
        <Ch04 />
        <Ch05 />
        <Ch06 />
        <Ch07 />
        <Ch08 />
        <Ch09 />
        <Ch10 />
        <Ch11 />
        <Ch12 />
        <Ch13 />
        <Ch14 />
        <Ch15 />
        <Ch16 />
        <Ch17 />
        <Ch18 />

        {/* Footer */}
        <footer className="py-20 text-center" style={{ color: colors.text.muted }}>
          <p className="text-sm">
            GST Decoded — Built for founders who need to understand India's tax system.
          </p>
          <p className="text-xs mt-2 opacity-60">
            Content accuracy: February 2026. Always verify with a qualified CA for your specific situation.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
