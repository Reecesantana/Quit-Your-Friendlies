import { useRouter } from 'next/router'
import { stringify } from 'querystring'

import { trpc } from '../../utils/trpc'

export default function SinglePost() {
	const router = useRouter()

	const postId = router.asPath.substring(6)

	const { data, isLoading } = trpc.useQuery(['post.postById', `${postId}`])

	console.log(postId)

	if (isLoading) return <p>Loading...</p>

	return (
		<>
			<div>{data?.title}</div>
			<div>{data?.body}</div>
		</>
	)
}
