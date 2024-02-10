const posts = [
    {
      id: 1,
      title: 'Modern Condo in Downtown',
      href: '#',
      imageUrls: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Stunning modern condo located in the heart of downtown. Spacious open floor plan with floor-to-ceiling windows offering breathtaking city views.',
      date: 'Jan 31, 2024',
      datetime: '2024-01-31',
      category: {
        title: 'Real Estate',
        href: '#'
      },
      author: {
        name: 'Jane Doe',
        role: 'Real Estate Agent',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Placeholder image URL
      }
    },
    {
      id: 2,
      title: 'Charming Family Home',
      href: '#',
      imageUrls: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      description: 'Lovely family home located in a quiet neighborhood. Features include a spacious backyard, updated kitchen, and cozy fireplace in the living room.',
      date: 'Feb 15, 2024',
      datetime: '2024-02-15',
      category: {
        title: 'Real Estate',
        href: '#'
      },
      author: {
        name: 'John Smith',
        role: 'Real Estate Agent',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Placeholder image URL
      }
    },
    {
      id: 3,
      title: 'Luxurious Penthouse with Panoramic Views',
      href: '#',
      imageUrls: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Luxurious penthouse offering unparalleled luxury and panoramic views. High-end finishes, private rooftop terrace, and exclusive amenities make this a truly exceptional property.',
      date: 'Mar 10, 2024',
      datetime: '2024-03-10',
      category: {
        title: 'Real Estate',
        href: '#'
      },
      author: {
        name: 'Emily Johnson',
        role: 'Real Estate Agent',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Placeholder image URL
      }
    }
  ];
  
  
  export default function Features() {
    return (
      <div className="bg-white shadow-2xl p-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="bg-red">
                   <img src={post.imageUrls} alt="" className="transition duration-500 ease-in-out transform hover:scale-110 h-300 w-100 rounded-md shadow-custom cursor-pointer" />
                    
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
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
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-cover bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  