import Link from 'next/link'

type navProp = {
	image: string
	title: string
}

export default function NavItem({ image, title }: navProp) {
	return (
		<Link className='text-xl cursor-default' href={`/char/${title}`}>
			<div className='hover:text-sky-400 justify-center flex flex-row duration-100 hover:shadow-xl hover:bg-neutral-50'>
				<img src={image} alt={image} />
				<span className='text-xl cursor-default'>{title}</span>
			</div>
		</Link>
	)
}
