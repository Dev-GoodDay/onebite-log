import logo from '@/assets/logo_dailypic.svg'

export default function GlobalLoader() {
  return (
    <div className="bg-muted flex h-screen w-screen flex-col items-center justify-center">
      <div className="mb-15 flex animate-bounce items-center gap-2">
        <img src={logo} alt="" className="w-11" />
        <div className="font-raleway text-3xl font-bold">DailyPic</div>
      </div>
    </div>
  )
}
