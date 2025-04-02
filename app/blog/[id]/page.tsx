import { notFound } from 'next/navigation'
import Header from '@/components/navbar'
import Footer from '@/components/footer'
import { getBlogById } from '@/lib/blogApi'
import Image from 'next/image'

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  let post;
  try {
    post = await getBlogById(params.id);
  } catch (error) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-4xl mx-auto">
          <article>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900">{post.title}</h1>
            {post.images?.length > 0 && (
              <div className="relative h-96 mb-8">
                <Image
                  src={post.images[0]}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <div className="flex items-center gap-4 text-sm text-zinc-500 mb-8">
              <time dateTime={post.createdAt}>
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>• {post.likes} Likes</span>
              <span>• {post.comments.length} Comments</span>
            </div>
            <div className="prose max-w-none mb-8">
              <p>{post.description}</p>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}