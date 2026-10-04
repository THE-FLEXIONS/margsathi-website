export default function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="MARGSATHI home">
      <img
        src="https://res.cloudinary.com/cyymn1yh/image/upload/v1791140285/margsathi_logo-removebg-preview.png"
        alt=""
        width={62}
        height={50}
        className="h-9 w-auto sm:h-[46px]"
      />
      <span className="text-[19px] font-extrabold tracking-[-0.01em] text-navy sm:text-[21px]">
        MARGSATHI
      </span>
    </a>
  );
}
