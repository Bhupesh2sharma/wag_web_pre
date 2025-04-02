import Link from 'next/link'
import Header from '@/components/navbar'
import Footer from '@/components/footer'
import { getAllBlogs } from '@/lib/blogApi'
import Image from 'next/image'

export default async function BlogPage() {
  const posts = await getAllBlogs();

  return (
    <>
      <Header />
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900">Blog</h1>
          <div className="space-y-8">
            {posts.map((post: {
              _id: string;
              title: string;
              description: string;
              images?: string[];
            }) => {
              const shortDescription = post.description.length > 150 
                ? post.description.substring(0, 150) + '...' 
                : post.description;

              return (
                <article key={post._id} className="border-b border-zinc-200 pb-8">
                  <Link href={`/blog/${post._id}`}>
                    <h2 className="text-2xl font-bold text-zinc-900 hover:text-blue-600 mb-2">{post.title}</h2>
                  </Link>
                  {post.images && post.images.length > 0 && (
                    <div className="relative h-64 mb-4">
                      <Image
                        src={post.images[0]}
                        alt={post.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <p className="text-zinc-600 mb-2">{shortDescription}</p>
                  {post.description.length > 150 && (
                    <Link 
                      href={`/blog/${post._id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More →
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}