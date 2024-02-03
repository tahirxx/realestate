
import data from './data'

export default function Listing() {
  return (
   
      
      <div className="bg-white shadow-2xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="bg-red">
                   <img src={post.imageUrls} alt="" className="h-300 w-100 rounded-md transition duration-300 ease-in-out transform shadow-custom cursor-pointer" />
                    
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="text-white text-base bg-primary rounded-lg mt-1 text-center h-6 w-20 " >
                    {post.price}
                 </div>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-black">{post.description}</p>
                </div>
                
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
   
  
