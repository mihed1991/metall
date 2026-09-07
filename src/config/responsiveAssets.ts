import { assetUrl } from './assets'

const imageUrl = (fileName: string) => assetUrl(`images/${fileName}`)

export const responsiveAssets = {
  foundation: { desktop: imageUrl('dekstop1.jpg'), mobile: imageUrl('mob1.jpg') },
  quality: { desktop: imageUrl('dekstop2.jpg'), mobile: imageUrl('mob2.jpg') },
  services: { desktop: imageUrl('dekstop3.jpg'), mobile: imageUrl('mob3.jpg') },
  engineering: { desktop: imageUrl('dekstop4.jpg'), mobile: imageUrl('mob4.jpg') },
  bending: { desktop: imageUrl('dekstop5.jpg'), mobile: imageUrl('mob6.jpg') },
  blueprint: { desktop: imageUrl('dekstop6.jpg'), mobile: imageUrl('mob7.jpg') },
}
