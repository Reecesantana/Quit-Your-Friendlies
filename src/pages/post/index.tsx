import Head from 'next/head'
import Link from 'next/link'
import { trpc } from '../../utils/trpc'

function PostListingPage() {
	const { data, isLoading } = trpc.useQuery(['post.posts'])

	if (isLoading) {
		return <p>Loading...</p>
	}

	return (
		<div>
			{data?.map(post => {
				return (
					<>
						<Head>
							<title>Last Set</title>
							<meta name='description' content='Quit your Friendlies' />
							<link rel='icon' href='/shine.png' />
						</Head>
						<main>
							<div className='p-4'>
								<br />
							</div>
							<div className='container flex flex-col-reverse items-center px-0 mx-auto w-3/4'>
								<article
									className='border border-neutral-700 rounded-xl w-11/12 text-center p-10'
									key={post.id}
								>
									<h1 className='text-2xl'>{post.title}</h1>
									<Link href={`/post/${post.id}`}>
										<span className='hover:text-violet-600 cursor-pointer'>
											Read post
										</span>
									</Link>
								</article>
							</div>
						</main>
					</>
				)
			})}
		</div>
	)
}

export default PostListingPage
