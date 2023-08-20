import AnnouncementCard from "./AnnouncementCard"

const AnnouncementPreview = ({ announcements }) => {
    return (
        <section className="m-6 grid xs:grid-cols-1 sm:grid-cols-2 gap-6">
        {announcements.map((announcement) => 
            <AnnouncementCard key={announcement.id} announcement={announcement} />
        )}
        </section>
    )
}


export default AnnouncementPreview