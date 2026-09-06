type ResponsivePictureProps = {
  desktop: string
  mobile: string
  alt: string
  className?: string
  imageClassName?: string
  loading?: 'eager' | 'lazy'
  decorative?: boolean
}

export function ResponsivePicture({
  desktop,
  mobile,
  alt,
  className,
  imageClassName,
  loading = 'lazy',
  decorative = false,
}: ResponsivePictureProps) {
  return (
    <picture className={className} aria-hidden={decorative ? 'true' : undefined}>
      <source media="(max-width: 800px)" srcSet={mobile} />
      <img
        className={imageClassName}
        src={desktop}
        alt={decorative ? '' : alt}
        loading={loading}
      />
    </picture>
  )
}
