<Image
  src="url"
  width={0}
  height={0}
  // sizes="100vw"
  style={{ width: '100%', height: 'auto' }} 
/>


       <Image
        src={src}
        width={200}
        height={160}
        alt={alt}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        style={{ height: '100%', width: '100%' }} //The point is right there!
        //OR className='w-100 h-100'
      />

             <Image
            src={Logo}
            width='100%'
            height='100%'
            objectFit='contain'
            alt='Brand logo'
          />

          <div className="unset-img">
  <Image alt="Mountains" src="/project/pexels-photo.jpeg" layout="fill" className="custom-img"
   />
</div>
Here is the CSS which overrides the next.js functionality.
.custom-img {
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
}

.unset-img {
  width: 100%;
}
.unset-img > div {
  position: unset !important;
}