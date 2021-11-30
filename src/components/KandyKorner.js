import { LocationCard } from "./locations/LocationCard"


export const KandyKorner = () => (
    <>
    <h2>Kandy Korner</h2>
    <small>Welcome to Kandy Korner</small>
    <h2>Locations</h2>
    <article className="locations">
        <LocationCard />
        <LocationCard />
        <LocationCard />
    </article>
    </>
)

