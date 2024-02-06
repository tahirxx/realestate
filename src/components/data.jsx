

const data = [
    {
      id: 1,
      title: 'Modern Condo in Downtown',
      href: '#',
      imageUrls: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Stunning modern condo located in the heart of downtown. Spacious open floor plan with floor-to-ceiling windows offering breathtaking city views.',
      price: '$645,700' ,
     
      category: {
        location: 'Columbus',
        href: '#'
      },
      author: {
        name: 'Jane Doe',
        role: 'Real Estate Agent',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Placeholder image URL
      }
    },
    {
      id: 2,
      title: 'Charming Family Home',
      href: '#',
      imageUrls: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      description: 'Lovely family home located in a quiet neighborhood. Features include a spacious backyard, uppriced kitchen, and cozy fireplace in the living room.',
      price: '$530,000',
       category: {
        location: 'Gahanna',
        href: '#'
      },
      author: {
        name: 'John Smith',
        role: 'Real Estate Agent',
        href: '#',
        imageUrl: 'https://via.placeholder.com/150' // Placeholder image URL
      }
    },
    {
      id: 3,
      title: 'Luxurious Penthouse with Panoramic Views',
      href: '#',
      imageUrls: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Luxurious penthouse offering unparalleled luxury and panoramic views. High-end finishes, private rooftop terrace, and exclusive amenities make this a truly exceptional property.',
      price: '$590,000',
     
      category: {
        location: 'Columbus',
        href: '#'
      },
      author: {
        name: 'Emily Johnson',
        role: 'Real Estate Agent',
        href: '#',
        imageUrl: 'https://via.placeholder.com/150' // Placeholder image URL
      }
    }, 
     {
          id: 4,
          title: "Luxury Penthouse with Panoramic Views",
          href: "#",
          imageUrls: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=http%3A%2F%2Fcdn.photos.sparkplatform.com%2Fcr%2F20231208224307839894000000-o.jpg%3Fprice%3D2024-01-08&option=N&permitphotoenlargement=false&w=1024",
          description: "This luxurious penthouse offers unparalleled panoramic views of the city skyline. With state-of-the-art amenities and exquisite interior design, this is urban living at its finest.",
          price: "$821,000",
          
          category: {
            location: "Columbus",
            href: "#"
          },
          author: {
            name: "John Smith",
            role: "Luxury Real Estate Agent",
            href: "#",
            imageUrl: "https://example.com/author_image4.jpg"
          }
        },
        {
          id: 5,
          title: "Charming Brownstone in Historic District",
          href: "#",
          imageUrls: "https://photos.zillowstatic.com/fp/a0e35739ee275b70519d3c7fb6404c49-cc_ft_960.webp",
          description: "Step into this charming brownstone nestled in the heart of a historic district. Elegant architectural details blend seamlessly with modern upprices, creating a timeless appeal.",
          price: "$477,900",
          
          category: {
            location: "Hillard",
            href: "#"
          },
          author: {
            name: "Emily Johnson",
            role: "Historic Properties Specialist",
            href: "#",
            imageUrl: "https://example.com/author_image5.jpg"
          }
        },
        {
          id: 6,
          title: "Sleek Urban Loft with Industrial Chic Vibes",
          href: "#",
          imageUrls: "https://photos.zillowstatic.com/fp/0e17b618b7e10548732e73acc4e78b58-cc_ft_960.webp",
          description: "Embrace the industrial chic vibes of this sleek urban loft. High ceilings, exposed brick walls, and polished concrete floors define the modern aesthetic of this stylish residence.",
          price: "$410,400",
          
          category: {
            location: "Dublin",
            href: "#"
          },
          author: {
            name: "Michael Thompson",
            role: "Loft Specialist",
            href: "#",
            imageUrl: "https://example.com/author_image6.jpg"
          }
        },
        {
          id: 7,
          title: "Contemporary Townhouse with Private Courtyard",
          href: "#",
          imageUrls: "https://photos.zillowstatic.com/fp/a1dfabbdd26830b2fbc040bff83d6193-cc_ft_960.webp",
          description: "Discover modern elegance in this contemporary townhouse featuring a private courtyard oasis. Perfect for entertaining or relaxing, this urban retreat offers the best of both worlds.",
          price: "$329,000",
         
          category: {
            location: "Pickerington",
            href: "#"
          },
          author: {
            name: "Sarah Adams",
            role: "Urban Living Expert",
            href: "#",
            imageUrl: "https://example.com/author_image7.jpg"
          }
        },
        {
          id: 8,
          title: "High-Rise Apartment with Resort-Style Amenities",
          href: "#",
          imageUrls: "https://photos.zillowstatic.com/fp/55b89ba9e55df1dcdb54d1426a01e52f-cc_ft_960.webp",
          description: "Indulge in luxury living in this high-rise apartment boasting resort-style amenities. From a rooftop pool to a fitness center and concierge services, every convenience is at your fingertips.",
          price: "$1,500,000",
          
          category: {
            location: "Columbus",
            href: "#"
          },
          author: {
            name: "David Brown",
            role: "Luxury Apartment Specialist",
            href: "#",
            imageUrl: "https://example.com/author_image8.jpg"
          }
        },
        {
          id: 9,
          title: "Cozy Studio in Trendy Neighborhood",
          href: "#",
          imageUrls: "https://photos.zillowstatic.com/fp/489683811eb678edd95ce600e75fe82a-cc_ft_960.webp",
          description: "Experience city living at its coziest in this studio apartment located in a trendy neighborhood. Thoughtfully designed with modern finishes, this space maximizes comfort and functionality.",
          price: "$660,000",
       
          category: {
            location: "Columbus",
            href: "#"
          },
          author: {
            name: "Jessica Miller",
            role: "Urban Lifestyle Consultant",
            href: "#",
            imageUrl: "https://example.com/author_image9.jpg"
          }
        },
        {
          id: 10,
          title: "Gorgeous Condo with Skyline Views",
          href: "#",
          imageUrls: "https://photos.zillowstatic.com/fp/1842dfc85963659825f0b57453dfd695-cc_ft_960.webp",
          description: "Welcome to this gorgeous condo offering breathtaking skyline views. With modern amenities and a prime location, this is city living at its finest.",
         
          price: "$385,500",
          category: {
            location: "Gahanna",
            href: "#"
          },
          author: {
            name: "Andrew Wilson",
            role: "City Living Specialist",
            href: "#",
            imageUrl: "https://example.com/author_image10.jpg"
          }
        }, 
            {
              id: 11,
              title: "Urban Chic Apartment with City Views",
              href: "#",
              imageUrls: "https://photos.zillowstatic.com/fp/3721fca7a9b07ac7ec747c9b0cea2ada-o_a.webp",
              description: "Discover urban chic living in this stylish apartment boasting stunning city views. With contemporary design and convenient amenities, this is the epitome of city living.",
              price: "1,900,000",
              
              category: {
                location: "Pickerington",
                href: "#"
              },
              author: {
                name: "Olivia Roberts",
                role: "Urban Living Specialist",
                href: "#",
                imageUrl: "https://example.com/author_image11.jpg"
              }
            },
            {
              id: 12,
              title: "Luxurious Downtown Loft with River Views",
              href: "#",
              imageUrls: "https://photos.zillowstatic.com/fp/8cdae898dbf1a3be4ac22aeb8d11ebd3-cc_ft_960.webp",
              description: "Indulge in luxury living in this downtown loft offering breathtaking river views. With high-end finishes and prime location, this loft is perfect for discerning urban dwellers.",
              price: "$560,000",
             
              category: {
                location: "Gahanna",
                href: "#"
              },
              author: {
                name: "Daniel Johnson",
                role: "Luxury Loft Specialist",
                href: "#",
                imageUrl: "https://example.com/author_image12.jpg"
              }
            },
            {
              id: 13,
              title: "Coastal Retreat with Ocean Views",
              href: "#",
              imageUrls: "https://photos.zillowstatic.com/fp/8a73153d676f4ab4e95490486246f8b9-cc_ft_960.webp",
              description: "Escape to this coastal retreat boasting stunning ocean views. With serene surroundings and modern amenities, this is the perfect seaside getaway.",
              price: "$725,600",
             
              category: {
                location: "Columbus",
                href: "#"
              },
              author: {
                name: "Sophia Davis",
                role: "Coastal Property Specialist",
                href: "#",
                imageUrl: "https://example.com/author_image13.jpg"
              }
            },
            {
              id: 14,
              title: "Modern Townhome in Vibrant Neighborhood",
              href: "#",
              imageUrls: "https://ap.rdcpix.com/92ac0da0f2d7cdfccdcac865fd780f0el-b60686916od-w480_h360_x2.webp?w=1080&q=75",
              description: "Experience modern living in this stylish townhome located in a vibrant neighborhood. With contemporary design and close proximity to amenities, this home offers the best of urban living.",
              price: "$378,999",
           
              category: {
                location: "Hillard",
                href: "#"
              },
              author: {
                name: "Nathan Brown",
                role: "Urban Home Specialist",
                href: "#",
                imageUrl: "https://example.com/author_image14.jpg"
              }
            },
            {
              id: 15,
              title: "Elegant Condo with Park Views",
              href: "#",
              imageUrls: "https://ap.rdcpix.com/039ec094a88e60088dd1e4af64038ab6l-b1916930990od-w1024_h768_x2.webp?w=1080&q=75",
              description: "Welcome to this elegant condo offering serene park views. With sophisticated design and modern amenities, this condo is perfect for those seeking luxury in a peaceful setting.",
              price: "$659,950",
              
              category: {
                location: "Hillard",
                href: "#"
              },
              author: {
                name: "Isabella Taylor",
                role: "Luxury Condo Specialist",
                href: "#",
                imageUrl: "https://example.com/author_image15.jpg"
              }
            }
          
          
      
      
  ];
  
  export default data;