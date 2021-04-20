import Image from 'next/image'

const ProfilePic = () => (
  <Image
    src='/images/profile.jpeg'
    height={144}
    width={144}
    alt='Minha fotinho'
  />
)