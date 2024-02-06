import { fetchData } from '../action'
import Card from '@/components/Card'

export default async function Cms() {
	const data = await fetchData(
		'https://dolphin-app-nc329.ondigitalocean.app/api/articles?populate=*',
		'bearer 1ba5cca5c3290471cce8b0e694d1df34eedbb0d22c651445516c82bd761f087a292c5e07811982207917f20aa88649ec29be0f123012512ee7ac264fe6c2e1678e1a43fa997430552fb6c4adfc4c184b96533ba5ed602e6c0cbd90aaa357df0cf28958ada5280271e2914afb4250a200a6ed0d3da087cb92c2f072b30e8f2043'
	)
	return (
		<div className="w-4/5 mx-auto my-12 grid md:grid-cols-2 gap-4">
			{data.data
				.map((item) => (
					<Card
						key={item.id}
						cardInfo={item}
					/>
				))
				.sort((a, b) => a.key - b.key)}
		</div>
	)
}
