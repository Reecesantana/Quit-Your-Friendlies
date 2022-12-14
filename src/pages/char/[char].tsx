import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Character() {
	const router = useRouter()
	const { char } = router.query
	return (
		<>
			<Head>
				<title>Last Set {char}</title>
				<meta name='description' content='Quit your Friendlies' />
				<link rel='icon' href='/shine.png' />
			</Head>

			<main className='bg-neutral-100 text-neutral-800 mx-auto flex flex-col items-center min-h-screen'>
				<h1 className='text-3xl text-neutral-50 p-1 top-0 sticky'>{char}</h1>
			</main>
		</>
	)
}
