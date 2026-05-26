import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSignUp } from '@/hooks/mutations/auth/use-sign-up'
import { generateErrorMessage } from '@/lib/error'
import { useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'sonner'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { mutate: signUp, isPending: isSignUpPending } = useSignUp({
    onError: error => {
      const message = generateErrorMessage(error)
      toast.error(message, {
        position: 'top-center'
      })
    }
  })

  const handleSignUpClick = () => {
    if (email.trim() === '') return
    if (password.trim() === '') return

    signUp({ email, password })
  }

  return (
    <article className="flex flex-col gap-8">
      <h2 className="text-xl font-bold">회원가입</h2>
      <div className="flex flex-col gap-2">
        <Input
          disabled={isSignUpPending}
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="py-6"
          type="email"
          placeholder="example@abc.com"
          aria-label="이메일"
        />
        <Input
          disabled={isSignUpPending}
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="py-6"
          type="password"
          placeholder="password"
          aria-label="비밀번호"
        />
      </div>
      <div>
        <Button
          disabled={isSignUpPending}
          onClick={handleSignUpClick}
          className="w-full">
          회원가입
        </Button>
      </div>
      <div>
        <Link className="text-muted-foreground hover:underline" to={'/sign-in'}>
          이미 계정이 있다면? 로그인
        </Link>
      </div>
    </article>
  )
}
