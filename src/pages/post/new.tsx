import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { CreatePostInput } from '../../schema/post.schema'
import { trpc } from '../../utils/trpc'

function CreateNewPost() {
	const { handleSubmit, register } = useForm<CreatePostInput>()
	const router = useRouter()

	const { mutate, error } = trpc.useMutation(['post.create-post'], {
		onSuccess({ id }) {
			router.push(`/post/${id}`)
		},
	})

	function onSubmit(values: CreatePostInput) {
		mutate(values)
	}
	return (
		<>
			<Head>
				<title>Last Set</title>
				<meta name='description' content='Quit your Friendlies' />
				<link rel='icon' href='/shine.png' />
			</Head>

			<form
				className='self-center flex flex-col w-fill items-center pt-16 font-sans border border-sky-400 border-spacing-3 bg-sky-400 justify-center rounded-b-xl'
				onSubmit={handleSubmit(onSubmit)}
			>
				{error && error.message}
				<h1 className='text-neutral-50 text-3xl font-bold'>Create a Post</h1>

				<input
					type='text'
					placeholder='Title'
					className='w-5/6 p-3 rounded-t-lg border border-x-0 border-t-0 border-b-2 border-neutral-200'
					{...register('title')}
				/>
				<textarea
					placeholder='message'
					className='w-5/6 h-56 p-3 rounded-b-lg'
					{...register('body')}
				/>
				<button className='rounded-xl p-4 m-3 bg-neutral-100 w-64 translate-y-1 hover:translate-y-0 hover:shadow-xl active:text-neutral-50 active:bg-sky-400 active:border-neutral-100 active:border transition delay-100 ease-in-out'>
					Post
				</button>
			</form>
		</>
	)
}

export default CreateNewPost
