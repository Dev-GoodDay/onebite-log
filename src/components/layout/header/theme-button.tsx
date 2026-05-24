import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { useSetTheme, useTheme } from '@/store/theme'
import type { Theme } from '@/types'
import { PopoverClose } from '@radix-ui/react-popover'
import { CheckIcon, SunIcon } from 'lucide-react'

const THEMES: Theme[] = ['system', 'dark', 'light']

export default function ThemeButton() {
  const currentTheme = useTheme()
  const setTheme = useSetTheme()

  return (
    <Popover>
      <PopoverTrigger className="hover:bg-muted cursor-pointer rounded-full p-2">
        <SunIcon />
        <span className="sr-only">테마 변경</span>
      </PopoverTrigger>
      <PopoverContent className="w-34 p-0">
        {THEMES.map(theme => (
          <PopoverClose key={`theme-button-${theme}`} asChild>
            <button
              onClick={() => setTheme(theme)}
              className="hover:bg-muted flex w-full cursor-pointer items-center justify-between p-3">
              {theme}
              {currentTheme === theme && <CheckIcon className="h-4 w-4" />}
            </button>
          </PopoverClose>
        ))}
      </PopoverContent>
    </Popover>
  )
}
