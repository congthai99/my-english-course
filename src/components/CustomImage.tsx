import Image from 'next/image';

type CustomImageProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

export default function CustomImage({
  src,
  width,
  alt,
  height,
}: CustomImageProps) {
  return (
    <div>
      <Image
        src={src || '/images/england-logo.jpg'}
        alt={alt || 'logo'}
        width={width || 50}
        height={height || 50}
        sizes='100vw'
        // fill={false}
        style={{
          objectFit: 'cover', // cover, contain, none
        }}
        // placeholder='blur'
      />
    </div>
  );
}
