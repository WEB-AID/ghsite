import Greetings from '../../components/Greetings/Greetings'
import PlantPhotoBlock from '@/components/PlantPhotoBlock/Greetings'

export default async function Home() {
    return (
        <main className="flex flex-col">
            <PlantPhotoBlock />
            <Greetings />
        </main>
    )
}
