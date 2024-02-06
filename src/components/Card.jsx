import Image from 'next/image'

export default function Card(props) {
	const title = props.cardInfo.attributes.Title
	const content = props.cardInfo.attributes.Content
	const images = props.cardInfo.attributes.Image.data
	const videos = props.cardInfo.attributes.Video.data

	return (
		<div className="card">
			<h2 className="mb-3">{title}</h2>
			<p>{content}</p>

			{images ? (
				<div className="w-4/5 mx-auto my-4 grid grid-cols-4 auto-rows-auto gap-2">
					{images.map((image, index) => (
						<div
							key={index}
							className="w-full relative h-24"
						>
							<Image
								className="w-full object-cover"
								src={image.attributes.url}
								alt={image.attributes.name}
								fill
								sizes="10vw"
							/>
						</div>
					))}
				</div>
			) : null}

			{videos ? (
				<div className="w-4/5 mx-auto my-4 grid grid-cols-1 auto-rows-auto gap-2">
					{videos.map((video, index) => (
						<video
							className="my-4"
							key={index}
							controls
							width="100%"
						>
							{video.attributes.url.includes('https://') ? (
								<source
									src={video.attributes.url}
									type={video.attributes.mime}
								/>
							) : (
								<source
									src={`https://${video.attributes.url}`}
									type={video.attributes.mime}
								/>
							)}
						</video>
					))}
				</div>
			) : null}
		</div>
	)
}
