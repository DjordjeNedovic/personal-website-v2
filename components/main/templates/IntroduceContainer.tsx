import AboutMainComponent from '@/components/about/AboutMainComponent'

const IntroduceContainer = () => {
  return (
    <div className="flex p-0 md:p-4 w-auto items-center justify-between h-auto">
      <div className="flex flex-col items-start justify-start h-auto flex-1">
        <AboutMainComponent />
      </div>
    </div>
  )
}

export default IntroduceContainer
