export default function ContactButton(){
    return(
        <div>
             <a 
             className="btn px-4 py-2 hover:scale-125 transition duration-500 backdrop-blur-sm border-none bg-emerald-500 hover:bg-emerald-500 text-white mx-auto text-center rounded-full relative mt-4"
             href="/Contact"
             >
          <span>Contact Us →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </a>
        </div>
    )
}