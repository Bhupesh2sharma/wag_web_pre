import dynamic from 'next/dynamic'

const SomeComponent = dynamic(() => import('./SomeComponent'), {
  ssr: false
})

export default SomeComponent