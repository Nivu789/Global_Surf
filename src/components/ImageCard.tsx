

interface ImageCardProps {
    backgroundImage:string;
    title:string;
    category:string;
}

const ImageCard = ({backgroundImage,title,category}:ImageCardProps) => {
  return (
    <div 
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }} 
  className='h-60 w-96 bg-red-500 flex justify-start'
>
  <div className='flex flex-col pl-10 pt-40 gap-1 text-white'>
    <span className='text-3xl'>{title}</span>
    <span>{category}</span>
  </div>
</div>
  )
}

export default ImageCard